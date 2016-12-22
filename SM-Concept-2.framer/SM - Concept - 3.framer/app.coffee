# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "Андрей Максимов"
	twitter: ""
	description: ""


scaleVal = 1
screenMidX = Screen.width / 2
screenMidY = Screen.height / 2

# Card Settings
cardHeight = 800 * scaleVal
cardWidth = 600 * scaleVal


# Container superLayer for perspective
container = new Layer
	size: Screen.size
	backgroundColor: ""
	perspective: 2000
	
# Stack
Stack = []
opacityVal = 0.15
zOffset = -50
yOffset = 50

# for loop doesn't work
# for i in [20..0]
[4..0].map (i) ->

	Card = new Layer
		midX: screenMidX
		midY: screenMidY + (i * yOffset)
		z: zOffset * i
		opacity: 1 - (i * opacityVal)
		width: cardWidth
		height: cardHeight
		backgroundColor: "#fff"
		borderRadius: 20
		shadowBlur: 8
		shadowColor: "rgba(0,0,0,0.4)"
		parent: container
		
	Card.draggable.enabled = true
	Card.draggable.momentum = false
	Card.draggable.speedY = 0
	
	Stack[i] = Card
	
	# Re-position each element in the stack
	Stack[i].on Events.DragEnd, ->
		
		if Stack[i].midX > (Screen.width * 0.75) 
			Stack[i].animate
				x: screenMidX * 3
				options:
					curve: "spring(800,80,0)"
			
			Utils.delay 0.5, ->
				for index in [i..4]
					Stack[index].animate
						z : ((index-1) * zOffset) + (i * -zOffset)
						midY : screenMidY + ((index-1) * yOffset) - (i * yOffset)
						opacity : (1 - (index * opacityVal) + ((i + 1) * opacityVal))
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
		
		Stack[i].on Events.DragMove, (e) ->
			delta = e.x - startX
			Stack[i].rotationZ = Utils.modulate(delta, [-screenMidX,screenMidX], [-10,10], true)
