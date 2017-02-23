# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info


Framer.Info =
	title: ""
	author: "Андрей Максимов"
	twitter: ""
	description: ""




# G A M E  S E T T I N G S
{dpr} = require 'DevicePixelRatio'

gameMatrix = []	
turn = 0

# G A M E  A R T 
cross = """
<svg width="dpr 112" height="dpr 112" viewBox="151 190 112 112" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="cross" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(151.000000, 190.000000)">
        <rect id="Rectangle-Copy" fill="#EEEEEE" opacity="0" x="0" y="0" width="112" height="112"></rect>
        <polygon fill="#2E9598" points="63.4974747 56.4264069 102.388348 17.5355339 95.3172798 10.4644661 56.4264069 49.3553391 17.5355339 10.4644661 10.4644661 17.5355339 49.3553391 56.4264069 10.4644661 95.3172798 17.5355339 102.388348 56.4264069 63.4974747 94.6101731 101.681241 101.681241 94.6101731"></polygon>
    </g>
</svg>"""

circle = """
<svg width="dpr 112" height="dpr 112" viewBox="31 190 112 112" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="circle" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(31.000000, 190.000000)">
        <rect id="Rectangle" fill="#FFF" opacity="0" x="0" y="0" width="112" height="112"></rect>
        <path d="M56,106 C83.6142375,106 106,83.6142375 106,56 C106,28.3857625 83.6142375,6 56,6 C28.3857625,6 6,28.3857625 6,56 C6,83.6142375 28.3857625,106 56,106 Z M56,96 C78.09139,96 96,78.09139 96,56 C96,33.90861 78.09139,16 56,16 C33.90861,16 16,33.90861 16,56 C16,78.09139 33.90861,96 56,96 Z" fill="#F7DB69"></path>
    </g>
</svg>
"""
crossWhite = """
<svg width="dpr 112" height="dpr 112" viewBox="151 190 112 112" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="cross" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(151.000000, 190.000000)">
        <rect id="Rectangle-Copy" fill="#EEEEEE" opacity="0" x="0" y="0" width="112" height="112"></rect>
        <polygon fill="#FFF" points="63.4974747 56.4264069 102.388348 17.5355339 95.3172798 10.4644661 56.4264069 49.3553391 17.5355339 10.4644661 10.4644661 17.5355339 49.3553391 56.4264069 10.4644661 95.3172798 17.5355339 102.388348 56.4264069 63.4974747 94.6101731 101.681241 101.681241 94.6101731"></polygon>
    </g>
</svg>"""

circleWhite = """
<svg width="dpr 112" height="dpr 112" viewBox="31 190 112 112" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="circle" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(31.000000, 190.000000)">
        <rect id="Rectangle" fill="#FFF" opacity="0" x="0" y="0" width="112" height="112"></rect>
        <path d="M56,106 C83.6142375,106 106,83.6142375 106,56 C106,28.3857625 83.6142375,6 56,6 C28.3857625,6 6,28.3857625 6,56 C6,83.6142375 28.3857625,106 56,106 Z M56,96 C78.09139,96 96,78.09139 96,56 C96,33.90861 78.09139,16 56,16 C33.90861,16 16,33.90861 16,56 C16,78.09139 33.90861,96 56,96 Z" fill="#FFF"></path>
    </g>
</svg>
"""

