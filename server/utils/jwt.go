package utils

import (
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"time"
)

func createToken(userID, role string) (string, error) {
	// Tạo một đối tượng claims với thông tin user ID và role
	claims := UserClaims{
		UserID: userID,
		Role:   role,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * 1).Unix(), // Thời gian hết hạn của token (1 giờ)
			IssuedAt:  time.Now().Unix(),
		},
	}

	// Tạo token với claims và phương thức ký HS256
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// Ký token với secret key để tạo chuỗi ký
	signedToken, err := token.SignedString([]byte("your-secret-key"))
	if err != nil {
		return "", err
	}

	return signedToken, nil
}

// ParseToken parses a JWT and returns UserClaims
func parseToken(tokenString string) (*UserClaims, error) {
	// Parse token với claims của UserClaims
	token, err := jwt.ParseWithClaims(tokenString, &UserClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte("your-secret-key"), nil
	})

	if err != nil {
		return nil, err
	}

	if claims, ok := token.Claims.(*UserClaims); ok && token.Valid {
		return claims, nil
	}

	return nil, fmt.Errorf("Invalid token")
}

// Refresh JWT when it soon expires
func refreshToken(tokenString string) (string, error) {
    claims, err := parseToken(tokenString)
    if err != nil {
        return "", fmt.Errorf("Failed to refresh token: %v", err)
    }

    // Kiểm tra xem token có thời gian hết hạn hay không
    if time.Until(time.Unix(claims.ExpiresAt, 0)) > 30*time.Second {
        return "", fmt.Errorf("Token is not eligible for refresh")
    }

    // Tạo mới token với thời gian hết hạn mới
    newToken, err := createToken(claims.UserID, claims.Role)
    if err != nil {
        return "", fmt.Errorf("Failed to refresh token: %v", err)
    }

    return newToken, nil
}