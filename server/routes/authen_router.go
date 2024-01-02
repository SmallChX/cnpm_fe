package routes

import (
	"cnpm/controllers"
	"cnpm/utils"

	"github.com/gin-gonic/gin"
)

func AuthenticationRoute(r *gin.Engine) {
	public := r.Group("/api")

	public.POST("register", controllers.RegisterHandler)
	public.POST("/login", controllers.LoginHandler)
	public.POST("/logout", controllers.Logout)

	public.GET("/check-auth", func(c *gin.Context) {
		if utils.CheckAuthToken(c) {
			c.JSON(200, gin.H{"message": "Đã đăng nhập"})
		} else {
			c.JSON(400, gin.H{"message": "Chưa đăng nhập"})
		}
	})
	public.GET("/get-role", controllers.HandleGetRole)
	public.POST("/regist-activity", controllers.CreateActivity)
	public.GET("/get-activities", controllers.GetActivitiesWithStatus)
	public.GET("/activity/:id", controllers.GetActivityByID)
	public.POST("/register-activity", controllers.RegisterActivity)
	public.GET("/account", controllers.GetAllUsersHandler)
	public.GET("/attendance/:id", controllers.GetUserListByActivityID)
}