logo = """
<svg width="213px" height="226px" viewBox="81 159 213 226" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(82.000000, 159.000000)">
        <path d="M6.992,130.904 L15.656,130.904 L15.656,94.424 L8.36,94.424 L8.36,103.62 L-1.42108547e-14,103.62 L-1.42108547e-14,86.064 L41.648,86.064 L41.648,103.62 L33.288,103.62 L33.288,94.424 L26.068,94.424 L26.068,130.904 L34.656,130.904 L34.656,139.264 L6.992,139.264 L6.992,130.904 Z M114.135115,127.484 L98.2511145,127.484 L94.6031145,139.264 L84.1911145,139.264 L101.367115,86.064 L111.779115,86.064 L128.879115,139.264 L117.935115,139.264 L114.135115,127.484 Z M100.683115,119.124 L112.083115,119.124 L106.687115,101.34 L106.003115,101.34 L100.683115,119.124 Z M203.190229,121.404 L211.550229,121.404 L211.550229,136.604 C209.928888,137.769339 207.864242,138.68133 205.356229,139.34 C202.848216,139.99867 200.276909,140.328 197.642229,140.328 C194.298212,140.328 191.118911,139.834005 188.104229,138.846 C185.089547,137.857995 182.44224,136.262011 180.162229,134.058 C177.882218,131.853989 176.058236,128.991351 174.690229,125.47 C173.322222,121.948649 172.638229,117.680025 172.638229,112.664 C172.638229,107.445307 173.410888,103.075351 174.956229,99.554 C176.50157,96.0326491 178.490217,93.1953441 180.922229,91.042 C183.354241,88.8886559 186.064881,87.343338 189.054229,86.406 C192.043577,85.468662 194.982215,85 197.870229,85 C200.910244,85 203.481552,85.2533308 205.584229,85.76 C207.686906,86.2666692 209.422222,86.84933 210.790229,87.508 L210.790229,103.316 L202.430229,103.316 L202.430229,94.652 C200.859554,94.3986654 199.238237,94.272 197.566229,94.272 C195.590219,94.272 193.753571,94.6393297 192.056229,95.374 C190.358887,96.1086703 188.876902,97.2359924 187.610229,98.756 C186.343556,100.276008 185.355566,102.188655 184.646229,104.494 C183.936892,106.799345 183.582229,109.522651 183.582229,112.664 C183.582229,115.400014 183.911559,117.895322 184.570229,120.15 C185.228899,122.404678 186.191556,124.342659 187.458229,125.964 C188.724902,127.585341 190.27022,128.839329 192.094229,129.726 C193.918238,130.612671 195.995551,131.056 198.326229,131.056 C199.998237,131.056 201.619554,130.904002 203.190229,130.6 L203.190229,121.404 Z" id="Tic-Tac-Toe" fill="#F7DB69"></path>
        <path d="M6.992,215.904 L15.656,215.904 L15.656,179.424 L8.36,179.424 L8.36,188.62 L1.42108547e-14,188.62 L1.42108547e-14,171.064 L41.648,171.064 L41.648,188.62 L33.288,188.62 L33.288,179.424 L26.068,179.424 L26.068,215.904 L34.656,215.904 L34.656,224.264 L6.992,224.264 L6.992,215.904 Z M86.4711145,197.664 C86.4711145,193.357312 86.8764438,189.481351 87.6871145,186.036 C88.4977852,182.590649 89.7391061,179.690012 91.4111145,177.334 C93.0831229,174.977988 95.173102,173.166673 97.6811145,171.9 C100.189127,170.633327 103.140431,170 106.535115,170 C110.183133,170 113.273769,170.683993 115.807115,172.052 C118.340461,173.420007 120.405107,175.319988 122.001115,177.752 C123.597122,180.184012 124.762444,183.097316 125.497115,186.492 C126.231785,189.886684 126.599115,193.610646 126.599115,197.664 C126.599115,206.328043 124.939798,213.104642 121.621115,217.994 C118.302431,222.883358 113.273815,225.328 106.535115,225.328 C102.887096,225.328 99.783794,224.644007 97.2251145,223.276 C94.666435,221.907993 92.5891225,220.008012 90.9931145,217.576 C89.3971065,215.143988 88.2444514,212.230684 87.5351145,208.836 C86.8257776,205.441316 86.4711145,201.717354 86.4711145,197.664 Z M97.4151145,197.664 C97.4151145,200.248013 97.5291134,202.654656 97.7571145,204.884 C97.9851156,207.113344 98.415778,209.051325 99.0491145,210.698 C99.682451,212.344675 100.594442,213.649329 101.785115,214.612 C102.975787,215.574671 104.559105,216.056 106.535115,216.056 C108.308457,216.056 109.777775,215.68867 110.943115,214.954 C112.108454,214.21933 113.045778,213.092008 113.755115,211.572 C114.464451,210.051992 114.958446,208.139345 115.237115,205.834 C115.515783,203.528655 115.655115,200.805349 115.655115,197.664 C115.655115,195.181321 115.566449,192.825344 115.389115,190.596 C115.21178,188.366656 114.806451,186.416008 114.173115,184.744 C113.539778,183.071992 112.615121,181.742005 111.399115,180.754 C110.183108,179.765995 108.561791,179.272 106.535115,179.272 C102.98843,179.272 100.581788,180.817318 99.3151145,183.908 C98.0484415,186.998682 97.4151145,191.58397 97.4151145,197.664 Z M174.766229,171.064 L209.650229,171.064 L209.650229,180.336 L185.178229,180.336 L185.178229,192.724 L207.750229,192.724 L207.750229,201.996 L185.178229,201.996 L185.178229,214.992 L210.030229,214.992 L210.030229,224.264 L174.766229,224.264 L174.766229,171.064 Z" id="Tic-Tac-Toe" fill="#F26A44"></path>
        <path d="M6.992,45.904 L15.656,45.904 L15.656,9.424 L8.36,9.424 L8.36,18.62 L2.84217094e-14,18.62 L2.84217094e-14,1.064 L41.648,1.064 L41.648,18.62 L33.288,18.62 L33.288,9.424 L26.068,9.424 L26.068,45.904 L34.656,45.904 L34.656,54.264 L6.992,54.264 L6.992,45.904 Z M87.8391145,44.992 L101.291115,44.992 L101.291115,10.336 L87.8391145,10.336 L87.8391145,1.064 L125.231115,1.064 L125.231115,10.336 L111.703115,10.336 L111.703115,44.992 L125.231115,44.992 L125.231115,54.264 L87.8391145,54.264 L87.8391145,44.992 Z M203.190229,36.404 L211.550229,36.404 L211.550229,51.604 C209.928888,52.7693392 207.864242,53.68133 205.356229,54.34 C202.848216,54.99867 200.276909,55.328 197.642229,55.328 C194.298212,55.328 191.118911,54.8340049 188.104229,53.846 C185.089547,52.8579951 182.44224,51.262011 180.162229,49.058 C177.882218,46.853989 176.058236,43.9913509 174.690229,40.47 C173.322222,36.9486491 172.638229,32.6800251 172.638229,27.664 C172.638229,22.4453072 173.410888,18.0753509 174.956229,14.554 C176.50157,11.0326491 178.490217,8.1953441 180.922229,6.042 C183.354241,3.8886559 186.064881,2.34333802 189.054229,1.406 C192.043577,0.46866198 194.982215,0 197.870229,0 C200.910244,0 203.481552,0.2533308 205.584229,0.76 C207.686906,1.2666692 209.422222,1.84933004 210.790229,2.508 L210.790229,18.316 L202.430229,18.316 L202.430229,9.652 C200.859554,9.3986654 199.238237,9.272 197.566229,9.272 C195.590219,9.272 193.753571,9.63932966 192.056229,10.374 C190.358887,11.1086703 188.876902,12.2359924 187.610229,13.756 C186.343556,15.2760076 185.355566,17.1886551 184.646229,19.494 C183.936892,21.7993449 183.582229,24.522651 183.582229,27.664 C183.582229,30.4000137 183.911559,32.8953221 184.570229,35.15 C185.228899,37.4046779 186.191556,39.3426586 187.458229,40.964 C188.724902,42.5853414 190.27022,43.8393289 192.094229,44.726 C193.918238,45.6126711 195.995551,46.056 198.326229,46.056 C199.998237,46.056 201.619554,45.9040015 203.190229,45.6 L203.190229,36.404 Z" id="Tic-Tac-Toe" fill="#2E9598"></path>
    </g>
</svg>

"""

