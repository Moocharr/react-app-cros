package main

import (
	"github.com/gin-gonic/gin"
)

//type Login struct {
//	Id    	string `json:"id"`
//	Psw		string `json:"psw"`
//}

func main() {
	router := gin.Default()

	router.GET("/adm/login", func(c *gin.Context) {

		Id := c.Query("id")
		Psw := c.Query("pswd")

		if Id=="admin" && Psw=="admin" {
			c.JSON(200, gin.H{
				"data":true,
				"id":Id,
				"pswd":Psw,
			})
		}else{
			c.JSON(200, gin.H{
				"data":false,
				"id":Id,
				"pswd":Psw,
			})
		}
	})
	router.Run(":8080")
}
