exports.ids = [0];
exports.modules = {

/***/ "./components/lines.js":
/*!*****************************!*\
  !*** ./components/lines.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var threejs_meshline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! threejs-meshline */ "threejs-meshline");
/* harmony import */ var threejs_meshline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(threejs_meshline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-three-fiber */ "react-three-fiber");
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_lines_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/lines.module.css */ "./styles/lines.module.css");
/* harmony import */ var _styles_lines_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_lines_module_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/home/maio/Projects/maxma.io/components/lines.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__["extend"])(threejs_meshline__WEBPACK_IMPORTED_MODULE_4__);

function Fatline({
  curve,
  width,
  color,
  speed
}) {
  const material = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__["useFrame"])(() => material.current.uniforms.dashOffset.value -= speed);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("mesh", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meshLine", {
      attach: "geometry",
      vertices: curve
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meshLineMaterial", {
      attach: "material",
      ref: material,
      transparent: true,
      depthTest: false,
      lineWidth: width,
      color: color,
      dashArray: 0.1,
      dashRatio: 0.9
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

function Lines({
  count,
  colors
}) {
  const lines = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => new Array(count).fill().map(() => {
    const pos = new three__WEBPACK_IMPORTED_MODULE_3__["Vector3"](10 - Math.random() * 20, 10 - Math.random() * 20, 10 - Math.random() * 20);
    const points = new Array(30).fill().map(() => pos.add(new three__WEBPACK_IMPORTED_MODULE_3__["Vector3"](4 - Math.random() * 8, 4 - Math.random() * 8, 2 - Math.random() * 4)).clone());
    const curve = new three__WEBPACK_IMPORTED_MODULE_3__["CatmullRomCurve3"](points).getPoints(1000);
    return {
      color: colors[parseInt(colors.length * Math.random())],
      width: Math.max(0.0125, 0.125 * Math.random()),
      speed: Math.max(0.000075, 0.0001 * Math.random()),
      curve
    };
  }), [colors, count]);
  return lines.map((props, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Fatline, _objectSpread({}, props), index, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 38
  }, this));
}