# B U T T O N  C L A S S 
class Button extends Layer
	constructor: (options) ->
		super(options)
		# Set default properties 
		@width = dpr 320
		@height = dpr 60
		@backgroundColor = "rgba(0,0,0,0.3)"
		@borderRadius = dpr 8
		@html = "call to action"
		
		#Button style
		@style.color = "FFF"
		btnFontSize = dpr 20
		btnLetterSpacing = dpr 2.5
		btnLineHeight = dpr 60
		
		@style.fontSize = btnFontSize + 'px'
		@style.fontFamily = 'SFUIText-Bold, Arial'
		@style.textTransform = 'uppercase'
		@style.textAlign = 'center'
		@style.letterSpacing = btnLetterSpacing + 'px'
		@style.lineHeight = btnLineHeight + 'px'
		
		@onMouseOver ->	@backgroundColor = "rgba(255,255,255,0.15)"
		@onMouseOut ->	@backgroundColor = "rgba(0,0,0,0.3)"
		@onMouseDown -> @backgroundColor = "rgba(0,0,0,0.5)"
		@onMouseUp -> @backgroundColor = "rgba(0,0,0,0.3)"
# 		@onClick -> @backgroundColor = "rgba(0,0,0,0.5)"
		@onTap -> @backgroundColor = "rgba(0,0,0,0.5)"

# L A B E L  C L A S S 
class Label extends Layer
	constructor: (options) ->
		super(options)
		# Set default properties 
		lblFontSize = dpr 20
		lblLetterSpacing = dpr 2.5
		lblLineHeight = dpr 60
		
		@html = "Labe2234234234234l"
		@backgroundColor = "rgba(0,0,0,0)"
		@height = dpr 60
		@width = Framer.Device.screen.width
		@style.color = "#FFF"
		@style.fontSize = lblFontSize + 'px'
		@style.fontFamily = 'SFUIText-Bold, Arial'
		@style.textTransform = 'uppercase'
		@style.textAlign = 'center'
		@style.letterSpacing = lblLetterSpacing + 'px'
		@style.lineHeight = lblLineHeight + 'px'

