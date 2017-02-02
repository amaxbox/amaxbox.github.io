require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Path":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.Path = (function(superClass) {
  var animate, animating, animations, bezier, close, path, point, points, quadratic;

  extend(Path, superClass);

  path = [];

  animating = [];

  point = [];

  animate = [];

  quadratic = [];

  bezier = [];

  close = [];

  animations = points = 0;

  function Path(options) {
    var pathBegin, pathEnd, svgEnd, svgStart;
    options = _.defaults(options, this.pointVisible = this.handleVisible = false, this.pointSize = 4, this.handleSize = 2, this.strokeWidth = 1, this.pointColor = this.handleColor = this.strokeColor = "white", this.fill, this.path = {
      animationOptions: {
        time: 1,
        curve: "bezier-curve"
      },
      draggable: false,
      point: (function(_this) {
        return function(p) {
          var cx, cy, i, j, obj, ref;
          point[points] = new Layer({
            name: "Point #" + points,
            backgroundColor: _this.pointColor,
            superLayer: _this,
            width: _this.pointSize,
            height: _this.pointSize,
            borderRadius: _this.pointSize / 2,
            x: p.x - _this.pointSize / 2,
            y: p.y - _this.pointSize / 2
          });
          animate[points] = new Animation;
          if (_this.pointVisible === false) {
            point[points].opacity = 0;
          }
          if (_this.path.draggable === true) {
            point[points].draggable = true;
          }
          if (p.quadratic === "first" || p.bezier === "first" || p.bezier === "second") {
            point[points].name = "Point #" + points + " (handle)";
            point[points].backgroundColor = _this.handleColor;
            point[points].width = _this.handleSize;
            point[points].height = _this.handleSize;
            if (_this.handleVisible === false) {
              point[points].opacity = 0;
            }
          }
          if (p.states !== void 0) {
            animations = points;
            if (Array.isArray(p.states.x) && Array.isArray(p.states.y)) {
              for (i = j = 0, ref = p.states.x.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
                cx = p.states.x;
                cy = p.states.y;
                point[points].states.add((
                  obj = {},
                  obj["array " + i] = {
                    x: cx[i],
                    y: cy[i]
                  },
                  obj
                ));
              }
            }
            if (Array.isArray(p.states.x) === false && Array.isArray(p.states.y) === false) {
              point[points].states.add({
                second: {
                  x: p.states.x,
                  y: p.states.y
                }
              });
              animate[points] = new Animation({
                layer: point[points],
                properties: {
                  x: p.states.x,
                  y: p.states.y
                },
                time: _this.path.animationOptions.time,
                curve: _this.path.animationOptions.curve
              });
            }
            if (Array.isArray(p.states.x) && Array.isArray(p.states.y) === false) {
              print("Y values are not an array");
            }
            if (Array.isArray(p.states.x) === false && Array.isArray(p.states.y)) {
              print("X values are not an array");
            }
            point[points].states.animationOptions = _this.path.animationOptions;
          }
          if (p.quadratic === void 0 && p.bezier !== "first") {
            quadratic[points] = false;
            bezier[points] = false;
            if (p.close === true) {
              path.push('L' + p.x);
              close[points] = true;
            } else {
              path.push(p.x);
            }
          }
          if (p.quadratic === "first") {
            bezier[points] = false;
            quadratic[points] = true;
            path.push('Q' + p.x);
          }
          if (p.bezier === "first") {
            quadratic[points] = false;
            bezier[points] = true;
            path.push('C' + p.x);
          }
          path.push(p.y);
          _this.html = svgStart + pathBegin + path + pathEnd + svgEnd;
          return points++;
        };
      })(this),
      animate: (function(_this) {
        return function(t) {
          var execute, i, j, k, ref, ref1, results;
          for (i = j = 0, ref = point.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
            if (t === void 0 || t === "states") {
              point[i].states.next();
            } else {
              animate[i].start();
            }
            execute = function() {
              var c, k, ref1;
              for (i = k = 0, ref1 = point.length; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
                c = i + i;
                animating[c] = point[i].x + _this.pointSize / 2;
                if (quadratic[i] === true) {
                  animating[c] = "Q" + animating[c];
                }
                if (bezier[i] === true) {
                  animating[c] = "C" + animating[c];
                }
                if (close[i] === true) {
                  animating[c] = "L" + animating[c];
                }
                animating[c + 1] = point[i].y + _this.pointSize / 2;
              }
              return _this.html = svgStart + pathBegin + animating + pathEnd + svgEnd;
            };
          }
          results = [];
          for (i = k = 0, ref1 = point.length; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
            results.push(point[i].on('change:point', function() {
              return execute();
            }));
          }
          return results;
        };
      })(this),
      quadratic: (function(_this) {
        return function(p) {
          var handle, quadraticPoint;
          if (p.states !== void 0) {
            handle = {
              x: p.x,
              y: p.y,
              states: {
                x: p.states.x,
                y: p.states.y
              },
              quadratic: "first"
            };
            quadraticPoint = {
              x: p.qx,
              y: p.qy,
              states: {
                x: p.states.qx,
                y: p.states.qy
              }
            };
          } else {
            handle = {
              x: p.x,
              y: p.y,
              quadratic: "first"
            };
            quadraticPoint = {
              x: p.qx,
              y: p.qy
            };
          }
          _this.path.point(handle);
          return _this.path.point(quadraticPoint);
        };
      })(this),
      cubic: (function(_this) {
        return function(p) {
          var bezierPoint, handleOne, handleTwo;
          if (p.states !== void 0) {
            handleOne = {
              x: p.cx1,
              y: p.cy1,
              states: {
                x: p.states.cx1,
                y: p.states.cy1
              },
              bezier: "first"
            };
            handleTwo = {
              x: p.cx2,
              y: p.cy2,
              states: {
                x: p.states.cx2,
                y: p.states.cy2
              },
              bezier: "second"
            };
            bezierPoint = {
              x: p.x,
              y: p.y,
              states: {
                x: p.states.x,
                y: p.states.y
              }
            };
          } else {
            handleOne = {
              x: p.cx1,
              y: p.cy1,
              bezier: "first"
            };
            handleTwo = {
              x: p.cx2,
              y: p.cy2,
              bezier: "second"
            };
            bezierPoint = {
              x: p.x,
              y: p.y
            };
          }
          _this.path.point(handleOne);
          _this.path.point(handleTwo);
          return _this.path.point(bezierPoint);
        };
      })(this),
      close: (function(_this) {
        return function(p) {
          p.close = true;
          return _this.path.point(p);
        };
      })(this)
    });
    Path.__super__.constructor.call(this, options);
    svgStart = '<svg height="' + this.height + '" width="' + this.width + '" stroke=' + this.strokeColor + ' stroke-width="' + this.strokeWidth + '" fill="' + this.fill + '">';
    pathBegin = '<path d="M';
    pathEnd = '">';
    svgEnd = '</svg>';
  }

  Path.define("path.animationOptions", {
    get: function() {
      return this._path.animationOptions;
    },
    set: function(value) {
      return this._path.animationOptions = value;
    }
  });

  Path.define("path.draggable", {
    get: function() {
      return this._path.draggable;
    },
    set: function(value) {
      return this._path.draggable = value;
    }
  });

  Path.define("pointVisible", {
    get: function() {
      return this._pointVisible;
    },
    set: function(value) {
      return this._pointVisible = value;
    }
  });

  Path.define("handleVisible", {
    get: function() {
      return this._handleVisible;
    },
    set: function(value) {
      return this._handleVisible = value;
    }
  });

  Path.define("pointSize", {
    get: function() {
      return this._pointSize;
    },
    set: function(value) {
      return this._pointSize = value;
    }
  });

  Path.define("handleSize", {
    get: function() {
      return this._handleSize;
    },
    set: function(value) {
      return this._handleSize = value;
    }
  });

  Path.define("pointColor", {
    get: function() {
      return this._pointColor;
    },
    set: function(value) {
      return this._pointColor = value;
    }
  });

  Path.define("handleColor", {
    get: function() {
      return this._handleColor;
    },
    set: function(value) {
      return this._handleColor = value;
    }
  });

  Path.define("strokeColor", {
    get: function() {
      return this._strokeColor;
    },
    set: function(value) {
      return this._strokeColor = value;
    }
  });

  Path.define("strokeWidth", {
    get: function() {
      return this._strokeWidth;
    },
    set: function(value) {
      return this._strokeWidth = value;
    }
  });

  Path.define("fill", {
    get: function() {
      return this._fill;
    },
    set: function(value) {
      return this._fill = value;
    }
  });

  return Path;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FtYXhib3gvR2l0SHViL2FtYXhib3guZ2l0aHViLmlvL1NsaWRlclRlc3QuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvYW1heGJveC9HaXRIdWIvYW1heGJveC5naXRodWIuaW8vU2xpZGVyVGVzdC5mcmFtZXIvbW9kdWxlcy9QYXRoLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsImNsYXNzIGV4cG9ydHMuUGF0aCBleHRlbmRzIExheWVyXHRcblxuXHRwYXRoID0gW107IGFuaW1hdGluZyA9IFtdOyBwb2ludCA9IFtdOyBhbmltYXRlID0gW107IHF1YWRyYXRpYyA9IFtdOyBiZXppZXIgPSBbXTsgY2xvc2UgPSBbXVxuXHRhbmltYXRpb25zID0gcG9pbnRzID0gMFxuXHRcblxuXHRcblx0Y29uc3RydWN0b3I6IChvcHRpb25zKSAtPlxuXHRcdFxuXHRcdFxuXHRcdG9wdGlvbnMgPSBfLmRlZmF1bHRzIG9wdGlvbnMsXG5cdFx0XG5cdFx0XHRAcG9pbnRWaXNpYmxlID0gQGhhbmRsZVZpc2libGUgPSBmYWxzZVxuXHRcdFx0XG5cdFx0XHRAcG9pbnRTaXplID0gNFxuXHRcdFx0QGhhbmRsZVNpemUgPSAyXG5cdFx0XHRAc3Ryb2tlV2lkdGggPSAxXG5cdFx0XHRcblx0XHRcdEBwb2ludENvbG9yID0gQGhhbmRsZUNvbG9yID0gQHN0cm9rZUNvbG9yPSBcIndoaXRlXCJcblxuXHRcdFx0QGZpbGxcblx0XHRcdFxuXHRcdFx0QHBhdGggPSBcblx0XHRcdFx0XG5cdFx0XHRcdGFuaW1hdGlvbk9wdGlvbnM6IHt0aW1lOjE7IGN1cnZlOlwiYmV6aWVyLWN1cnZlXCJ9XG5cdFx0XHRcdFxuXHRcdFx0XHRkcmFnZ2FibGU6IGZhbHNlXG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdHBvaW50OiAocCkgPT5cblxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHBvaW50W3BvaW50c10gPSBuZXcgTGF5ZXJcblx0XHRcdFx0XHRcdFx0bmFtZTogXCJQb2ludCAjXCIrcG9pbnRzXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQHBvaW50Q29sb3Jcblx0XHRcdFx0XHRcdFx0c3VwZXJMYXllcjogQFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogQHBvaW50U2l6ZVxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IEBwb2ludFNpemVcblx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBAcG9pbnRTaXplLzJcblx0XHRcdFx0XHRcdFx0eDogcC54IC0gQHBvaW50U2l6ZS8yXG5cdFx0XHRcdFx0XHRcdHk6IHAueSAtIEBwb2ludFNpemUvMlxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRhbmltYXRlW3BvaW50c10gPSBuZXcgQW5pbWF0aW9uXG5cdFx0XHRcdFx0XG5cdFx0XHRcdCBpZiBAcG9pbnRWaXNpYmxlID09IGZhbHNlXG5cdFx0XHRcdFx0XHRwb2ludFtwb2ludHNdLm9wYWNpdHkgPSAwXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0IGlmIEBwYXRoLmRyYWdnYWJsZSA9PSB0cnVlXG5cdFx0XHRcdFx0XHRwb2ludFtwb2ludHNdLmRyYWdnYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHQgaWYgcC5xdWFkcmF0aWMgPT0gXCJmaXJzdFwiIG9yIHAuYmV6aWVyID09IFwiZmlyc3RcIiBvciBwLmJlemllciA9PSBcInNlY29uZFwiXG5cdFx0XHRcdCBcdFx0cG9pbnRbcG9pbnRzXS5uYW1lID0gXCJQb2ludCAjXCIrcG9pbnRzK1wiIChoYW5kbGUpXCJcblx0XHRcdFx0IFx0XHRwb2ludFtwb2ludHNdLmJhY2tncm91bmRDb2xvciA9IEBoYW5kbGVDb2xvclxuXHRcdFx0XHQgXHRcdHBvaW50W3BvaW50c10ud2lkdGggPSBAaGFuZGxlU2l6ZVxuXHRcdFx0XHQgXHRcdHBvaW50W3BvaW50c10uaGVpZ2h0ID0gQGhhbmRsZVNpemVcblx0XHRcdFx0IFx0XHRcblx0XHRcdFx0IFx0XHRpZiBAaGFuZGxlVmlzaWJsZSA9PSBmYWxzZVxuXHRcdFx0XHQgXHRcdFx0cG9pbnRbcG9pbnRzXS5vcGFjaXR5ID0gMFxuXG5cdFx0XHRcdFx0aWYgcC5zdGF0ZXMgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGFuaW1hdGlvbnMgPSBwb2ludHNcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZiBBcnJheS5pc0FycmF5KHAuc3RhdGVzLngpICYmIEFycmF5LmlzQXJyYXkocC5zdGF0ZXMueSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Zm9yIGkgaW4gWzAuLi5wLnN0YXRlcy54Lmxlbmd0aF1cblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRjeCA9IHAuc3RhdGVzLnhcblx0XHRcdFx0XHRcdFx0XHRjeSA9IHAuc3RhdGVzLnlcblx0XHRcdFx0XHRcdFx0XHRcblxuXHRcdFx0XHRcdFx0XHRcdHBvaW50W3BvaW50c10uc3RhdGVzLmFkZFxuXHRcdFx0XHRcdFx0XHRcdFx0XCJhcnJheSAje2l9XCI6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eDogY3hbaV1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR5OiBjeVtpXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmIEFycmF5LmlzQXJyYXkocC5zdGF0ZXMueCk9PWZhbHNlICYmIEFycmF5LmlzQXJyYXkocC5zdGF0ZXMueSk9PWZhbHNlXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0cG9pbnRbcG9pbnRzXS5zdGF0ZXMuYWRkXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWNvbmQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHg6IHAuc3RhdGVzLnhcblx0XHRcdFx0XHRcdFx0XHRcdFx0eTogcC5zdGF0ZXMueVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0YW5pbWF0ZVtwb2ludHNdID0gbmV3IEFuaW1hdGlvblxuXHRcdFx0XHRcdFx0XHRcdGxheWVyOiBwb2ludFtwb2ludHNdXG5cdFx0XHRcdFx0XHRcdFx0cHJvcGVydGllczpcblx0XHRcdFx0XHRcdFx0XHRcdHg6IHAuc3RhdGVzLnhcblx0XHRcdFx0XHRcdFx0XHRcdHk6IHAuc3RhdGVzLnlcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiBALnBhdGguYW5pbWF0aW9uT3B0aW9ucy50aW1lXG5cdFx0XHRcdFx0XHRcdFx0Y3VydmU6IEAucGF0aC5hbmltYXRpb25PcHRpb25zLmN1cnZlXG5cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XG5cdFxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQjIEluIGNhc2UgaWYgbm90IGJvdGggdmFsdWVzIGFyZSBhcnJheXNcdFxuXHRcdFx0XHRcdFx0aWYgQXJyYXkuaXNBcnJheShwLnN0YXRlcy54KSAmJiBBcnJheS5pc0FycmF5KHAuc3RhdGVzLnkpPT1mYWxzZVxuXHRcdFx0XHRcdFx0XHRwcmludCBcIlkgdmFsdWVzIGFyZSBub3QgYW4gYXJyYXlcIlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZiBBcnJheS5pc0FycmF5KHAuc3RhdGVzLngpPT1mYWxzZSAmJiBBcnJheS5pc0FycmF5KHAuc3RhdGVzLnkpXG5cdFx0XHRcdFx0XHRcdHByaW50IFwiWCB2YWx1ZXMgYXJlIG5vdCBhbiBhcnJheVwiXG5cdFx0XHRcdFxuXG5cdFx0XHRcdFx0XG5cdFx0XHRcdCBcdHBvaW50W3BvaW50c10uc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPSBAcGF0aC5hbmltYXRpb25PcHRpb25zXG5cdFx0XHRcdCBcblx0XHRcdFx0IFx0XHRcdFx0XHQgXHRcblx0XHRcdFx0XHRpZiBwLnF1YWRyYXRpYyA9PSB1bmRlZmluZWQgJiYgcC5iZXppZXIgIT0gXCJmaXJzdFwiXG5cdFx0XHRcdFx0XHQgcXVhZHJhdGljW3BvaW50c10gPSBmYWxzZVxuXHRcdFx0XHRcdFx0IGJlemllcltwb2ludHNdID0gZmFsc2Vcblx0XHRcdFx0XHRcdCBcblx0XHRcdFx0XHRcdCBpZiBwLmNsb3NlID09IHRydWVcblx0XHRcdFx0XHRcdCBcdHBhdGgucHVzaCgnTCcrcC54KVxuXHRcdFx0XHRcdFx0IFx0Y2xvc2VbcG9pbnRzXSA9IHRydWVcblx0XHRcdFx0XHRcdCBlbHNlXG5cdFx0XHRcdFx0XHQgXHRwYXRoLnB1c2gocC54KVx0XG5cdFx0XHRcdFx0XHQgXG5cdFx0XHRcdCBcblx0XHRcdFx0IFx0aWYgcC5xdWFkcmF0aWMgPT0gXCJmaXJzdFwiXHRcblx0XHRcdFx0IFx0XHRiZXppZXJbcG9pbnRzXSA9IGZhbHNlXG5cdFx0XHRcdCBcdFx0XG5cdFx0XHRcdCBcdFx0cXVhZHJhdGljW3BvaW50c10gPSB0cnVlXG5cdFx0XHRcdCBcdFx0cGF0aC5wdXNoKCdRJytwLngpXG5cdFx0XHRcdCBcdFx0XG5cdFx0XHRcdCBcdGlmIHAuYmV6aWVyID09IFwiZmlyc3RcIlxuXHRcdFx0XHQgXHRcdHF1YWRyYXRpY1twb2ludHNdID0gZmFsc2Vcblx0XHRcdFx0IFx0XHRcblx0XHRcdFx0IFx0XHRiZXppZXJbcG9pbnRzXSA9IHRydWVcblx0XHRcdFx0IFx0XHRwYXRoLnB1c2goJ0MnK3AueClcblx0XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cGF0aC5wdXNoKHAueSlcblx0XHRcdFx0XHRcbiMgXHRcdFx0XHRcdHByaW50IHBvaW50cytcIjogXCIrcXVhZHJhdGljW3BvaW50c11cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRAaHRtbCA9IHN2Z1N0YXJ0ICsgcGF0aEJlZ2luICsgcGF0aCArIHBhdGhFbmQgKyBzdmdFbmRcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRwb2ludHMrK1xuXHRcdFx0XHRcblx0XHRcdFx0XHRcblx0XHRcdFx0YW5pbWF0ZTogKHQpID0+XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0XHRmb3IgaSBpblswLi4ucG9pbnQubGVuZ3RoXVxuXHRcdFx0XHRcdFx0aWYgdCA9PSB1bmRlZmluZWQgfHwgdCA9PSBcInN0YXRlc1wiXG5cdFx0XHRcdFx0XHRcdHBvaW50W2ldLnN0YXRlcy5uZXh0KClcblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0YW5pbWF0ZVtpXS5zdGFydCgpXG4gXHRcdFx0XHRcdFxuIFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0ZXhlY3V0ZSA9ID0+XG5cdFx0XHRcdFx0XHRcbiBcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRmb3IgaSBpbiBbMC4uLnBvaW50Lmxlbmd0aF1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdGMgPSBpK2lcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcblxuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGluZ1tjXSA9IHBvaW50W2ldLnggKyBAcG9pbnRTaXplLzJcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRpZiBxdWFkcmF0aWNbaV0gPT0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0aW5nW2NdID0gXCJRXCIgKyBhbmltYXRpbmdbY11cblx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdGlmIGJlemllcltpXSA9PSB0cnVlXG5cdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRpbmdbY10gPSBcIkNcIiArIGFuaW1hdGluZ1tjXVxuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0aWYgY2xvc2VbaV0gPT0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0aW5nW2NdID0gXCJMXCIgKyBhbmltYXRpbmdbY11cblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRhbmltYXRpbmdbYysxXSA9IHBvaW50W2ldLnkgKyBAcG9pbnRTaXplLzJcblx0XHRcdFx0XHRcdFx0XHRcblxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0QGh0bWwgPSBzdmdTdGFydCArIHBhdGhCZWdpbiArIGFuaW1hdGluZyArIHBhdGhFbmQgKyBzdmdFbmRcdFx0XHRcbiMgXHRcdFx0XHRcdFx0XHRwcmludCBAaHRtbFxuXHRcdFxuXHRcdFx0XHRcdGZvciBpIGluWzAuLi5wb2ludC5sZW5ndGhdXG5cdFx0XHRcdFx0XHRcdHBvaW50W2ldLm9uICdjaGFuZ2U6cG9pbnQnLCA9PiBcblx0XHRcdFx0XHRcdFx0XHRleGVjdXRlKClcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcblxuXHRcdFx0XG5cdFx0XHRcdHF1YWRyYXRpYzogKHApID0+XG5cdFx0XHRcdFxuXHRcdFx0XHRcdGlmIHAuc3RhdGVzICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0aGFuZGxlID1cblx0XHRcdFx0XHRcdFx0eDogcC54XG5cdFx0XHRcdFx0XHRcdHk6IHAueVxuXHRcdFx0XHRcdFx0XHRzdGF0ZXM6IFxuXHRcdFx0XHRcdFx0XHRcdHg6IHAuc3RhdGVzLnhcblx0XHRcdFx0XHRcdFx0XHR5OiBwLnN0YXRlcy55XG5cdFx0XHRcdFx0XHRcdHF1YWRyYXRpYzogXCJmaXJzdFwiXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHF1YWRyYXRpY1BvaW50ID1cblx0XHRcdFx0XHRcdFx0eDogcC5xeFxuXHRcdFx0XHRcdFx0XHR5OiBwLnF5XG5cdFx0XHRcdFx0XHRcdHN0YXRlczogXG5cdFx0XHRcdFx0XHRcdFx0eDogcC5zdGF0ZXMucXhcblx0XHRcdFx0XHRcdFx0XHR5OiBwLnN0YXRlcy5xeVxuXHRcdFxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGhhbmRsZSA9XG5cdFx0XHRcdFx0XHRcdHg6IHAueFxuXHRcdFx0XHRcdFx0XHR5OiBwLnlcblx0XHRcdFx0XHRcdFx0cXVhZHJhdGljOiBcImZpcnN0XCJcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRxdWFkcmF0aWNQb2ludCA9XG5cdFx0XHRcdFx0XHRcdHg6IHAucXhcblx0XHRcdFx0XHRcdFx0eTogcC5xeVxuXHRcdFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdEBwYXRoLnBvaW50KGhhbmRsZSlcblx0XHRcdFx0XHRAcGF0aC5wb2ludChxdWFkcmF0aWNQb2ludClcblx0XHRcdFx0XHRcblx0XHRcblx0XHRcdFx0XHRcblxuXHRcdFx0XHRjdWJpYzogKHApID0+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgcC5zdGF0ZXMgIT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRoYW5kbGVPbmUgPSBcblx0XHRcdFx0XHRcdFx0eDogcC5jeDFcblx0XHRcdFx0XHRcdFx0eTogcC5jeTFcblx0XHRcdFx0XHRcdFx0c3RhdGVzOlxuXHRcdFx0XHRcdFx0XHRcdHg6IHAuc3RhdGVzLmN4MVxuXHRcdFx0XHRcdFx0XHRcdHk6IHAuc3RhdGVzLmN5MVxuXHRcdFx0XHRcdFx0XHRiZXppZXI6IFwiZmlyc3RcIlxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGhhbmRsZVR3byA9IFxuXHRcdFx0XHRcdFx0XHR4OiBwLmN4MlxuXHRcdFx0XHRcdFx0XHR5OiBwLmN5MlxuXHRcdFx0XHRcdFx0XHRzdGF0ZXM6XG5cdFx0XHRcdFx0XHRcdFx0eDogcC5zdGF0ZXMuY3gyXG5cdFx0XHRcdFx0XHRcdFx0eTogcC5zdGF0ZXMuY3kyXG5cdFx0XHRcdFx0XHRcdGJlemllcjogXCJzZWNvbmRcIlxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGJlemllclBvaW50ID1cblx0XHRcdFx0XHRcdFx0eDogcC54XG5cdFx0XHRcdFx0XHRcdHk6IHAueVxuXHRcdFx0XHRcdFx0XHRzdGF0ZXM6XG5cdFx0XHRcdFx0XHRcdFx0eDogcC5zdGF0ZXMueFxuXHRcdFx0XHRcdFx0XHRcdHk6IHAuc3RhdGVzLnlcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRoYW5kbGVPbmUgPSBcblx0XHRcdFx0XHRcdFx0eDogcC5jeDFcblx0XHRcdFx0XHRcdFx0eTogcC5jeTFcblx0XHRcdFx0XHRcdFx0YmV6aWVyOiBcImZpcnN0XCJcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGhhbmRsZVR3byA9IFxuXHRcdFx0XHRcdFx0XHR4OiBwLmN4MlxuXHRcdFx0XHRcdFx0XHR5OiBwLmN5MlxuXHRcdFx0XHRcdFx0XHRiZXppZXI6IFwic2Vjb25kXCJcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRiZXppZXJQb2ludCA9XG5cdFx0XHRcdFx0XHRcdHg6IHAueFxuXHRcdFx0XHRcdFx0XHR5OiBwLnlcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRAcGF0aC5wb2ludChoYW5kbGVPbmUpXG5cdFx0XHRcdFx0QHBhdGgucG9pbnQoaGFuZGxlVHdvKVx0XG5cdFx0XHRcdFx0QHBhdGgucG9pbnQoYmV6aWVyUG9pbnQpXHRcdFx0XHRcblx0XHRcdFx0XHRcblx0XHRcdFx0Y2xvc2U6IChwKSA9PlxuXHRcdFx0XHRcdHAuY2xvc2UgPSB0cnVlXG5cdFx0XHRcdFx0QHBhdGgucG9pbnQocClcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFxuXHRcdFx0XG5cdFx0c3VwZXIgb3B0aW9uc1xuXHRcdFxuXHRcdHN2Z1N0YXJ0ID0gJzxzdmcgaGVpZ2h0PVwiJytAaGVpZ2h0KydcIiB3aWR0aD1cIicrQHdpZHRoKydcIiBzdHJva2U9JytAc3Ryb2tlQ29sb3IrJyBzdHJva2Utd2lkdGg9XCInK0BzdHJva2VXaWR0aCsnXCIgZmlsbD1cIicrQGZpbGwrJ1wiPidcblx0XHRwYXRoQmVnaW4gPSAnPHBhdGggZD1cIk0nXG5cdFx0cGF0aEVuZCA9ICdcIj4nXG5cdFx0c3ZnRW5kID0gJzwvc3ZnPidcdFxuXHRcblx0XHRcblx0XHRcblx0XHRcblx0QGRlZmluZSBcInBhdGguYW5pbWF0aW9uT3B0aW9uc1wiLFxuXHRcdGdldDogLT4gQF9wYXRoLmFuaW1hdGlvbk9wdGlvbnNcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gXG5cdFx0XHRAX3BhdGguYW5pbWF0aW9uT3B0aW9ucyA9IHZhbHVlXG5cdFx0XG5cdEBkZWZpbmUgXCJwYXRoLmRyYWdnYWJsZVwiLFxuXHRcdGdldDogLT4gQF9wYXRoLmRyYWdnYWJsZVxuXHRcdHNldDogKHZhbHVlKSAtPiBcblx0XHRcdEBfcGF0aC5kcmFnZ2FibGUgPSB2YWx1ZVxuXHRcdFxuXHRAZGVmaW5lIFwicG9pbnRWaXNpYmxlXCIsXG5cdFx0Z2V0OiAtPiBAX3BvaW50VmlzaWJsZVxuXHRcdHNldDogKHZhbHVlKSAtPiBcblx0XHRcdEBfcG9pbnRWaXNpYmxlID0gdmFsdWVcblx0XHRcdFxuXHRAZGVmaW5lIFwiaGFuZGxlVmlzaWJsZVwiLFxuXHRcdGdldDogLT4gQF9oYW5kbGVWaXNpYmxlXG5cdFx0c2V0OiAodmFsdWUpIC0+IFxuXHRcdFx0QF9oYW5kbGVWaXNpYmxlID0gdmFsdWVcblx0XHRcdFxuXHRAZGVmaW5lIFwicG9pbnRTaXplXCIsXG5cdFx0Z2V0OiAtPiBAX3BvaW50U2l6ZVxuXHRcdHNldDogKHZhbHVlKSAtPiBcblx0XHRcdEBfcG9pbnRTaXplID0gdmFsdWVcblx0XHRcdFxuXHRAZGVmaW5lIFwiaGFuZGxlU2l6ZVwiLFxuXHRcdGdldDogLT4gQF9oYW5kbGVTaXplXG5cdFx0c2V0OiAodmFsdWUpIC0+IFxuXHRcdFx0QF9oYW5kbGVTaXplID0gdmFsdWVcblx0XHRcdFxuXHRAZGVmaW5lIFwicG9pbnRDb2xvclwiLFxuXHRcdGdldDogLT4gQF9wb2ludENvbG9yXG5cdFx0c2V0OiAodmFsdWUpIC0+IFxuXHRcdFx0QF9wb2ludENvbG9yID0gdmFsdWVcblx0XHRcdFxuXHRAZGVmaW5lIFwiaGFuZGxlQ29sb3JcIixcblx0XHRnZXQ6IC0+IEBfaGFuZGxlQ29sb3Jcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gXG5cdFx0XHRAX2hhbmRsZUNvbG9yID0gdmFsdWVcblx0XHRcdFxuXHRAZGVmaW5lIFwic3Ryb2tlQ29sb3JcIixcblx0XHRnZXQ6IC0+IEBfc3Ryb2tlQ29sb3Jcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gXG5cdFx0XHRAX3N0cm9rZUNvbG9yID0gdmFsdWVcblx0XHRcdFxuXHRAZGVmaW5lIFwic3Ryb2tlV2lkdGhcIixcblx0XHRnZXQ6IC0+IEBfc3Ryb2tlV2lkdGhcblx0XHRzZXQ6ICh2YWx1ZSkgLT4gXG5cdFx0XHRAX3N0cm9rZVdpZHRoID0gdmFsdWVcblx0XHRcblx0QGRlZmluZSBcImZpbGxcIixcblx0XHRnZXQ6IC0+IEBfZmlsbFxuXHRcdHNldDogKHZhbHVlKSAtPiBcblx0XHRcdEBfZmlsbCA9IHZhbHVlIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFFQUE7QURBQSxJQUFBOzs7QUFBTSxPQUFPLENBQUM7QUFFYixNQUFBOzs7O0VBQUEsSUFBQSxHQUFPOztFQUFJLFNBQUEsR0FBWTs7RUFBSSxLQUFBLEdBQVE7O0VBQUksT0FBQSxHQUFVOztFQUFJLFNBQUEsR0FBWTs7RUFBSSxNQUFBLEdBQVM7O0VBQUksS0FBQSxHQUFROztFQUMxRixVQUFBLEdBQWEsTUFBQSxHQUFTOztFQUlULGNBQUMsT0FBRDtBQUdaLFFBQUE7SUFBQSxPQUFBLEdBQVUsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxPQUFYLEVBRVQsSUFBQyxDQUFBLFlBQUQsR0FBZ0IsSUFBQyxDQUFBLGFBQUQsR0FBaUIsS0FGeEIsRUFJVCxJQUFDLENBQUEsU0FBRCxHQUFhLENBSkosRUFLVCxJQUFDLENBQUEsVUFBRCxHQUFjLENBTEwsRUFNVCxJQUFDLENBQUEsV0FBRCxHQUFlLENBTk4sRUFRVCxJQUFDLENBQUEsVUFBRCxHQUFjLElBQUMsQ0FBQSxXQUFELEdBQWUsSUFBQyxDQUFBLFdBQUQsR0FBYyxPQVJsQyxFQVVULElBQUMsQ0FBQSxJQVZRLEVBWVQsSUFBQyxDQUFBLElBQUQsR0FFQztNQUFBLGdCQUFBLEVBQWtCO1FBQUMsSUFBQSxFQUFLLENBQU47UUFBUyxLQUFBLEVBQU0sY0FBZjtPQUFsQjtNQUVBLFNBQUEsRUFBVyxLQUZYO01BTUEsS0FBQSxFQUFPLENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQyxDQUFEO0FBR04sY0FBQTtVQUFBLEtBQU0sQ0FBQSxNQUFBLENB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
