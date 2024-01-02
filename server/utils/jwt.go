package utils

import (
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"net/http"
	"time"
)

const (
	cookieName  = "authToken"
	cookieMaxAge = 3600 // Thời gian sống của cookie trong giây (ở đây là 1 giờ)
)

type UserClaims struct {
	UserID uint
	Role string
	jwt.StandardClaims
}

// CreateToken tạo JWT và lưu trữ trong HTTP cookie
func CreateToken(c *gin.Context, userID uint, role string) (string, error) {
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

	// Lưu trữ token trong HTTP cookie
	cookie := &http.Cookie{
		Name:     cookieName,
		Value:    signedToken,
		Path:     "/",
		Expires:  time.Now().Add(time.Second * cookieMaxAge),
		HttpOnly: true,
		Secure:   true,
		SameSite: http.SameSiteStrictMode,
	}

	http.SetCookie(c.Writer, cookie)

	return signedToken, nil
}

// ParseToken parses a JWT from the HTTP cookie and returns UserClaims
func ParseToken(c *gin.Context) (*UserClaims, error) {
	// Trích xuất token từ cookie
	tokenCookie, err := c.Request.Cookie(cookieName)
	if err != nil {
		return nil, fmt.Errorf("Token không tồn tại")
	}

	// Parse token với claims của UserClaims
	token, err := jwt.ParseWithClaims(tokenCookie.Value, &UserClaims{}, func(token *jwt.Token) (interface{}, error) {
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

// RefreshToken refreshes JWT when it soon expires and updates the HTTP cookie
func RefreshToken(c *gin.Context) (string, error) {

	claims, err := ParseToken(c)
	if err != nil {
		return "", fmt.Errorf("Failed to refresh token: %v", err)
	}

	// Kiểm tra xem token có thời gian hết hạn hay không
	if time.Until(time.Unix(claims.ExpiresAt, 0)) > 30*time.Second {
		return "", fmt.Errorf("Token is not eligible for refresh")
	}

	// Tạo mới token với thời gian hết hạn mới
	newToken, err := CreateToken(c, claims.UserID, claims.Role)
	if err != nil {
		return "", fmt.Errorf("Failed to refresh token: %v", err)
	}

	// Cập nhật giá trị token trong cookie
	cookie := &http.Cookie{
		Name:     cookieName,
		Value:    newToken,
		Path:     "/",
		Expires:  time.Now().Add(time.Second * cookieMaxAge),
		HttpOnly: true,
		Secure:   true,
		SameSite: http.SameSiteStrictMode,
	}

	http.SetCookie(c.Writer, cookie)

	return newToken, nil
}

// ExtractTokenID trích xuất token từ cookie và trả về UserID
func ExtractTokenID(c *gin.Context) (uint, error) {

	claims, err := ParseToken(c)
	if err != nil {
		return 0, fmt.Errorf("Failed to extract token: %v", err)
	}

	// Trả về UserID từ claims
	return claims.UserID, nil
}

// ExtractTokenRole trích xuất token từ cookie và trả về Role
func ExtractTokenRole(c *gin.Context) (string, error) {
	
	claims, err := ParseToken(c)
	if err != nil {
		return "", fmt.Errorf("Failed to extract token: %v", err)
	}

	// Trả về Role từ claims
	return claims.Role, nil
}

// CheckAuthToken kiểm tra xem authtoken đã tồn tại hay không trong request
func CheckAuthToken(c *gin.Context) bool {
    // Trích xuất token từ cookie
    tokenCookie, err := c.Request.Cookie(cookieName)
    if err != nil {
        // Token không tồn tại
        return false
    }

    // Parse token với claims của UserClaims
    token, err := jwt.ParseWithClaims(tokenCookie.Value, &UserClaims{}, func(token *jwt.Token) (interface{}, error) {
        return []byte("your-secret-key"), nil
    })

    if err != nil {
        // Lỗi khi parse token
        return false
    }

    if _, ok := token.Claims.(*UserClaims); ok && token.Valid {
        // Token hợp lệ và đã tồn tại
        return true
    }

    // Token không hợp lệ hoặc đã hết hạn
    return false
}
