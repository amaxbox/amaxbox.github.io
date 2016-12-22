# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "Андрей Максимов"
	twitter: ""
	description: ""


# Import file "SM - Concept - 2" (sizes and positions are scaled 1:2)
sketch = Framer.Importer.load("imported/SM - Concept - 2@2x")
sketch.Label.visible = false




# Настройки импорта


sketch.User_Card.visible = false
sketch.Game.visible = false



NumberCards = 19
scaleFactor = 2
scaleVal = 1
screenMidX = Screen.width / 2
screenMidY = Screen.height / 2

Screen.backgroundColor = "#FFFFFF"


sketch.App_Bar.parent = container
sketch.Buttons.parent = container





container = new Layer
	size: Screen.size
	perspective: 3000
	backgroundColor: "rgba(222,221,224,0)"



shake = require 'shake'
Stack = []
opacityVal = 0.5
zOffset = -45
yOffset = 35
blurOffset = 10


# Парсим карточки
data = JSON.parse Utils.domLoadDataSync "data.JSON"

# Создаем стек карточек
[NumberCards..0].map (i) ->
	Card = new Layer
		midX: screenMidX
		midY: screenMidY + (i * yOffset)-24
		z: zOffset * i
		width: screenMidX*2-96
		height: 500*scaleFactor
		borderRadius: 6*scaleFactor
		opacity: 1 - (i * opacityVal)
		blur: i*blurOffset
		backgroundColor: "rgba(222,221,224,1)"
		parent: container
# 		scale: 0.95


	shadowLayer = new Layer
		parent: Card
		width: screenMidX*2-96
		x: Align.center
		y: Align.bottom(2*scaleFactor)
		height: 500*scaleFactor + 20
		borderRadius: 6*scaleFactor
# 		opacity: 0
		blur: 14*scaleFactor

		
	photoLayer = new Layer
		parent: Card
		width: Card.width
		y: Align.bottom()
		height: Card.height
		borderRadius: 6*scaleFactor
	textBackground = new Layer
		parent: Card
		width: Card.width+2
		x: Align.center()
		y: Align.bottom(1)
# 		borderRadius: 6*scaleFactor
		height: 80*scaleFactor
		backgroundColor: "rgba(254,252,255,0.4)"

	textBackground.style =
		"border-radius": "0 0 12px 12px"
	textBackground.style.background = "-webkit-linear-gradient(top, rgba(0,0,0,0) 20%,rgba(0,0,0,0.8) 100%)"	

	Card.draggable.enabled = true
	Card.draggable.momentum = false
	Card.draggable.speedY = 0
	
	userName = new Layer
		parent: Card
		backgroundColor: "rgba(0,0,0,0)"
		x: Align.left(12*scaleFactor)
		y: Align.bottom(50*scaleFactor)
		width: Card.width
	userName.style =
		"font-family": "SFUIText-Regular"
		"font-size": 17*scaleFactor + "px"
		"color": "#FFFFFF"
		"letter-spacing": "0px"
	userCity = new Layer
		parent: Card
		backgroundColor: "rgba(0,0,0,0)"
		x: Align.left(12*scaleFactor)
		y: Align.bottom(70*scaleFactor)
		width: Card.width
	userCity.style =
		"font-family": "SFUIText-Light"
		"font-size": 15*scaleFactor + "px"
		"color": "#FFFFFF"
		"opacity": "0.69"
		"letter-spacing": "-0.21px"
	Stack[i] = Card
	childrenLayers = Card.children

	Card.children[0].image = data[i].avatar_url
	Card.children[1].image = data[i].avatar_url
	Card.children[3].html = data[i].firstname + ", " + Utils.round(Utils.randomNumber(18, 36))
	Card.children[4].html = data[i].city + ", " + Utils.round(Utils.randomNumber(500, 1000))+" м"

# 	Stack[i].on Events.Tap, ->
# 		Stack[i].animate
# 			x: screenMidX * 3
# 			options:
# 				curve: "spring(700,80,0)"
# 		
# 		Utils.delay 0.1, ->
# 			for index in [i..NumberCards]
# 				Stack[index].animate
# 					z : ((index-1) * zOffset) + (i * -zOffset)
# 					midY : screenMidY + ((index-1) * yOffset) - (i * yOffset)-24
# 					opacity : (1 - (index * opacityVal) + ((i + 1) * opacityVal))
# 					blur: ((index-1) * blurOffset)+(i * -blurOffset)
# 					options:
# 						curve: "spring(700,80,0)"
# 						
	sketch.Buttons.bringToFront()
	Stack[i].on Events.DragEnd, ->
		
		Stack[i].children[0].animate
			opacity: 1
			options:
				curve: "spring(700,80,0)"
		Stack[i].animate
			scale: 1
			options:
				curve: "spring(700,80,0)"

		if Stack[i].midX < (Screen.width - Screen.width * 0.75) 
			Stack[i].animate
				x: -screenMidX * 3
				options:
					curve: "spring(700,80,0)"
			
			Utils.delay 0.1, ->
				for index in [i..NumberCards]
					Stack[index].animate
						z : ((index-1) * zOffset) + (i * -zOffset)
						midY : screenMidY + ((index-1) * yOffset) - (i * yOffset)-24
						opacity : (1 - (index * opacityVal) + ((i + 1) * opacityVal))
						blur: ((index-1) * blurOffset)+(i * -blurOffset)
						options:
							curve: "spring(800,80,0)"
		else
			Stack[i].animate
				midX: screenMidX
				rotationZ: 0
				options:
					curve: "spring(800,80,0)"
			
	# Add some light rotation behavior		
	Stack[i].on Events.TouchStart, (event) ->
		startX = event.x 
		Stack[i].children[0].animate
			opacity: 0
			options:
				curve: "spring(700,80,0)"
		Stack[i].animate
			scale: 1.05
			options:
				curve: "spring(700,80,0)"
				
		Stack[i].on Events.DragMove, (e) ->
			delta = e.x - startX
			Stack[i].rotationZ = Utils.modulate(delta, [-screenMidX,screenMidX], [-10,10], true)
						
# Card.on Events.Click, ->
# 	Card.animate
# 		scale: 1.00
# 		options:
# 			curve: "spring(380, 25, 3)"
# 	
# 	shadowLayer.animate
# 		opacity: 1.00
# 		options:
# 			curve: "spring(300, 25, 0)"

# 	childrenLayers = Card.children
# 	i = Utils.randomChoice([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])
# 	Card.children[0].image = data[i].avatar_url
# 	Card.children[1].image = data[i].avatar_url
# 	Card.children[3].html = data[i].firstname + ", " + Utils.round(Utils.randomNumber(18, 36))
# 	Card.children[4].html = data[i].city + ", " + Utils.round(Utils.randomNumber(500, 1000))+"м"
# 
# shake.onShake = () ->
# 	childrenLayers = Card.children
# 	i = Utils.randomChoice([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])
# 	Card.children[0].image = data[i].avatar_url
# 	Card.children[1].image = data[i].avatar_url
# 	Card.children[3].html = data[i].firstname + ", " + Utils.round(Utils.randomNumber(18, 36))
# 	Card.children[4].html = data[i].city + ", " + Utils.round(Utils.randomNumber(500, 1000))+"м"

