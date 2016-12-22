# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "Андрей Максимов"
	twitter: ""
	description: ""

# screenConst = 3
buttons=[]
i = 0
cross = """
<svg width="106px" height="106px" viewBox="1410 -247 106 106" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <circle id="Oval-2" stroke="none" fill="#4A4A4A" fill-rule="evenodd" cx="1463" cy="-194" r="53"></circle>
</svg>
"""

circle = """
<svg width="112px" height="112px" viewBox="31 190 112 112" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="circle" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(31.000000, 190.000000)">
        <rect id="Rectangle" fill="#FFF" opacity="0" x="0" y="0" width="112" height="112"></rect>
        <path d="M56,106 C83.6142375,106 106,83.6142375 106,56 C106,28.3857625 83.6142375,6 56,6 C28.3857625,6 6,28.3857625 6,56 C6,83.6142375 28.3857625,106 56,106 Z M56,96 C78.09139,96 96,78.09139 96,56 C96,33.90861 78.09139,16 56,16 C33.90861,16 16,33.90861 16,56 C16,78.09139 33.90861,96 56,96 Z" fill="#121212"></path>
    </g>
</svg>
"""
bg = new BackgroundLayer
    backgroundColor: "#2F4858"

matrix = []
matrix_receive = []
users = []
users_receive = []

{Firebase} = require 'firebase'

tictacDB = new Firebase
	projectID: "tictactoe-b9a3e"
	secret: "s13WpAEb3SVrSO5e3DCuWgA9OHma6CoRwfGULdhm"

board = new Layer
	x: Align.center
	y: Align.center
	rotationX: 45
	width: 114*3-2
	height: 114*3-2
	backgroundColor: "rgba(255,255,255,0.10)"

for indexY in [0..2]
	for indexX in [0..2]
		cell = new Layer
			x: indexX*114
			y: indexY*114
			size: 112
			backgroundColor: "#2F4858"
			opacity: 1
			parent: board
			html: """ """
		buttons.push(cell)
		matrix.push(" ")

new_user = Utils.round(Utils.randomNumber(0, 100),0)
print new_user, users

tictacDB.get "/users", (users_receive) ->
	print "User Receive:", users_receive

users.push(users_receive)
users.push(new_user)

print "Users:", users



# tictacDB.get "/users", (users_receive) ->
# 	print users_receive
#
# users.push(users_receive)
# print users
# new_user = Utils.round(Utils.randomNumber(0, 100),0)
# print new_user
# users.push(new_user)
# print users

# tictacDB.put("/users",users)

tictacDB.put("/matrix",matrix)
tictacDB.put("/index",i)

# tictacDB.get "/users", (users_receive) ->
# 	print users_receive


tictacDB.get "/matrix", (matrix_receive) ->
	for j in [0...matrix.length]
		if matrix_receive[j] == "0"
			buttons[j].html = circle
		else if matrix_receive[j] == "1"
			buttons[j].html = cross

# tictacDB.get "/matrix", (matrix) ->
# 	for j in [0...matrix.length]
# 		if matrix[j] == "0"
# 			buttons[j].html = circle
# 		else if matrix[j] == "1"
# 			buttons[j].html = cross

tictacDB.get "/index", (k) ->
	for layer in buttons
		layer.onClick ->
			actual_layer = this.html
			actual_layer_id = this.id-3
			if actual_layer == """ """
				if (k % 2) == 0
					matrix[actual_layer_id] = "1"
					tictacDB.put("/matrix",matrix)
					k++
				else
					matrix[actual_layer_id] = "0"
					tictacDB.put("/matrix",matrix)
					k++
				tictacDB.put("/index",k)
				print matrix
				print k

tictacDB.onChange "/index", (k) ->
	tictacDB.get "/matrix", (matrix_receive) ->
		for j in [0...matrix.length]
			if matrix_receive[j] == "0"
				buttons[j].html = circle
			else if matrix_receive[j] == "1"
				buttons[j].html = cross
