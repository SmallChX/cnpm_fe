package main

import (
	"github.com/gin-gonic/gin"
	"cnpm/database"
)

func main() {
	// Kết nối và migrate cơ sở dữ liệu
	database.Connect()
	database.Migrate()

	r := gin.Default()

	r.Run(":8080")
}	