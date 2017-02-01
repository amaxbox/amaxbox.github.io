require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Button":[function(require,module,exports){
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

},{"DevicePixelRatio":"DevicePixelRatio"}],"DevicePixelRatio":[function(require,module,exports){
exports.DevicePixelRatio = (function() {
  var VALUE, dpr, log;

  function DevicePixelRatio() {}

  log = function(v) {
    console.log("DevicePixelRatio set as:", v);
    return v;
  };

  dpr = function() {
    var devicePixelRatio, device_2x, device_3p5x, device_3x, i, initialValue, j, k, len, len1, len2, ref, ref1, ref2, value;
    initialValue = 1;
    value = initialValue;
    if (Utils.isFramerStudio() || Utils.isDesktop()) {
      ref = ['apple-', 'google-nexus-', 'iphone-6-', 'iphone-5', 'ipad-air', 'nexus-9', 'applewatch'];
      for (i = 0, len = ref.length; i < len; i++) {
        device_2x = ref[i];
        if (_.startsWith(Framer.Device.deviceType, device_2x)) {
          value = 2;
        }
      }
      ref1 = ['apple-iphone-6s-plus', 'google-nexus-5', 'htc-one-', 'microsoft-lumia-', 'samsung-galaxy-note-', 'iphone-6plus', 'nexus-5'];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        device_3x = ref1[j];
        if (_.startsWith(Framer.Device.deviceType, device_3x)) {
          value = 3;
        }
      }
      ref2 = ['google-nexus-6'];
      for (k = 0, len2 = ref2.length; k < len2; k++) {
        device_3p5x = ref2[k];
        if (_.startsWith(Framer.Device.deviceType, device_3p5x)) {
          value = 3.5;
        }
      }
    }
    if (value !== initialValue) {
      return log(value);
    }
    if (!Utils.isDesktop()) {
      devicePixelRatio = Utils.devicePixelRatio();
      if (devicePixelRatio > initialValue) {
        value = devicePixelRatio;
      }
    }
    return log(value);
  };

  VALUE = dpr();

  DevicePixelRatio.calc = function(v) {
    return v * VALUE;
  };

  DevicePixelRatio.value = VALUE;

  return DevicePixelRatio;

})();

exports.dpr = exports.DevicePixelRatio.calc;


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FtYXhib3gvR2l0SHViL2FtYXhib3guZ2l0aHViLmlvL3RpY3RhY3RvZV92MC5mcmFtZXIvbW9kdWxlcy9EZXZpY2VQaXhlbFJhdGlvLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FtYXhib3gvR2l0SHViL2FtYXhib3guZ2l0aHViLmlvL3RpY3RhY3RvZV92MC5mcmFtZXIvbW9kdWxlcy9CdXR0b24uanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuIyBDcmVhdGVkIG9uIDIzIERFQyAyMDE1IGJ5IEpvcmRhbiBEb2Jzb24gLyBAam9yZGFuZG9ic29uIC8gam9yZGFuQGJyb3RoZS5yc1xuIyBVcGRhdGVkIG9uIDEyIEFQUiAyMDE2IGJ5IEpvcmRhbiBEb2Jzb24gd2l0aCB0aGFua3MgdG8gTmlrb2xheSBCZXJlem92c2tpeSFcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuI1xuIyBVc2UgdG8gbWVhc3VyZSBwaXhlbHMgYXQgMXggYW5kIGhhdmUgaXQgYWRqdXN0IGZvciB0aGUgUGl4ZWwgUmF0aW9cbiNcbiMgVG8gR2V0IFN0YXJ0ZWQuLi5cbiNcbiMgIDEuIFBsYWNlIHRoaXMgZmlsZSBpbiBGcmFtZXIgU3R1ZGlvIG1vZHVsZXMgZGlyZWN0b3J5XG4jXG4jICAyLiBJbiB5b3VyIHByb2plY3QgaW5jbHVkZTpcbiNcbiMgICAgIHtkcHJ9ID0gcmVxdWlyZSAnRGV2aWNlUGl4ZWxSYXRpbydcbiNcbiMgIDMuIFdoZW4geW91IGNyZWF0ZSBhIGxheWVyIGRvIHNvIEAgMXggYW5kIGFkZCB0aGUgZHByIGZ1bmN0aW9uIHRvIHRoZSB2YWx1ZVxuI1xuIyAgICAgcmVjdCA9IG5ldyBMYXllclxuIyAgICAgICB3aWR0aDogIGRwcigzMDApXG4jICAgICAgIGhlaWdodDogZHByIDUwXG4jICAgICAgIHg6ICAgICAgKGRwciAxNilcbiNcbiMgIDQuIFVzZSBpdCBmb3IgbW9yZSB0aGFuIGxheWVyIHNpemUuIEhlcmUncyBhZHZhbmNlZCB1c2FnZSBmb3IgbXVsdGkgZGV2aWNlczpcbiNcbiNcdFx0XHQjIEFkZCBhIGxpc3Qgcm93IHcvIHRoZSBoZWlnaHQgJiB0ZXh0IHNpemluZy9sYXlvdXQgdXNpbmcgZHByKClcbiNcbiMgICAgIGxpc3RSb3cgPSBuZXcgTGF5ZXJcbiMgICAgICAgd2lkdGg6IFNjcmVlbi53aWR0aFxuIyAgICAgICBoZWlnaHQ6IGRwciA0NFxuIyAgICAgICBodG1sOiBcIkxpc3QgSXRlbVwiXG4jICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCJcbiMgICAgICAgY29sb3I6IFwiIzAwMFwiXG4jICAgICAgIHN0eWxlOlxuIyAgICAgICAgIGZvbnQ6IFwiNDAwICN7ZHByIDE0fXB4LyN7ZHByIDQyfXB4IC1hcHBsZS1zeXN0ZW0sIEhlbHZldGljYSBOZXVlXCJcbiMgICAgICAgICB0ZXh0SW5kZW50OiBcIiN7ZHByIDE1fXB4XCJcbiNcbiMgXHRcdCMgQWRkIGEgY2hldnJvbiB3aXRoIHRoZSBzaXplLCByaWdodCBtYXJnaW4gJiBzaGFkb3cgc3Ryb2tlIHVzaW5nIGRwcigpXG4jXG4jICAgICBsaXN0Q2hldnJvbiA9IG5ldyBMYXllclxuIyAgICAgXHRzdXBlckxheWVyOiBsaXN0Um93XG4jICAgICBcdHdpZHRoOiAgZHByIDlcbiMgICAgIFx0aGVpZ2h0OiBkcHIgOVxuIyAgICAgXHRtYXhYOiBsaXN0Um93LndpZHRoIC0gZHByIDE1XG4jICAgICBcdHk6ICAgIGxpc3RSb3cuaGVpZ2h0IC8gMlxuIyAgICAgXHRvcmlnaW5YOiAxXG4jICAgICBcdG9yaWdpblk6IDBcbiMgICAgIFx0cm90YXRpb246IDQ1XG4jICAgICBcdGJhY2tncm91bmRDb2xvcjogXCJcIlxuIyAgICAgXHRzdHlsZTpcbiMgICAgIFx0XHRib3hTaGFkb3c6IFwiaW5zZXQgLSN7ZHByIDJ9cHggI3tkcHIgMn1weCAwICNCQ0JDQzFcIlxuI1xuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cbmNsYXNzIGV4cG9ydHMuRGV2aWNlUGl4ZWxSYXRpb1xuXG5cdCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cdCMgUHJpdmF0ZSBNZXRob2RzICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cblx0bG9nID0gKHYpIC0+XG5cdFx0Y29uc29sZS5sb2cgXCJEZXZpY2VQaXhlbFJhdGlvIHNldCBhczpcIiwgdlxuXHRcdHJldHVybiB2XG5cblx0ZHByID0gKCkgLT5cblx0XHRpbml0aWFsVmFsdWUgPSAxXG5cdFx0dmFsdWUgPSBpbml0aWFsVmFsdWVcblx0XHQjIENoZWNrIGlmIGluIFN0dWRpbyBvciBEZXNrdG9wIHRvIGZpZ3VyZSBvdXQgd2hhdCB0aGUgc2NhbGluZyBzaG91bGQgYmVcblx0XHRpZiBVdGlscy5pc0ZyYW1lclN0dWRpbygpIG9yIFV0aWxzLmlzRGVza3RvcCgpXG5cblx0XHRcdCMgQ2hlY2sgZm9yIDJ4IGRldmljZXNcblx0XHRcdGZvciBkZXZpY2VfMnggaW4gWydhcHBsZS0nLCAnZ29vZ2xlLW5leHVzLScsICdpcGhvbmUtNi0nLCAnaXBob25lLTUnLCAnaXBhZC1haXInLCAnbmV4dXMtOScsICdhcHBsZXdhdGNoJ11cblx0XHRcdFx0dmFsdWUgPSAyIGlmIF8uc3RhcnRzV2l0aChGcmFtZXIuRGV2aWNlLmRldmljZVR5cGUsIGRldmljZV8yeClcblxuXHRcdFx0IyBDaGVjayBmb3IgM3ggZGV2aWNlc1xuXHRcdFx0Zm9yIGRldmljZV8zeCBpbiBbJ2FwcGxlLWlwaG9uZS02cy1wbHVzJywgJ2dvb2dsZS1uZXh1cy01JywgJ2h0Yy1vbmUtJywgJ21pY3Jvc29mdC1sdW1pYS0nLCAnc2Ftc3VuZy1nYWxheHktbm90ZS0nLCAnaXBob25lLTZwbHVzJywgJ25leHVzLTUnXVxuXHRcdFx0XHR2YWx1ZSA9IDMgaWYgXy5zdGFydHNXaXRoKEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSwgZGV2aWNlXzN4KVxuXG5cdFx0XHQjIENoZWNrIGZvciAzLjV4IGRldmljZXNcblx0XHRcdGZvciBkZXZpY2VfM3A1eCBpbiBbJ2dvb2dsZS1uZXh1cy02J11cblx0XHRcdFx0dmFsdWUgPSAzLjUgaWYgXy5zdGFydHNXaXRoKEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSwgZGV2aWNlXzNwNXgpXG5cblx0XHQjIFJldHVybiBpZiB0aGUgdmFsdWUgY2hhbmdlZC4uLiBvdGhlcndpc2UgY29udGludWVcblx0XHRyZXR1cm4gbG9nIHZhbHVlIHVubGVzcyB2YWx1ZSBpcyBpbml0aWFsVmFsdWVcblxuXHRcdCMgU2V0IFVuaXRzIGJhc2VkIG9uIERldmljZSBQaXhlbCBSYXRpbyBFeGNlcHQgZm9yIERlc2t0b3Bcblx0XHR1bmxlc3MgVXRpbHMuaXNEZXNrdG9wKClcblx0XHRcdGRldmljZVBpeGVsUmF0aW8gPSBVdGlscy5kZXZpY2VQaXhlbFJhdGlvKClcblx0XHRcdCMgaWYgaXQncyBncmVhdGVyIHRoYW4gMSB0aGVuIHVwZGF0ZSBpdCFcblx0XHRcdHZhbHVlID0gZGV2aWNlUGl4ZWxSYXRpbyBpZiBkZXZpY2VQaXhlbFJhdGlvID4gaW5pdGlhbFZhbHVlXG5cblx0XHQjIHJldHVybiB0aGUgdmFsdWUgZXZlbiBpZiBpdCBoYXNuJ3QgY2hhbmdlZCBhbmQgbG9nIGl0IGV2ZXJ5dGltZSBpdHMgc2V0XG5cdFx0cmV0dXJuIGxvZyB2YWx1ZVxuXG5cdCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cdCMgQ29uc3RhbnQgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cblx0VkFMVUUgPSBkcHIoKVxuXG5cdCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cdCMgUHVibGljIE1ldGhvZHMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cblx0QC5jYWxjICA9ICh2KSAtPiByZXR1cm4gdiAqIFZBTFVFXG5cblx0QC52YWx1ZSA9IFZBTFVFXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jIENyZWF0ZSBhIHNob3J0aGFuZCB0byBnZXQgZGlyZWN0bHkgdG8gdGhlIGNhbGMgc3RhdGVtZW50XG5cbmV4cG9ydHMuZHByID0gZXhwb3J0cy5EZXZpY2VQaXhlbFJhdGlvLmNhbGNcbiIsInZhciBkcHIsXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5kcHIgPSByZXF1aXJlKCdEZXZpY2VQaXhlbFJhdGlvJykuZHByO1xuXG5VdGlscy5pbnNlcnRDU1MoXCIuYnV0dG9uIHsgZm9udC1mYW1pbHk6IFJvYm90bzsgY29sb3I6ICNmMWZmNTE7IGZvbnQtc2l6ZTogZHByIDI0OyBsZXR0ZXItc3BhY2luZzogMDsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nLXRvcDogMTRweDsgfVwiKTtcblxuZXhwb3J0cy5CdXR0b24gPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoQnV0dG9uLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBCdXR0b24ob3B0aW9ucykge1xuICAgIEJ1dHRvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBfLmRlZmF1bHRzKG9wdGlvbnMsIHtcbiAgICAgIGh0bWw6IFwiZGVmYXVsdFwiLFxuICAgICAgaGVpZ2h0OiBkcHIoNjApLFxuICAgICAgYm9yZGVyUmFkaXVzOiBkcHIoMTApXG4gICAgfSkpO1xuICAgIHRoaXMud2lkdGggPSBkcHIodGhpcy5odG1sLmxlbmd0aCAqIDE2ICsgMTYpO1xuICAgIHRoaXMuaHRtbCA9IFwiPHAgY2xhc3MgPSAnYnV0dG9uJz5cIiArIHRoaXMuaHRtbCArIFwiPC9wPlwiO1xuICB9XG5cbiAgcmV0dXJuIEJ1dHRvbjtcblxufSkoTGF5ZXIpO1xuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFFQUE7QURBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUQ2Qk0sT0FBTyxDQUFDO0FBS2IsTUFBQTs7OztFQUFBLEdBQUEsR0FBTSxTQUFDLENBQUQ7SUFDTCxPQUFPLENBQUMsR0FBUixDQUFZLDBCQUFaLEVBQXdDLENBQXhDO0FBQ0EsV0FBTztFQUZGOztFQUlOLEdBQUEsR0FBTSxTQUFBO0FBQ0wsUUFBQTtJQUFBLFlBQUEsR0FBZTtJQUNmLEtBQUEsR0FBUTtJQUVSLElBQUcsS0FBSyxDQUFDLGNBQU4sQ0FBQSxDQUFBLElBQTBCLEtBQUssQ0FBQyxTQUFOLENBQUEsQ0FBN0I7QUFHQztBQUFBLFdBQUEscUNBQUE7O1FBQ0MsSUFBYSxDQUFDLENBQUMsVUFBRixDQUFhLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBM0IsRUFBdUMsU0FBdkMsQ0FBYjtVQUFBLEtBQUEsR0FBUSxFQUFSOztBQUREO0FBSUE7QUFBQSxXQUFBLHdDQUFBOztRQUNDLElBQWEsQ0FBQyxDQUFDLFVBQUYsQ0FBYSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQTNCLEVBQXVDLFNBQXZDLENBQWI7VUFBQSxLQUFBLEdBQVEsRUFBUjs7QUFERDtBQUlBO0FBQUEsV0FBQSx3Q0FBQTs7UUFDQyxJQUFlLENBQUMsQ0FBQyxVQUFGLENBQWEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUEzQixFQUF1QyxXQUF2QyxDQUFmO1VBQUEsS0FBQSxHQUFRLElBQVI7O0FBREQsT0FYRDs7SUFlQSxJQUF3QixLQUFBLEtBQVMsWUFBakM7QUFBQSxhQUFPLEdBQUEsQ0FBSSxLQUFKLEVBQVA7O0lBR0EsSUFBQSxDQUFPLEtBQUssQ0FBQyxTQUFOLENBQUEsQ0FBUDtNQUNDLGdCQUFBLEdBQW1CLEtBQUssQ0FBQyxnQkFBTixDQUFBO01BRW5CLElBQTRCLGdCQUFBLEdBQW1CLFlBQS9DO1FBQUEsS0FBQSxHQUFRLGlCQUFSO09BSEQ7O0FBTUEsV0FBTyxHQUFBLENBQUksS0FBSjtFQTVCRjs7RUFpQ04sS0FBQSxHQUFRLEdBQUEsQ0FBQTs7RUFLUixnQkFBQyxDQUFDLElBQUYsR0FBVSxTQUFDLENBQUQ7QUFBTyxXQUFPLENBQUEsR0FBSTtFQUFsQjs7RUFFVixnQkFBQyxDQUFDLEtBQUYsR0FBVTs7Ozs7O0FBS1gsT0FBTyxDQUFDLEdBQVIsR0FBYyxPQUFPLENBQUMsZ0JBQWdCLENBQUMifQ==