# G A M E  L O G I C
drawBoard = (numCell, sizeCell, gameMatrix) ->
	boardArray = []
	board = new Layer
		parent: screenGame
		size: dpr numCell*sizeCell+2*sizeCell/10
		backgroundColor: "rgba(0,0,0,0.20)"
	board.center()
	for i in [0..numCell-1] then for j in [0..numCell-1]
		boardCell = new Layer
			width: dpr sizeCell
			height: dpr sizeCell
			x: dpr (sizeCell+sizeCell/10)*(j)
			y: dpr (sizeCell+sizeCell/10)*(i)
			parent: board
			backgroundColor: "#252658"

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


reDraw = (board) ->
	for layer,i in board
		layer.html=""
		gameMatrix[i]=""
		turn = 0

newGameStart = (board)->
	for button in board
		button.onClick ->
			if gameMatrix[board.indexOf this] == ""
				turn++
				if (turn % 2) == 1
# 					turnLabel.html = "It's the turn of 'X'"
					drawX(this)
					gameMatrix[board.indexOf this] = "X"
					turnLabel.html = "It's the turn of '0'"
				if (turn % 2) == 0
# 					turnLabel.html = "It's the turn of 'O'"
					drawO(this)	
					gameMatrix[board.indexOf this] = "O"
					turnLabel.html = "It's the turn of 'X'"
				if checkVictory("X",gameMatrix) == true
# 					print "O - WIN"
					reDraw(board)
					screenWinShow(crossWhite)
				if checkVictory("O",gameMatrix) == true
# 					print "O - WIN"
					reDraw(board)
					screenWinShow(circleWhite)
				if turn == 9
# 					print "It's a draw"
					reDraw(board)
					screenDrawShow()

# S T A R T  S C R E E N 

screenStart = new Layer
	size: Framer.Device.screen.size
	backgroundColor: "#252658"

logoLayer = new Layer
	parent: screenStart
	html: logo
	scale: 2
	x: Align.center(- dpr 5)
	y: Align.center(- dpr 100)
	
	backgroundColor:"rgba(255,255,255,0)"

startButton = new Button
	parent: screenStart
startButton.x = Align.center
startButton.y = Align.bottom(-dpr 100)
startButton.html = "start new game"

startButton.onClick ->
	# S T A R T  N E W  G A M E 
	app.showOverlayCenter(screenGame)	
	newGameStart(drawBoard(3, 100, gameMatrix))


# G A M E  S C R E E N
screenGame = new Layer
	size: Framer.Device.screen.size
	backgroundColor: "#252658"

turnLabel = new Label
	parent: screenGame
	y: Align.top(100)

turnLabel.html = "It's the turn of 'X'"

# W I N  S C R E E N
screenWin = new Layer
	size: Framer.Device.screen.size
	backgroundColor: "#2E9598"

startButtonWin = new Button
	parent: screenWin
startButtonWin.x = Align.center
startButtonWin.y = Align.bottom(-dpr 100)
startButtonWin.html = "start new game"

winnerName = new Label
	parent: screenWin
	y: Align.top(dpr 100)
winnerName.html = "The winner is"

winnerLogo = new Layer
	parent: screenWin
	y: winnerName.y + dpr 150
	x: Align.center
	size: dpr 100
	scale: 2
	backgroundColor: "rgba(255,255,255,0)"
	
screenWinShow = (winner) ->		
	app.showOverlayCenter(screenWin)
	winnerLogo.html = winner
	startButtonWin.onClick ->
		app.showOverlayCenter(screenGame)
		turnLabel.html = "It's the turn of 'X'"



# D R A W  S C R E E N
screenDraw = new Layer
	size: Framer.Device.screen.size
	backgroundColor: "#F26A44"

startButtonDraw = new Button
	parent: screenDraw
startButtonDraw.x = Align.center
startButtonDraw.y = Align.bottom(-dpr 100)
startButtonDraw.html = "REPLAY THIS GAME"

draw = new Label
	parent: screenDraw
	y: Align.top(dpr 100)
draw.html = "IT'S A DRAW"

drawLogo1 = new Layer
	parent: screenDraw
	y: draw.y + dpr 150
	x: Align.center
	size: dpr 100
	scale: 2
	backgroundColor: "rgba(255,255,255,0)"
drawLogo2 = new Layer
	parent: screenDraw
	y: draw.y + dpr 150
	x: Align.center
	size: dpr 100
	scale: 2
	backgroundColor: "rgba(255,255,255,0)"
	
screenDrawShow = () ->		
	app.showOverlayCenter(screenDraw)
	drawLogo1.html = crossWhite
	drawLogo2.html = circleWhite
	startButtonDraw.onClick ->
		app.showOverlayCenter(screenGame)
		turnLabel.html = "It's the turn of 'X'"



app = new FlowComponent
app.showNext(screenStart)






