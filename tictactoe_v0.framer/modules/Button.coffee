# Add the following line to your project in Framer Studio.
# myModule = require "myModule"
# Reference the contents by name, like myModule.myFunction() or myModule.myVar
{dpr} = require 'DevicePixelRatio'

Utils.insertCSS("
	.button {
		font-family: Roboto;
		color: #f1ff51;
		font-size: dpr 24;
		letter-spacing: 0;
		text-align: center;
		padding-top: 14px;
}
")

class exports.Button extends Layer
	constructor: (options) ->
		super _.defaults options,
			html: "default"
			height: dpr 60
			borderRadius: dpr 10

		this.width = dpr this.html.length*16 + 16
		this.html = "<p class = 'button'>"+this.html+"</p>"
