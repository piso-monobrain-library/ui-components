import * as Pages from './page/index.js';

const queryParams = new URLSearchParams(window.location.search);
const pageQuery = queryParams.get('page') || '/';

const root = document.getElementById('root');

const page = pageQuery === '/' ? 'Home' : pageQuery.replace('/', '').charAt(0).toUpperCase() + pageQuery.slice(1);
root.appendChild(Pages[page]());
