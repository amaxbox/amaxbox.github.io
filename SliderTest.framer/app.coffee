
bezSliders = []
sliderTexts = []
sliderLabels = []

timeX = 1
p1x = 0*200
p1y = 200-1*200
p2x = 1*200
p2y = 200-0*200



layerA = new Layer
	y: Align.top(40)
	x: Align.center(0)
	width: 100
	height: 100
	backgroundColor: "#AAEEFF"
	borderRadius: 10
	
layerB = new Layer
	y: Align.top(190)
	x: Align.center(0)
	width: 100
	height: 100
	backgroundColor: "#00AAFF"
	borderRadius: 75


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


for i in [0..4]
	sliderBezier = new SliderComponent
		x: Align.center
		y: Align.center(200+i*45)
		min: 0
		max: 1
		value: 1
	sliderBezier.fill.backgroundColor = "#28affa"
	bezSliders.push(sliderBezier)
	
	sliderText = new Layer
		x: Align.center(280)
		y: Align.center(200+i*45)
		height: 30
		backgroundColor: "rgba(123,123,123,0.0)"
		style: 
			color: "rgba(123,123,123,0.8)"
			
	sliderLabel = new Layer
		x: Align.center(-220)
		y: Align.center(200+i*45)
		width: 50
		height: 30
		backgroundColor: "rgba(123,123,123,0.)"
		style: 
			color: "rgba(123,123,123,0.8)"
		
	sliderTexts.push(sliderText)
	sliderLabels.push(sliderLabel)

sliderLabels[0].html = "Time"
sliderLabels[1].html = "P1X"
sliderLabels[2].html = "P1Y"
sliderLabels[3].html = "P2X"
sliderLabels[4].html = "P2Y"


for layer in sliderTexts
			layer.html = bezSliders[(sliderTexts.indexOf layer)].value.toFixed(2)


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

grapBack = """<svg width="201px" height="200px" viewBox="174 180 201 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch -->
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(174.000000, 180.000000)" fill-opacity="0.2">
        <rect id="Rectangle" fill="#00AAFF" x="1" y="0" width="200" height="200"></rect>
        <rect id="Rectangle" fill="#00AAFF" x="100" y="0" width="1" height="200"></rect>
        <rect id="Rectangle" fill="#00AAFF" transform="translate(100.500000, 100.500000) rotate(-270.000000) translate(-100.500000, -100.500000) " x="100" y="0.5" width="1" height="200"></rect>
        <rect id="Rectangle" fill="#00AAFF" transform="translate(101.000000, 50.500000) rotate(-270.000000) translate(-101.000000, -50.500000) " x="100.5" y="-49.5" width="1" height="200"></rect>
        <rect id="Rectangle" fill="#00AAFF" transform="translate(101.000000, 150.500000) rotate(-270.000000) translate(-101.000000, -150.500000) " x="100.5" y="50.5" width="1" height="200"></rect>
        <rect id="Rectangle" fill="#00AAFF" transform="translate(50.500000, 100.000000) rotate(-360.000000) translate(-50.500000, -100.000000) " x="50" y="0" width="1" height="200"></rect>
        <rect id="Rectangle" fill="#00AAFF" transform="translate(149.500000, 100.000000) rotate(-360.000000) translate(-149.500000, -100.000000) " x="149" y="0" width="1" height="200"></rect>
    </g>
</svg>"""

grapBackLayer = new Layer
	html: grapBack
	backgroundColor: "rgba(0,169,255,0.0)"
	y: Align.center
	x: Align.center
graph = new Layer
	backgroundColor: "rgba(0,169,255,0.0)"
	parent: grapBackLayer
f1x = p1x*200
f1y = 200-p1y*200
f2x = p2x*200
f2y = 200-p2y*200
path = """
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <path d="M 0 200 C """+f1x+""" """+f1y+""" , """+f2x+""" """+f2y+""", 200 0" stroke="#00AAFF" stroke-width="5" stroke-linecap="round" fill="transparent"/>
 
</svg>"""
graph.html = path
		
for slider in bezSliders
	slider.onValueChange ->
		
		timeX = bezSliders[0].value.toFixed(2)
		p1x = bezSliders[1].value.toFixed(2)
		p1y = bezSliders[2].value.toFixed(2)
		p2x = bezSliders[3].value.toFixed(2)
		p2y = bezSliders[4].value.toFixed(2)
		f1x = p1x*200
		f1y = 200-p1y*200
		f2x = p2x*200
		f2y = 200-p2y*200
		
		for layer in sliderTexts
			layer.html = bezSliders[(sliderTexts.indexOf layer)].value.toFixed(2)
		
		path = """
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <path d="M 0 200 C """+f1x+""" """+f1y+""" , """+f2x+""" """+f2y+""", 200 0" stroke="#00AAFF" stroke-width="5" stroke-linecap="round" fill="transparent"/>
 
</svg>"""
		graph.html = path
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
		layerB.animate "third"
		layerA.animate "third"
		
layerB.animate "third"
layerA.animate "third"

