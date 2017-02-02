timeX = 1

layerA = new Layer
	y: Align.top(40)
	x: Align.center(-90)

sliderTime = new SliderComponent
	x: Align.center
	y: Align.center
	min: 0
	max: 10
	value: 0
	knobSize: 40

layerA.states = 
	second:
		x: Align.center(-90)
		options:
			curve: "ease"
			time: timeX
	third:
		x: Align.center(90)
		options:
			curve: "ease"
			time: timeX

layerA.onTap ->
	layerA.animate "third"
	
layerA.onStateSwitchEnd (q, state) ->
	if state is "third"
		layerA.animate "second"
	else
		layerA.animate "third"

sliderTime.onValueChange ->
	timeX = sliderTime.value
	print timeX
	print layerA.states.second.options