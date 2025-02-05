"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Playground;
var _PageHeader = _interopRequireDefault(require("../component/PageHeader.js"));
var Components = _interopRequireWildcard(require("../component/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function getSelectedElem() {
  var queryString = new URLSearchParams(window.location.search);
  var component = queryString.get('component');
  var type = queryString.get('type');
  return !component || !type ? {
    exampleDomstring: '예제코드가 아직 작성되지 않았습니다.',
    descriptions: ''
  } : Components[component][type];
}
function Playground() {
  var selectedElem = getSelectedElem();
  console.log(selectedElem);
  var exampleDomstring = selectedElem.exampleDomstring,
    _selectedElem$descrip = selectedElem.descriptions,
    descriptions = _selectedElem$descrip === void 0 ? '' : _selectedElem$descrip;
  var template = document.createElement('template');
  template.innerHTML = "\n\t\t<article id=\"playground\" class=\"page\">\n\t\t\t".concat((0, _PageHeader["default"])('playground').innerHTML, "\n\t\t\t<h2>Playground</h2>\n\t\t\t<section id=\"playground-content\" class=\"two-panel-container\">\n\t\t\t\t<textarea class=\"code language-javascript\" rows=\"5\"></textarea>\n\t\t\t\t<div class=\"result\"></div>\n\t\t\t</section>\n\n\t\t\t<section id=\"playground-description\" class=\"description\">\n\t\t\t\t<h3>Descriptions</h3>\n\t\t\t\t<div class=\"description-content\">\n\t\t\t\t\t").concat(descriptions, "\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t</article>\n\t");
  var element = template.content.cloneNode(true).firstElementChild;
  var textarea = element.querySelector('.code.language-javascript');
  textarea.value = exampleDomstring.trim();
  var resultDiv = element.querySelector('.result');
  resultDiv.innerHTML = exampleDomstring.trim();
  textarea.addEventListener('input', function () {
    resultDiv.innerHTML = textarea.value;
  });
  return element;
}