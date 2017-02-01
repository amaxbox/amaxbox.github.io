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


},{"DevicePixelRatio":"DevicePixelRatio"}],"Button":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvRGV2aWNlUGl4ZWxSYXRpby5jb2ZmZWUiLCIuLi9tb2R1bGVzL0J1dHRvbi5qcyIsIi4uL21vZHVsZXMvQnV0dG9uLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jIENyZWF0ZWQgb24gMjMgREVDIDIwMTUgYnkgSm9yZGFuIERvYnNvbiAvIEBqb3JkYW5kb2Jzb24gLyBqb3JkYW5AYnJvdGhlLnJzXG4jIFVwZGF0ZWQgb24gMTIgQVBSIDIwMTYgYnkgSm9yZGFuIERvYnNvbiB3aXRoIHRoYW5rcyB0byBOaWtvbGF5IEJlcmV6b3Zza2l5IVxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jXG4jIFVzZSB0byBtZWFzdXJlIHBpeGVscyBhdCAxeCBhbmQgaGF2ZSBpdCBhZGp1c3QgZm9yIHRoZSBQaXhlbCBSYXRpb1xuI1xuIyBUbyBHZXQgU3RhcnRlZC4uLlxuI1xuIyAgMS4gUGxhY2UgdGhpcyBmaWxlIGluIEZyYW1lciBTdHVkaW8gbW9kdWxlcyBkaXJlY3RvcnlcbiNcbiMgIDIuIEluIHlvdXIgcHJvamVjdCBpbmNsdWRlOlxuI1xuIyAgICAge2Rwcn0gPSByZXF1aXJlICdEZXZpY2VQaXhlbFJhdGlvJ1xuI1xuIyAgMy4gV2hlbiB5b3UgY3JlYXRlIGEgbGF5ZXIgZG8gc28gQCAxeCBhbmQgYWRkIHRoZSBkcHIgZnVuY3Rpb24gdG8gdGhlIHZhbHVlXG4jXG4jICAgICByZWN0ID0gbmV3IExheWVyXG4jICAgICAgIHdpZHRoOiAgZHByKDMwMClcbiMgICAgICAgaGVpZ2h0OiBkcHIgNTBcbiMgICAgICAgeDogICAgICAoZHByIDE2KVxuI1xuIyAgNC4gVXNlIGl0IGZvciBtb3JlIHRoYW4gbGF5ZXIgc2l6ZS4gSGVyZSdzIGFkdmFuY2VkIHVzYWdlIGZvciBtdWx0aSBkZXZpY2VzOlxuI1xuI1x0XHRcdCMgQWRkIGEgbGlzdCByb3cgdy8gdGhlIGhlaWdodCAmIHRleHQgc2l6aW5nL2xheW91dCB1c2luZyBkcHIoKVxuI1xuIyAgICAgbGlzdFJvdyA9IG5ldyBMYXllclxuIyAgICAgICB3aWR0aDogU2NyZWVuLndpZHRoXG4jICAgICAgIGhlaWdodDogZHByIDQ0XG4jICAgICAgIGh0bWw6IFwiTGlzdCBJdGVtXCJcbiMgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIlxuIyAgICAgICBjb2xvcjogXCIjMDAwXCJcbiMgICAgICAgc3R5bGU6XG4jICAgICAgICAgZm9udDogXCI0MDAgI3tkcHIgMTR9cHgvI3tkcHIgNDJ9cHggLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhIE5ldWVcIlxuIyAgICAgICAgIHRleHRJbmRlbnQ6IFwiI3tkcHIgMTV9cHhcIlxuI1xuIyBcdFx0IyBBZGQgYSBjaGV2cm9uIHdpdGggdGhlIHNpemUsIHJpZ2h0IG1hcmdpbiAmIHNoYWRvdyBzdHJva2UgdXNpbmcgZHByKClcbiNcbiMgICAgIGxpc3RDaGV2cm9uID0gbmV3IExheWVyXG4jICAgICBcdHN1cGVyTGF5ZXI6IGxpc3RSb3dcbiMgICAgIFx0d2lkdGg6ICBkcHIgOVxuIyAgICAgXHRoZWlnaHQ6IGRwciA5XG4jICAgICBcdG1heFg6IGxpc3RSb3cud2lkdGggLSBkcHIgMTVcbiMgICAgIFx0eTogICAgbGlzdFJvdy5oZWlnaHQgLyAyXG4jICAgICBcdG9yaWdpblg6IDFcbiMgICAgIFx0b3JpZ2luWTogMFxuIyAgICAgXHRyb3RhdGlvbjogNDVcbiMgICAgIFx0YmFja2dyb3VuZENvbG9yOiBcIlwiXG4jICAgICBcdHN0eWxlOlxuIyAgICAgXHRcdGJveFNoYWRvdzogXCJpbnNldCAtI3tkcHIgMn1weCAje2RwciAyfXB4IDAgI0JDQkNDMVwiXG4jXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuY2xhc3MgZXhwb3J0cy5EZXZpY2VQaXhlbFJhdGlvXG5cblx0IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblx0IyBQcml2YXRlIE1ldGhvZHMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuXHRsb2cgPSAodikgLT5cblx0XHRjb25zb2xlLmxvZyBcIkRldmljZVBpeGVsUmF0aW8gc2V0IGFzOlwiLCB2XG5cdFx0cmV0dXJuIHZcblxuXHRkcHIgPSAoKSAtPlxuXHRcdGluaXRpYWxWYWx1ZSA9IDFcblx0XHR2YWx1ZSA9IGluaXRpYWxWYWx1ZVxuXHRcdCMgQ2hlY2sgaWYgaW4gU3R1ZGlvIG9yIERlc2t0b3AgdG8gZmlndXJlIG91dCB3aGF0IHRoZSBzY2FsaW5nIHNob3VsZCBiZVxuXHRcdGlmIFV0aWxzLmlzRnJhbWVyU3R1ZGlvKCkgb3IgVXRpbHMuaXNEZXNrdG9wKClcblxuXHRcdFx0IyBDaGVjayBmb3IgMnggZGV2aWNlc1xuXHRcdFx0Zm9yIGRldmljZV8yeCBpbiBbJ2FwcGxlLScsICdnb29nbGUtbmV4dXMtJywgJ2lwaG9uZS02LScsICdpcGhvbmUtNScsICdpcGFkLWFpcicsICduZXh1cy05JywgJ2FwcGxld2F0Y2gnXVxuXHRcdFx0XHR2YWx1ZSA9IDIgaWYgXy5zdGFydHNXaXRoKEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSwgZGV2aWNlXzJ4KVxuXG5cdFx0XHQjIENoZWNrIGZvciAzeCBkZXZpY2VzXG5cdFx0XHRmb3IgZGV2aWNlXzN4IGluIFsnYXBwbGUtaXBob25lLTZzLXBsdXMnLCAnZ29vZ2xlLW5leHVzLTUnLCAnaHRjLW9uZS0nLCAnbWljcm9zb2Z0LWx1bWlhLScsICdzYW1zdW5nLWdhbGF4eS1ub3RlLScsICdpcGhvbmUtNnBsdXMnLCAnbmV4dXMtNSddXG5cdFx0XHRcdHZhbHVlID0gMyBpZiBfLnN0YXJ0c1dpdGgoRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlLCBkZXZpY2VfM3gpXG5cblx0XHRcdCMgQ2hlY2sgZm9yIDMuNXggZGV2aWNlc1xuXHRcdFx0Zm9yIGRldmljZV8zcDV4IGluIFsnZ29vZ2xlLW5leHVzLTYnXVxuXHRcdFx0XHR2YWx1ZSA9IDMuNSBpZiBfLnN0YXJ0c1dpdGgoRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlLCBkZXZpY2VfM3A1eClcblxuXHRcdCMgUmV0dXJuIGlmIHRoZSB2YWx1ZSBjaGFuZ2VkLi4uIG90aGVyd2lzZSBjb250aW51ZVxuXHRcdHJldHVybiBsb2cgdmFsdWUgdW5sZXNzIHZhbHVlIGlzIGluaXRpYWxWYWx1ZVxuXG5cdFx0IyBTZXQgVW5pdHMgYmFzZWQgb24gRGV2aWNlIFBpeGVsIFJhdGlvIEV4Y2VwdCBmb3IgRGVza3RvcFxuXHRcdHVubGVzcyBVdGlscy5pc0Rlc2t0b3AoKVxuXHRcdFx0ZGV2aWNlUGl4ZWxSYXRpbyA9IFV0aWxzLmRldmljZVBpeGVsUmF0aW8oKVxuXHRcdFx0IyBpZiBpdCdzIGdyZWF0ZXIgdGhhbiAxIHRoZW4gdXBkYXRlIGl0IVxuXHRcdFx0dmFsdWUgPSBkZXZpY2VQaXhlbFJhdGlvIGlmIGRldmljZVBpeGVsUmF0aW8gPiBpbml0aWFsVmFsdWVcblxuXHRcdCMgcmV0dXJuIHRoZSB2YWx1ZSBldmVuIGlmIGl0IGhhc24ndCBjaGFuZ2VkIGFuZCBsb2cgaXQgZXZlcnl0aW1lIGl0cyBzZXRcblx0XHRyZXR1cm4gbG9nIHZhbHVlXG5cblx0IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblx0IyBDb25zdGFudCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuXHRWQUxVRSA9IGRwcigpXG5cblx0IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblx0IyBQdWJsaWMgTWV0aG9kcyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuXHRALmNhbGMgID0gKHYpIC0+IHJldHVybiB2ICogVkFMVUVcblxuXHRALnZhbHVlID0gVkFMVUVcblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiMgQ3JlYXRlIGEgc2hvcnRoYW5kIHRvIGdldCBkaXJlY3RseSB0byB0aGUgY2FsYyBzdGF0ZW1lbnRcblxuZXhwb3J0cy5kcHIgPSBleHBvcnRzLkRldmljZVBpeGVsUmF0aW8uY2FsY1xuIiwidmFyIGRwcixcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbmRwciA9IHJlcXVpcmUoJ0RldmljZVBpeGVsUmF0aW8nKS5kcHI7XG5cblV0aWxzLmluc2VydENTUyhcIi5idXR0b24geyBmb250LWZhbWlseTogUm9ib3RvOyBjb2xvcjogI2YxZmY1MTsgZm9udC1zaXplOiBkcHIgMjQ7IGxldHRlci1zcGFjaW5nOiAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxNHB4OyB9XCIpO1xuXG5leHBvcnRzLkJ1dHRvbiA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChCdXR0b24sIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIEJ1dHRvbihvcHRpb25zKSB7XG4gICAgQnV0dG9uLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIF8uZGVmYXVsdHMob3B0aW9ucywge1xuICAgICAgaHRtbDogXCJkZWZhdWx0XCIsXG4gICAgICBoZWlnaHQ6IGRwcig2MCksXG4gICAgICBib3JkZXJSYWRpdXM6IGRwcigxMClcbiAgICB9KSk7XG4gICAgdGhpcy53aWR0aCA9IGRwcih0aGlzLmh0bWwubGVuZ3RoICogMTYgKyAxNik7XG4gICAgdGhpcy5odG1sID0gXCI8cCBjbGFzcyA9ICdidXR0b24nPlwiICsgdGhpcy5odG1sICsgXCI8L3A+XCI7XG4gIH1cblxuICByZXR1cm4gQnV0dG9uO1xuXG59KShMYXllcik7XG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxue2Rwcn0gPSByZXF1aXJlICdEZXZpY2VQaXhlbFJhdGlvJ1xuXG5VdGlscy5pbnNlcnRDU1MoXCJcblx0LmJ1dHRvbiB7XG5cdFx0Zm9udC1mYW1pbHk6IFJvYm90bztcblx0XHRjb2xvcjogI2YxZmY1MTtcblx0XHRmb250LXNpemU6IGRwciAyNDtcblx0XHRsZXR0ZXItc3BhY2luZzogMDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0cGFkZGluZy10b3A6IDE0cHg7XG59XG5cIilcblxuY2xhc3MgZXhwb3J0cy5CdXR0b24gZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnMpIC0+XG5cdFx0c3VwZXIgXy5kZWZhdWx0cyBvcHRpb25zLFxuXHRcdFx0aHRtbDogXCJkZWZhdWx0XCJcblx0XHRcdGhlaWdodDogZHByIDYwXG5cdFx0XHRib3JkZXJSYWRpdXM6IGRwciAxMFxuXG5cdFx0dGhpcy53aWR0aCA9IGRwciB0aGlzLmh0bWwubGVuZ3RoKjE2ICsgMTZcblx0XHR0aGlzLmh0bWwgPSBcIjxwIGNsYXNzID0gJ2J1dHRvbic+XCIrdGhpcy5odG1sK1wiPC9wPlwiXG4iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUdBQTtBREdBLElBQUEsR0FBQTtFQUFBOzs7QUFBQyxNQUFPLE9BQUEsQ0FBUSxrQkFBUjs7QUFFUixLQUFLLENBQUMsU0FBTixDQUFnQiwrSEFBaEI7O0FBV00sT0FBTyxDQUFDOzs7RUFDQSxnQkFBQyxPQUFEO0lBQ1osd0NBQU0sQ0FBQyxDQUFDLFFBQUYsQ0FBVyxPQUFYLEVBQ0w7TUFBQSxJQUFBLEVBQU0sU0FBTjtNQUNBLE1BQUEsRUFBUSxHQUFBLENBQUksRUFBSixDQURSO01BRUEsWUFBQSxFQUFjLEdBQUEsQ0FBSSxFQUFKLENBRmQ7S0FESyxDQUFOO0lBS0EsSUFBSSxDQUFDLEtBQUwsR0FBYSxHQUFBLENBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFWLEdBQWlCLEVBQWpCLEdBQXNCLEVBQTFCO0lBQ2IsSUFBSSxDQUFDLElBQUwsR0FBWSxzQkFBQSxHQUF1QixJQUFJLENBQUMsSUFBNUIsR0FBaUM7RUFQakM7Ozs7R0FEZTs7OztBRGhCN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FENkJNLE9BQU8sQ0FBQztBQUtiLE1BQUE7Ozs7RUFBQSxHQUFBLEdBQU0sU0FBQyxDQUFEO0lBQ0wsT0FBTyxDQUFDLEdBQVIsQ0FBWSwwQkFBWixFQUF3QyxDQUF4QztBQUNBLFdBQU87RUFGRjs7RUFJTixHQUFBLEdBQU0sU0FBQTtBQUNMLFFBQUE7SUFBQSxZQUFBLEdBQWU7SUFDZixLQUFBLEdBQVE7SUFFUixJQUFHLEtBQUssQ0FBQyxjQUFOLENBQUEsQ0FBQSxJQUEwQixLQUFLLENBQUMsU0FBTixDQUFBLENBQTdCO0FBR0M7QUFBQSxXQUFBLHFDQUFBOztRQUNDLElBQWEsQ0FBQyxDQUFDLFVBQUYsQ0FBYSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQTNCLEVBQXVDLFNBQXZDLENBQWI7VUFBQSxLQUFBLEdBQVEsRUFBUjs7QUFERDtBQUlBO0FBQUEsV0FBQSx3Q0FBQTs7UUFDQyxJQUFhLENBQUMsQ0FBQyxVQUFGLENBQWEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUEzQixFQUF1QyxTQUF2QyxDQUFiO1VBQUEsS0FBQSxHQUFRLEVBQVI7O0FBREQ7QUFJQTtBQUFBLFdBQUEsd0NBQUE7O1FBQ0MsSUFBZSxDQUFDLENBQUMsVUFBRixDQUFhLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBM0IsRUFBdUMsV0FBdkMsQ0FBZjtVQUFBLEtBQUEsR0FBUSxJQUFSOztBQURELE9BWEQ7O0lBZUEsSUFBd0IsS0FBQSxLQUFTLFlBQWpDO0FBQUEsYUFBTyxHQUFBLENBQUksS0FBSixFQUFQOztJQUdBLElBQUEsQ0FBTyxLQUFLLENBQUMsU0FBTixDQUFBLENBQVA7TUFDQyxnQkFBQSxHQUFtQixLQUFLLENBQUMsZ0JBQU4sQ0FBQTtNQUVuQixJQUE0QixnQkFBQSxHQUFtQixZQUEvQztRQUFBLEtBQUEsR0FBUSxpQkFBUjtPQUhEOztBQU1BLFdBQU8sR0FBQSxDQUFJLEtBQUo7RUE1QkY7O0VBaUNOLEtBQUEsR0FBUSxHQUFBLENBQUE7O0VBS1IsZ0JBQUMsQ0FBQyxJQUFGLEdBQVUsU0FBQyxDQUFEO0FBQU8sV0FBTyxDQUFBLEdBQUk7RUFBbEI7O0VBRVYsZ0JBQUMsQ0FBQyxLQUFGLEdBQVU7Ozs7OztBQUtYLE9BQU8sQ0FBQyxHQUFSLEdBQWMsT0FBTyxDQUFDLGdCQUFnQixDQUFDIn0=
