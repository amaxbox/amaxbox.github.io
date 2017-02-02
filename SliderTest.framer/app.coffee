
bezSliders = []
p1x = 0
p1y = 0
p2x = 0
p2y = 0

layerA = new Layer
	y: Align.top(40)
	x: Align.center(-90)
	width: 150
	height: 150
	backgroundColor: "#AAEEFF"
	borderRadius: 10
	
layerB = new Layer
	y: Align.top(40)
	x: Align.center(90)
	width: 150
	height: 150
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

for i in [1..4]
	sliderBezier = new SliderComponent
		x: Align.center
		y: Align.center(60+i*45)
		min: -2
		max: 2
		value: 0
	bezSliders.push(sliderBezier)

layerA.onTap ->
	layerA.animate "third"
	
layerA.onStateSwitchEnd (q, state) ->
	if state is "third"
		layerA.animate "second"
	else
		layerA.animate "third"

for slider in bezSliders
	slider.onValueChange ->
		timeX = bezSliders[0].value
		p1x = bezSliders[1].value
		p1y = bezSliders[2].value
		p2x = bezSliders[3].value
		p2y = bezSliders[4].value
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
