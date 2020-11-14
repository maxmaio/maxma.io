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
      width: Math.max(0.01, 0.1 * Math.random()),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpbmVzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9saW5lcy5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbImV4dGVuZCIsIm1lc2hsaW5lIiwiRmF0bGluZSIsImN1cnZlIiwid2lkdGgiLCJjb2xvciIsInNwZWVkIiwibWF0ZXJpYWwiLCJ1c2VSZWYiLCJ1c2VGcmFtZSIsImN1cnJlbnQiLCJ1bmlmb3JtcyIsImRhc2hPZmZzZXQiLCJ2YWx1ZSIsIkxpbmVzIiwiY291bnQiLCJjb2xvcnMiLCJsaW5lcyIsInVzZU1lbW8iLCJBcnJheSIsImZpbGwiLCJtYXAiLCJwb3MiLCJUSFJFRSIsIk1hdGgiLCJyYW5kb20iLCJwb2ludHMiLCJhZGQiLCJjbG9uZSIsImdldFBvaW50cyIsInBhcnNlSW50IiwibGVuZ3RoIiwibWF4IiwicHJvcHMiLCJpbmRleCIsIlJpZyIsIm1vdXNlIiwiY2FtZXJhIiwidXNlVGhyZWUiLCJwb3NpdGlvbiIsIngiLCJ5IiwibG9va0F0IiwiQXBwIiwic3R5bGVzIiwidG9wIiwiZm92IiwiZSIsImNsaWVudFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2xpZW50WSIsImlubmVySGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxnRUFBTSxDQUFDQyw2Q0FBRCxDQUFOOztBQUVBLFNBQVNDLE9BQVQsQ0FBaUI7QUFBRUMsT0FBRjtBQUFTQyxPQUFUO0FBQWdCQyxPQUFoQjtBQUF1QkM7QUFBdkIsQ0FBakIsRUFBaUQ7QUFDL0MsUUFBTUMsUUFBUSxHQUFHQyxvREFBTSxFQUF2QjtBQUNBQyxvRUFBUSxDQUFDLE1BQU9GLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsUUFBakIsQ0FBMEJDLFVBQTFCLENBQXFDQyxLQUFyQyxJQUE4Q1AsS0FBdEQsQ0FBUjtBQUNBLHNCQUNFO0FBQUEs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eyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcbmltcG9ydCAqIGFzIG1lc2hsaW5lIGZyb20gJ3RocmVlanMtbWVzaGxpbmUnXG5pbXBvcnQgeyBleHRlbmQsIENhbnZhcywgdXNlRnJhbWUsIHVzZVRocmVlIH0gZnJvbSAncmVhY3QtdGhyZWUtZmliZXInXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvbGluZXMubW9kdWxlLmNzc1wiXG5cbmV4dGVuZChtZXNobGluZSlcblxuZnVuY3Rpb24gRmF0bGluZSh7IGN1cnZlLCB3aWR0aCwgY29sb3IsIHNwZWVkIH0pIHtcbiAgY29uc3QgbWF0ZXJpYWwgPSB1c2VSZWYoKVxuICB1c2VGcmFtZSgoKSA9PiAobWF0ZXJpYWwuY3VycmVudC51bmlmb3Jtcy5kYXNoT2Zmc2V0LnZhbHVlIC09IHNwZWVkKSlcbiAgcmV0dXJuIChcbiAgICA8bWVzaD5cbiAgICAgIDxtZXNoTGluZSBhdHRhY2g9XCJnZW9tZXRyeVwiIHZlcnRpY2VzPXtjdXJ2ZX0gLz5cbiAgICAgIDxtZXNoTGluZU1hdGVyaWFsIGF0dGFjaD1cIm1hdGVyaWFsXCIgcmVmPXttYXRlcmlhbH0gdHJhbnNwYXJlbnQgZGVwdGhUZXN0PXtmYWxzZX0gbGluZVdpZHRoPXt3aWR0aH0gY29sb3I9e2NvbG9yfSBkYXNoQXJyYXk9ezAuMX0gZGFzaFJhdGlvPXswLjl9IC8+XG4gICAgPC9tZXNoPlxuICApXG59XG5cbmZ1bmN0aW9uIExpbmVzKHsgY291bnQsIGNvbG9ycyB9KSB7XG4gIGNvbnN0IGxpbmVzID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgbmV3IEFycmF5KGNvdW50KS5maWxsKCkubWFwKCgpID0+IHtcbiAgICAgICAgY29uc3QgcG9zID0gbmV3IFRIUkVFLlZlY3RvcjMoMTAgLSBNYXRoLnJhbmRvbSgpICogMjAsIDEwIC0gTWF0aC5yYW5kb20oKSAqIDIwLCAxMCAtIE1hdGgucmFuZG9tKCkgKiAyMClcbiAgICAgICAgY29uc3QgcG9pbnRzID0gbmV3IEFycmF5KDMwKS5maWxsKCkubWFwKCgpID0+IHBvcy5hZGQobmV3IFRIUkVFLlZlY3RvcjMoNCAtIE1hdGgucmFuZG9tKCkgKiA4LCA0IC0gTWF0aC5yYW5kb20oKSAqIDgsIDIgLSBNYXRoLnJhbmRvbSgpICogNCkpLmNsb25lKCkpXG4gICAgICAgIGNvbnN0IGN1cnZlID0gbmV3IFRIUkVFLkNhdG11bGxSb21DdXJ2ZTMocG9pbnRzKS5nZXRQb2ludHMoMTAwMClcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2xvcjogY29sb3JzW3BhcnNlSW50KGNvbG9ycy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV0sXG4gICAgICAgICAgd2lkdGg6IE1hdGgubWF4KDAuMDEsIDAuMSAqIE1hdGgucmFuZG9tKCkpLFxuICAgICAgICAgIHNwZWVkOiBNYXRoLm1heCgwLjAwMDA3NSwgMC4wMDAxICogTWF0aC5yYW5kb20oKSksXG4gICAgICAgICAgY3VydmVcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgW2NvbG9ycywgY291bnRdXG4gIClcbiAgcmV0dXJuIGxpbmVzLm1hcCgocHJvcHMsIGluZGV4KSA9PiA8RmF0bGluZSBrZXk9e2luZGV4fSB7Li4ucHJvcHN9IC8+KVxufVxuXG5mdW5jdGlvbiBSaWcoeyBtb3VzZSB9KSB7XG4gIGNvbnN0IHsgY2FtZXJhIH0gPSB1c2VUaHJlZSgpXG4gIHVzZUZyYW1lKCgpID0+IHtcbiAgICBjYW1lcmEucG9zaXRpb24ueCArPSAobW91c2UuY3VycmVudFswXSAvIDUwIC0gY2FtZXJhLnBvc2l0aW9uLngpICogMC4wNVxuICAgIGNhbWVyYS5wb3NpdGlvbi55ICs9ICgtbW91c2UuY3VycmVudFsxXSAvIDUwIC0gY2FtZXJhLnBvc2l0aW9uLnkpICogMC4wNVxuICAgIGNhbWVyYS5sb29rQXQoMCwgMCwgMClcbiAgfSlcbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBtb3VzZSA9IHVzZVJlZihbMCwgMF0pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3B9PlxuICAgIDxDYW52YXMgXG4gICAgICBjYW1lcmE9e3sgcG9zaXRpb246IFswLCAwLCAxMF0sIGZvdjogNzAgfX1cbiAgICAgIG9uTW91c2VNb3ZlPXtlID0+IChtb3VzZS5jdXJyZW50ID0gW2UuY2xpZW50WCAtIHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgZS5jbGllbnRZIC0gd2luZG93LmlubmVySGVpZ2h0IC8gMl0pfT5cbiAgICAgIDxMaW5lcyBjb3VudD17MjB9IGNvbG9ycz17WycjN2E3M2ZmJywgJyM4MGU5ZmYnLCAnI2UwZmVmZicsICcjZmVjOTU5JywgJyM5NDg3ZmYnXX0gLz5cbiAgICAgIDxSaWcgbW91c2U9e21vdXNlfSAvPlxuICAgIDwvQ2FudmFzPlxuICAgIDwvZGl2PlxuICBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRvcFwiOiBcImxpbmVzX3RvcF9faG5LZzNcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=