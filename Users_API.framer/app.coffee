# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "Андрей Максимов"
	twitter: ""
	description: ""


users = []
users_receive = []

{Firebase} = require 'firebase'

userAPI_DB = new Firebase
	projectID: "usersapi-95122"
	secret: "AYFmsArjzYFWfBbS4fFiLrsVvYE63nigpw1VSlDY"

new_user = Utils.round((Utils.randomNumber(0,100)),0)
print new_user

userAPI_DB.get "/users", (users_receive) ->
	print users
	users=users_receive
	users.push (new_user)
	print users
	userAPI_DB.put("/users", users)
