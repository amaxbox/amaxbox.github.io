{dpr} = require 'DevicePixelRatio'

class exports.Button extends Layer
	constructor: (options) ->
		super _.defaults options,
			html: "default"
			height: dpr 54
			borderRadius: dpr 10
			this.backgroundColor = "rgba(255,255,255, 0.2)"

		# this.width = dpr (this.html.length*16 + 16)
		# this.style =
		# 	padding: dpr 10 + "px"
		# 	fontSize: dpr 10 + "px"
		# 	fontColor: "#9EE493"

		# this.onMouseOver ->
		# 	this.backgroundColor = "rgba(255,255,255, 0.5)"
		# this.onMouseOut ->
		# 	this.backgroundColor = "rgba(255,255,255, 0.2)"
		#
		# this.onClick ->
		# 	this.opacity = .5
		#
		# this.onTouch ->
		# 	this.opacity = .5
		#
		# this.onClickEnd ->
		# 	this.opacity = 1
		#
		# this.onTouchEnd ->
		# 	this.opacity = 1
