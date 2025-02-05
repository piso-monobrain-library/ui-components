let Default$1 = class Default extends HTMLElement {
	constructor() {
		super();
		this.textContent.trim() === '' ? '버튼 텍스트를 입력하세요.' : this.textContent;

		this.clickable();

		this.initStyle();
	}

	clickable() {
		if (this.getAttribute('clickable') === 'true')
			this.addEventListener('click', () => {
				console.log('sound를 등록하자');
			});
	}

	initStyle() {
		this.style.cssText = `
            color: green;
            background-color: blue;
        `;
	}

	static get exampleDomstring() {
		return `
            <btn-default>btn-default 예제 버튼</btn-default>
        `;
	}
};

customElements.define('btn-default', Default$1);

var index$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Default: Default$1
});

class Default extends HTMLElement {
	constructor() {
		super();
		this.setStyle();
	}

	setStyle() {
		const type = this.getAttribute('type');
		this.style.cssText = styles[type ?? 'default'];
	}

	static get exampleDomstring() {
		return `
            <custom-container>custom-container 예제</custom-container>
        `;
	}

	static get descriptions() {
		const descriptions = [
			//
			'html tag의 attribute를 활용해 스타일 지정할 수 있습니다. ex) <span class="code-block">&lt;custom-container type="primary"&gt</span>',
		];

		return `<ul>${descriptions.map((description) => `<li>${description}</li>`).join('')}</ul>`;
	}
}

customElements.define('custom-container', Default);

const styles = {
	default: `
        color: white;
        background-color: black;
        padding: 1rem
    `,

	primary: `
        color: slategrey;
        background-color: black;
        padding: 1rem
    `,
};

var index = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Default: Default
});

const log = () => console.log('Load all Components..');

var Components$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Button: index$1,
	Container: index,
	log: log
});

function PageHeader(currentPage = 'home') {
	const template = document.createElement('template');

	const links = ['components', 'playground'];

	template.innerHTML = `
		<header id="page-header">
			<h1>
                <a href="/" class="${currentPage === 'home' ? 'active' : ''}">
                    MONO
                </a>
            </h1>
            <nav style="border-bottom: 0.1rem solid var(--primary-color); display: flex; flex-direction: row; gap: 1rem;">
                ${links
					.map(
						(link) => `<a class="${currentPage === link ? 'active' : ''}" href="?page=${link}">${link}</a>`
					)
					.join('')}
            </nav>
		</header>
	`;

	return template.content.cloneNode(true).firstElementChild;
}

function Home() {
	const template = document.createElement('template');

	template.innerHTML = `
		<article id="home" class="page">
			${PageHeader().innerHTML}
			<h2 style="    position: relative; z-index: 100;">사용자 정의 태그를 사용할 때의 이점</h2>
			<section class="list" style="flex-direction:row; justify-content:center; flex-wrap:wrap; gap:1rem; padding-top:1.5rem;">

				<section class='card'>
					<h3>작업자의 특성</h3>
					<p>
						<b>html</b>,
						<b>js</b>,
						<b>css</b>,
						low-level의 퍼블리셔도 이해할 수 있는 수준의 언어로 작성할 수 있다.
					</p>
				</section>

				<section class='card'>
					<h3>유지보수의 용이성</h3>
					<p>
						재사용성이 올라감으로써 유지보수가 용이해진다.
					</p>
				</section>

				<section class='card'>
					<h3>추가 기능에 대한 대응</h3>
					<p>
						추가 기능에 대한 대응을 쉽게 할 수 있다.
					</p>
				</section>
				
			</section>
		</article>
	`;

	const section = template.content.cloneNode(true).firstElementChild;

	return section;
}

function Components() {
	const template = document.createElement('template');

	template.innerHTML = `
		<article id="components" class="page">
			${PageHeader('components').innerHTML}
			<h2>Components</h2>
			<section class="list">
				<ul>
					<h3>Button</h3>
					<li><a>Default</a></li>
				</ul>
				<ul>
					<h3>Container</h3>
					<li><a>Default</a></li>
				</ul>
			</section>
		</article>
	`;

	const section = template.content.cloneNode(true).firstElementChild;

	section.querySelector('.list').addEventListener('click', (e) => {
		e.preventDefault();
		const { target } = e;

		if (target.tagName !== 'A') return;

		const component = target.closest('ul').querySelector('h3').textContent;
		window.location.href = `?page=playground&&component=${component}&&type=${target.textContent}`;
		console.log(component);
	});

	return section;
}

function getSelectedElem() {
	const queryString = new URLSearchParams(window.location.search);
	const component = queryString.get('component');
	const type = queryString.get('type');

	return !component || !type
		? {
				exampleDomstring: '예제코드가 아직 작성되지 않았습니다.',
				descriptions: '',
		  }
		: Components$1[component][type];
}

function Playground() {
	const selectedElem = getSelectedElem();
	console.log(selectedElem);
	const { exampleDomstring, descriptions = '' } = selectedElem;

	const template = document.createElement('template');

	template.innerHTML = `
		<article id="playground" class="page">
			${PageHeader('playground').innerHTML}
			<h2>Playground</h2>
			<section id="playground-content" class="two-panel-container">
				<textarea class="code language-javascript" rows="5"></textarea>
				<div class="result"></div>
			</section>

			<section id="playground-description" class="description">
				<h3>Descriptions</h3>
				<div class="description-content">
					${descriptions}
				</div>
			</section>
		</article>
	`;

	const element = template.content.cloneNode(true).firstElementChild;

	const textarea = element.querySelector('.code.language-javascript');
	textarea.value = exampleDomstring.trim();

	const resultDiv = element.querySelector('.result');
	resultDiv.innerHTML = exampleDomstring.trim();

	textarea.addEventListener('input', () => {
		resultDiv.innerHTML = textarea.value;
	});

	return element;
}

var Pages = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Components: Components,
	Home: Home,
	Playground: Playground
});

const queryParams = new URLSearchParams(window.location.search);
const pageQuery = queryParams.get('page') || '/';

const root = document.getElementById('root');

const page = pageQuery === '/' ? 'Home' : pageQuery.replace('/', '').charAt(0).toUpperCase() + pageQuery.slice(1);
root.appendChild(Pages[page]());
// Components.log();
//# sourceMappingURL=main.js.map
