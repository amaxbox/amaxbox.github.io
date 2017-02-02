
bezSliders = []
p1x = 0
p1y = 0
p2x = 0
p2y = 0

layerA = new Layer
	y: Align.top(40)
	x: Align.center(-90)
	width: 100
	height: 100
	backgroundColor: "#AAEEFF"
	borderRadius: 10
	
layerB = new Layer
	y: Align.top(190)
	x: Align.center(90)
	width: 100
	height: 100
	backgroundColor: "#00AAFF"
	borderRadius: 75


sliderTime = new SliderComponent
	x: Align.center
	y: Align.center
	min: 0
	max: 3
	value: 0
	knobSize: 40
bezSliders.push(sliderTime)
sliderTime.fill.backgroundColor = "#28affa"

for i in [1..4]
	sliderBezier = new SliderComponent
		x: Align.center
		y: Align.center(60+i*45)
		min: -2
		max: 2
		value: 0
	sliderBezier.fill.backgroundColor = "#28affa"
	bezSliders.push(sliderBezier)

layerA.onTap ->
	layerA.animate "third"
	
layerA.onStateSwitchEnd (q, state) ->
	if state is "third"
		layerA.animate "second"
	else
		layerA.animate "third"

layerB.onTap ->
	layerB.animate "third"
	
layerB.onStateSwitchEnd (q, state) ->
	if state is "third"
		layerB.animate "second"
	else
		layerB.animate "third"


for slider in bezSliders
	slider.onValueChange ->
		timeX = bezSliders[0].value.toFixed(2)
		p1x = bezSliders[1].value.toFixed(2)
		p1y = bezSliders[2].value.toFixed(2)
		p2x = bezSliders[3].value.toFixed(2)
		p2y = bezSliders[4].value.toFixed(2)
		print timeX, p1x, p1y, p2x, p2y
		
		layerA.states = 
			second:
				x: Align.center(-90)
				options:
					curve: 'bezier-curve'
					curveOptions: [p1x, p1y, p2x, p2y]
					time: timeX
			third:
				x: Align.center(90)
				options:
					curve: 'bezier-curve'
					curveOptions: [p1x, p1y, p2x, p2y]
					time: timeX
		layerB.states = 
			second:
				rotationY: 180
				options:
					curve: 'bezier-curve'
					curveOptions: [p1x, p1y, p2x, p2y]
					time: timeX
			third:
				rotationY: 0
				options:
					curve: 'bezier-curve'
					curveOptions: [p1x, p1y, p2x, p2y]
					time: timeX

