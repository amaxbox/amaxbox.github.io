var dpr,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

dpr = require('DevicePixelRatio').dpr;

Utils.insertCSS(".button { font-family: Roboto; color: #f1ff51; font-size: dpr 24; letter-spacing: 0; text-align: center; padding-top: 14px; }");

exports.Button = (function(superClass) {
  extend(Button, superClass);

  function Button(options) {
    Button.__super__.constructor.call(this, _.defaults(options, {
      html: "default",
      height: dpr(60),
      borderRadius: dpr(10)
    }));
    this.width = dpr(this.html.length * 16 + 16);
    this.html = "<p class = 'button'>" + this.html + "</p>";
  }

  return Button;

})(Layer);
