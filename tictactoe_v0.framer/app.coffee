# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info


Framer.Info =
	title: ""
	author: "Андрей Максимов"
	twitter: ""
	description: ""
{dpr} = require 'DevicePixelRatio'
# SVG
cross = """
<svg width="dpr 112" height="dpr 112" viewBox="151 190 112 112" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="cross" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(151.000000, 190.000000)">
        <rect id="Rectangle-Copy" fill="#EEEEEE" opacity="0" x="0" y="0" width="112" height="112"></rect>
        <polygon fill="#9EE493" points="63.4974747 56.4264069 102.388348 17.5355339 95.3172798 10.4644661 56.4264069 49.3553391 17.5355339 10.4644661 10.4644661 17.5355339 49.3553391 56.4264069 10.4644661 95.3172798 17.5355339 102.388348 56.4264069 63.4974747 94.6101731 101.681241 101.681241 94.6101731"></polygon>
    </g>
</svg>"""

circle = """
<svg width="dpr 112" height="dpr 112" viewBox="31 190 112 112" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="circle" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(31.000000, 190.000000)">
        <rect id="Rectangle" fill="#FFF" opacity="0" x="0" y="0" width="112" height="112"></rect>
        <path d="M56,106 C83.6142375,106 106,83.6142375 106,56 C106,28.3857625 83.6142375,6 56,6 C28.3857625,6 6,28.3857625 6,56 C6,83.6142375 28.3857625,106 56,106 Z M56,96 C78.09139,96 96,78.09139 96,56 C96,33.90861 78.09139,16 56,16 C33.90861,16 16,33.90861 16,56 C16,78.09139 33.90861,96 56,96 Z" fill="#86BBD8"></path>
    </g>
</svg>
"""

bg = new BackgroundLayer
	backgroundColor: "#2F4858"

drawBoard = (numCell, sizeCell, gameMatrix) ->
	boardArray = []
	board = new Layer
		size: dpr numCell*sizeCell+2*sizeCell/20
		backgroundColor: "rgba(255,255,255,0.10)"
	board.center()
	for i in [0..numCell-1] then for j in [0..numCell-1]
		boardCell = new Layer
			width: dpr sizeCell
			height: dpr sizeCell
			x: dpr (sizeCell+sizeCell/20)*(j)
			y: dpr (sizeCell+sizeCell/20)*(i)
			parent: board
			backgroundColor: "#2F4858"

		boardArray.push(boardCell)
		gameMatrix.push("")
	return boardArray

drawX = (boardCell) ->
	boardCell.html = cross

drawO = (boardCell) ->
	boardCell.html = circle

drawMatrix = (board, matrix)->
	for sign, i in matrix
		if sign == "0"
			drawO(board[i])
		if sign == "1"
			drawX(board[i])

checkVictory = (XO, matrix) ->
	if (matrix[0] == XO && matrix[1] == XO && matrix[2] == XO)
		return true
	if (matrix[3] == XO && matrix[4] == XO && matrix[5] == XO)
		return true
	if (matrix[6] == XO && matrix[7] == XO && matrix[8] == XO)
		return true
	if (matrix[0] == XO && matrix[3] == XO && matrix[6] == XO)
		return true
	if (matrix[1] == XO && matrix[4] == XO && matrix[7] == XO)
		return true
	if (matrix[2] == XO && matrix[5] == XO && matrix[8] == XO)
		return true
	if (matrix[0] == XO && matrix[4] == XO && matrix[8] == XO)
		return true
	if (matrix[6] == XO && matrix[4] == XO && matrix[2] == XO)
		return true
	else return false
	
gameMatrix = []
turn = 0
board = drawBoard(3, 100, gameMatrix)



newGameStart = ()->
	board.destroy()
	print "done"
	gameMatrix = []
	turn = 0
	board = drawBoard(3, 100, gameMatrix)


reDraw = (board) ->
	for layer,i in board
		layer.html=""
		gameMatrix[i]=""
		turn = 0


for button in board
	button.onClick ->
		if gameMatrix[board.indexOf this] == ""
			turn++
			if (turn % 2) == 1
				drawX(this)
				gameMatrix[board.indexOf this] = "X"
			if (turn % 2) == 0
				drawO(this)	
				gameMatrix[board.indexOf this] = "O"
			if checkVictory("X",gameMatrix) == true
				print "X - WIN"
				reDraw(board)
			if checkVictory("O",gameMatrix) == true
				print "O - WIN"
				reDraw(board)

