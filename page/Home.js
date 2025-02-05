"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Home;
var _PageHeader = _interopRequireDefault(require("../component/PageHeader.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Home() {
  var template = document.createElement('template');
  template.innerHTML = "\n\t\t<article id=\"home\" class=\"page\">\n\t\t\t".concat((0, _PageHeader["default"])().innerHTML, "\n\t\t\t<h2 style=\"    position: relative; z-index: 100;\">\uC0AC\uC6A9\uC790 \uC815\uC758 \uD0DC\uADF8\uB97C \uC0AC\uC6A9\uD560 \uB54C\uC758 \uC774\uC810</h2>\n\t\t\t<section class=\"list\" style=\"flex-direction:row; justify-content:center; flex-wrap:wrap; gap:1rem; padding-top:1.5rem;\">\n\n\t\t\t\t<section class='card'>\n\t\t\t\t\t<h3>\uC791\uC5C5\uC790\uC758 \uD2B9\uC131</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>html</b>,\n\t\t\t\t\t\t<b>js</b>,\n\t\t\t\t\t\t<b>css</b>,\n\t\t\t\t\t\tlow-level\uC758 \uD37C\uBE14\uB9AC\uC154\uB3C4 \uC774\uD574\uD560 \uC218 \uC788\uB294 \uC218\uC900\uC758 \uC5B8\uC5B4\uB85C \uC791\uC131\uD560 \uC218 \uC788\uB2E4.\n\t\t\t\t\t</p>\n\t\t\t\t</section>\n\n\t\t\t\t<section class='card'>\n\t\t\t\t\t<h3>\uC720\uC9C0\uBCF4\uC218\uC758 \uC6A9\uC774\uC131</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t\uC7AC\uC0AC\uC6A9\uC131\uC774 \uC62C\uB77C\uAC10\uC73C\uB85C\uC368 \uC720\uC9C0\uBCF4\uC218\uAC00 \uC6A9\uC774\uD574\uC9C4\uB2E4.\n\t\t\t\t\t</p>\n\t\t\t\t</section>\n\n\t\t\t\t<section class='card'>\n\t\t\t\t\t<h3>\uCD94\uAC00 \uAE30\uB2A5\uC5D0 \uB300\uD55C \uB300\uC751</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t\uCD94\uAC00 \uAE30\uB2A5\uC5D0 \uB300\uD55C \uB300\uC751\uC744 \uC27D\uAC8C \uD560 \uC218 \uC788\uB2E4.\n\t\t\t\t\t</p>\n\t\t\t\t</section>\n\t\t\t\t\n\t\t\t</section>\n\t\t</article>\n\t");
  var section = template.content.cloneNode(true).firstElementChild;
  return section;
}