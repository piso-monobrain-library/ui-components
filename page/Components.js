"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Components;
var _PageHeader = _interopRequireDefault(require("../component/PageHeader.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Components() {
  var template = document.createElement('template');
  template.innerHTML = "\n\t\t<article id=\"components\" class=\"page\">\n\t\t\t".concat((0, _PageHeader["default"])('components').innerHTML, "\n\t\t\t<h2>Components</h2>\n\t\t\t<section class=\"list\">\n\t\t\t\t<ul>\n\t\t\t\t\t<h3>Button</h3>\n\t\t\t\t\t<li><a>Default</a></li>\n\t\t\t\t</ul>\n\t\t\t\t<ul>\n\t\t\t\t\t<h3>Container</h3>\n\t\t\t\t\t<li><a>Default</a></li>\n\t\t\t\t</ul>\n\t\t\t</section>\n\t\t</article>\n\t");
  var section = template.content.cloneNode(true).firstElementChild;
  section.querySelector('.list').addEventListener('click', function (e) {
    e.preventDefault();
    var target = e.target;
    if (target.tagName !== 'A') return;
    var component = target.closest('ul').querySelector('h3').textContent;
    window.location.href = "?page=playground&&component=".concat(component, "&&type=").concat(target.textContent);
    console.log(component);
  });
  return section;
}