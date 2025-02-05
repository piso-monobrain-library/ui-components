"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PageHeader;
function PageHeader() {
  var currentPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'home';
  var template = document.createElement('template');
  var links = ['components', 'playground'];
  template.innerHTML = "\n\t\t<header id=\"page-header\">\n\t\t\t<h1>\n                <a href=\"/\" class=\"".concat(currentPage === 'home' ? 'active' : '', "\">\n                    MONO\n                </a>\n            </h1>\n            <nav style=\"border-bottom: 0.1rem solid var(--primary-color); display: flex; flex-direction: row; gap: 1rem;\">\n                ").concat(links.map(function (link) {
    return "<a class=\"".concat(currentPage === link ? 'active' : '', "\" href=\"?page=").concat(link, "\">").concat(link, "</a>");
  }).join(''), "\n            </nav>\n\t\t</header>\n\t");
  return template.content.cloneNode(true).firstElementChild;
}