function Rig({
  mouse
}) {
  const {
    camera
  } = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__["useThree"])();
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__["useFrame"])(() => {
    camera.position.x += (mouse.current[0] / 50 - camera.position.x) * 0.05;
    camera.position.y += (-mouse.current[1] / 50 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function App() {
  const mouse = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])([0, 0]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_lines_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.top,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__["Canvas"], {
      camera: {
        position: [0, 0, 10],
        fov: 70
      },
      onMouseMove: e => mouse.current = [e.clientX - window.innerWidth / 2, e.clientY - window.innerHeight / 2],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Lines, {
        count: 20,
        colors: ['#7a73ff', '#80e9ff', '#e0feff', '#fec959', '#9487ff']
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Rig, {
        mouse: mouse
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./styles/lines.module.css":
/*!*********************************!*\
  !*** ./styles/lines.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"top": "lines_top__hnKg3"
};


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpbmVzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9saW5lcy5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbImV4dGVuZCIsIm1lc2hsaW5lIiwiRmF0bGluZSIsImN1cnZlIiwid2lkdGgiLCJjb2xvciIsInNwZWVkIiwibWF0ZXJpYWwiLCJ1c2VSZWYiLCJ1c2VGcmFtZSIsImN1cnJlbnQiLCJ1bmlmb3JtcyIsImRhc2hPZmZzZXQiLCJ2YWx1ZSIsIkxpbmVzIiwiY291bnQiLCJjb2xvcnMiLCJsaW5lcyIsInVzZU1lbW8iLCJBcnJheSIsImZpbGwiLCJtYXAiLCJwb3MiLCJUSFJFRSIsIk1hdGgiLCJyYW5kb20iLCJwb2ludHMiLCJhZGQiLCJjbG9uZSIsImdldFBvaW50cyIsInBhcnNlSW50IiwibGVuZ3RoIiwibWF4IiwicHJvcHMiLCJpbmRleCIsIlJpZyIsIm1vdXNlIiwiY2FtZXJhIiwidXNlVGhyZWUiLCJwb3NpdGlvbiIsIngiLCJ5IiwibG9va0F0IiwiQXBwIiwic3R5bGVzIiwidG9wIiwiZm92IiwiZSIsImNsaWVudFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2xpZW50WSIsImlubmVySGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxnRUFBTSxDQUFDQyw2Q0FBRCxDQUFOOztBQUVBLFNBQVNDLE9BQVQsQ0FBaUI7QUFBRUMsT0FBRjtBQUFTQyxPQUFUO0FBQWdCQyxPQUFoQjtBQUF1QkM7QUFBdkIsQ0FBakIsRUFBaUQ7QUFDL0MsUUFBTUMsUUFBUSxHQUFHQyxvREFBTSxFQUF2QjtBQUNBQyxvRUFBUSxDQUFDLE1BQU9GLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsUUFBakIsQ0FBMEJDLFVBQTFCLENBQXFDQyxLQUFyQyxJQUE4Q1AsS0FBdEQsQ0FBUjtBQUNBLHNCQUNFO0FBQUEs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IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgKiBhcyBtZXNobGluZSBmcm9tICd0aHJlZWpzLW1lc2hsaW5lJ1xuaW1wb3J0IHsgZXh0ZW5kLCBDYW52YXMsIHVzZUZyYW1lLCB1c2VUaHJlZSB9IGZyb20gJ3JlYWN0LXRocmVlLWZpYmVyJ1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2xpbmVzLm1vZHVsZS5jc3NcIlxuXG5leHRlbmQobWVzaGxpbmUpXG5cbmZ1bmN0aW9uIEZhdGxpbmUoeyBjdXJ2ZSwgd2lkdGgsIGNvbG9yLCBzcGVlZCB9KSB7XG4gIGNvbnN0IG1hdGVyaWFsID0gdXNlUmVmKClcbiAgdXNlRnJhbWUoKCkgPT4gKG1hdGVyaWFsLmN1cnJlbnQudW5pZm9ybXMuZGFzaE9mZnNldC52YWx1ZSAtPSBzcGVlZCkpXG4gIHJldHVybiAoXG4gICAgPG1lc2g+XG4gICAgICA8bWVzaExpbmUgYXR0YWNoPVwiZ2VvbWV0cnlcIiB2ZXJ0aWNlcz17Y3VydmV9IC8+XG4gICAgICA8bWVzaExpbmVNYXRlcmlhbCBhdHRhY2g9XCJtYXRlcmlhbFwiIHJlZj17bWF0ZXJpYWx9IHRyYW5zcGFyZW50IGRlcHRoVGVzdD17ZmFsc2V9IGxpbmVXaWR0aD17d2lkdGh9IGNvbG9yPXtjb2xvcn0gZGFzaEFycmF5PXswLjF9IGRhc2hSYXRpbz17MC45fSAvPlxuICAgIDwvbWVzaD5cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5lcyh7IGNvdW50LCBjb2xvcnMgfSkge1xuICBjb25zdCBsaW5lcyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIG5ldyBBcnJheShjb3VudCkuZmlsbCgpLm1hcCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvcyA9IG5ldyBUSFJFRS5WZWN0b3IzKDEwIC0gTWF0aC5yYW5kb20oKSAqIDIwLCAxMCAtIE1hdGgucmFuZG9tKCkgKiAyMCwgMTAgLSBNYXRoLnJhbmRvbSgpICogMjApXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IG5ldyBBcnJheSgzMCkuZmlsbCgpLm1hcCgoKSA9PiBwb3MuYWRkKG5ldyBUSFJFRS5WZWN0b3IzKDQgLSBNYXRoLnJhbmRvbSgpICogOCwgNCAtIE1hdGgucmFuZG9tKCkgKiA4LCAyIC0gTWF0aC5yYW5kb20oKSAqIDQpKS5jbG9uZSgpKVxuICAgICAgICBjb25zdCBjdXJ2ZSA9IG5ldyBUSFJFRS5DYXRtdWxsUm9tQ3VydmUzKHBvaW50cykuZ2V0UG9pbnRzKDEwMDApXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29sb3I6IGNvbG9yc1twYXJzZUludChjb2xvcnMubGVuZ3RoICogTWF0aC5yYW5kb20oKSldLFxuICAgICAgICAgIHdpZHRoOiBNYXRoLm1heCgwLjAxMjUsIDAuMTI1ICogTWF0aC5yYW5kb20oKSksXG4gICAgICAgICAgc3BlZWQ6IE1hdGgubWF4KDAuMDAwMDc1LCAwLjAwMDEgKiBNYXRoLnJhbmRvbSgpKSxcbiAgICAgICAgICBjdXJ2ZVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICBbY29sb3JzLCBjb3VudF1cbiAgKVxuICByZXR1cm4gbGluZXMubWFwKChwcm9wcywgaW5kZXgpID0+IDxGYXRsaW5lIGtleT17aW5kZXh9IHsuLi5wcm9wc30gLz4pXG59XG5cbmZ1bmN0aW9uIFJpZyh7IG1vdXNlIH0pIHtcbiAgY29uc3QgeyBjYW1lcmEgfSA9IHVzZVRocmVlKClcbiAgdXNlRnJhbWUoKCkgPT4ge1xuICAgIGNhbWVyYS5wb3NpdGlvbi54ICs9IChtb3VzZS5jdXJyZW50WzBdIC8gNTAgLSBjYW1lcmEucG9zaXRpb24ueCkgKiAwLjA1XG4gICAgY2FtZXJhLnBvc2l0aW9uLnkgKz0gKC1tb3VzZS5jdXJyZW50WzFdIC8gNTAgLSBjYW1lcmEucG9zaXRpb24ueSkgKiAwLjA1XG4gICAgY2FtZXJhLmxvb2tBdCgwLCAwLCAwKVxuICB9KVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IG1vdXNlID0gdXNlUmVmKFswLCAwXSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcH0+XG4gICAgPENhbnZhcyBcbiAgICAgIGNhbWVyYT17eyBwb3NpdGlvbjogWzAsIDAsIDEwXSwgZm92OiA3MCB9fVxuICAgICAgb25Nb3VzZU1vdmU9e2UgPT4gKG1vdXNlLmN1cnJlbnQgPSBbZS5jbGllbnRYIC0gd2luZG93LmlubmVyV2lkdGggLyAyLCBlLmNsaWVudFkgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyXSl9PlxuICAgICAgPExpbmVzIGNvdW50PXsyMH0gY29sb3JzPXtbJyM3YTczZmYnLCAnIzgwZTlmZicsICcjZTBmZWZmJywgJyNmZWM5NTknLCAnIzk0ODdmZiddfSAvPlxuICAgICAgPFJpZyBtb3VzZT17bW91c2V9IC8+XG4gICAgPC9DYW52YXM+XG4gICAgPC9kaXY+XG4gIFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidG9wXCI6IFwibGluZXNfdG9wX19obktnM1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==