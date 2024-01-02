package main

import (
	"cnpm/database"
	"cnpm/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	// Kết nối và migrate cơ sở dữ liệu
	database.Connect()
	database.Migrate()

	r := gin.Default()
	routes.AuthenticationRoute(r)
	r.Run(":8080")
}	