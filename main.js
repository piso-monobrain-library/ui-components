function PageHeader(currentPage = 'home') {
	const template = document.createElement('template');

	const links = ['components', 'playground'];

	template.innerHTML = `
		<header id="page-header">
			<h1>
                <a href="/ui-components" class="${currentPage === 'home' ? 'active' : ''}">
                    Custom Components
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
			<h2 style="    position: relative; z-index: 100;">
			사용자 정의 태그를 사용할 때의 이점
				<blockquote class="quote">
					Custom Components는 사용자 정의 태그를 사용할 때의 이점을 제공합니다.
				</blockquote>
			</h2>
			<section class="list" style="flex-direction:row; justify-content:center; flex-wrap:wrap; gap:1rem; padding-top:3rem;">
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

let Vset$1 = class Vset extends HTMLElement {
	constructor() {
		super();
		this.textContent.trim() === '' ? '버튼 텍스트를 입력하세요.' : this.textContent;

		// button으로
		this.setAttribute('role', 'button');
		this.setAttribute('aria-label', this.getAttribute('aria-label') || this.textContent.trim());

		this.clickable();

		this.initStyle();
		this.setStyle();
	}

	clickable() {
		if (this.getAttribute('clickable') === 'true')
			this.addEventListener('click', () => {
				console.log('sound를 등록하자');
			});
	}

	initStyle() {
		this.style.cssText = `
			display: inline-block;
			cursor: pointer;
			color: white;
			text-shadow: 0px 0.2rem 0px #0B4F8E;
			font-family: "Noto Sans KR", serif;
			font-optical-sizing: auto;
			font-size: 1.875rem;
			font-weight: 700;
			font-style: normal;`;
	}

	/* btn_icon_gamestart */

	/* 시작하기 */

	setStyle() {
		const type = this.getAttribute('type');
		if (!type) return;
		this.style.cssText += Vset.styles[type];
	}

	static get exampleDomstring() {
		return `
<div style="display: flex; flex-direction: column;	flex-wrap: wrap; gap: 1rem;">
	<btn-vset type="start">시작하기</btn-vset>
	<btn-vset type="restart">다시하기</btn-vset>
	<btn-vset type="begin">처음으로</btn-vset>
	<btn-vset type="next" aria-label="다음"></btn-vset>
	<btn-vset type="prev" aria-label="이전"></btn-vset>
</div>`;
	}

	static get descriptions() {
		return  [
			//
			'스마트 학습자료 기술가정 시작하기 버튼: <btn-vset type="start">시작하기</btn-vset>',
			'스마트 학습자료 기술가정 다시하기 버튼: <btn-vset type="restart">다시하기</btn-vset>',
			'스마트 학습자료 기술가정 처음으로 버튼: <btn-vset type="begin">처음으로</btn-vset>',
			'스마트 학습자료 기술가정 다음 버튼: <btn-vset type="next" aria-label="다음"></btn-vset>',
			'스마트 학습자료 기술가정 이전 버튼: <btn-vset type="prev" aria-label="이전"></btn-vset>',
		];


	}

	static get styles() {
		return {
			start: `
			background: url(./assets/btn/start.png) no-repeat center center / contain;
			text-indent: 4.625rem;
			line-height: 4rem;
			width: 13.375rem;
			height: 4.75rem;`,
			restart: `
			background: url(./assets/btn/restart.png) no-repeat center center / contain;
			text-indent: 4.625rem;
			line-height: 4rem;
			width: 13.375rem;
			height: 4.75rem;`,
			begin: `
			background: url(./assets/btn/begin.png) no-repeat center center / contain;
			text-indent: 4.625rem;
			line-height: 4rem;
			width: 13.375rem;
			height: 4.75rem;`,
			next: `
			background: url(./assets/btn/next.png) no-repeat center center / contain;
			width: 3.125rem;
			height: 3.125rem;`,
			prev: `
			background: url(./assets/btn/prev.png) no-repeat center center / contain;
			width: 3.125rem;
			height: 3.125rem;`,
		};
	}

	static get defaultDOMString() {
		return '<btn-vset>예제</btn-vset>';
	}

	static get styledDOMString() {
		return Object.keys(Vset.styles)
			.map((type) => `<btn-vset type="${type}"></btn-vset>`)
			.join('');
	}
};

customElements.define('btn-vset', Vset$1);

let Default$2 = class Default extends HTMLElement {
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
            display:block;
        `;
	}

	static get exampleDomstring() {
		return `<custom-button>custom-button 예제 버튼</custom-button>`;
	}


	static get defaultDOMString() {
		return '<custom-button>기본 버튼</custom-button>';
	}

	static get descriptions() {
		return  [
			'과목 또는 프로젝트별로 버튼을 설정할 수 있습니다.',
			'사운드나, ios 대응 등에 있어 매번 대응할 필요없이 작성할 수 있습니다.',
			'기본 버튼위에 css 등으로 스타일을 적용할 수 있습니다. 다음 css텍스트를 위에 추가해보세요: <style>custom-button {border:1px solid red; color: red;}</style>' 
		];
	}

};

customElements.define('custom-button', Default$2);

var index$2 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Default: Default$2,
	Vset: Vset$1
});

let Default$1 = class Default extends HTMLElement {
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
		return [
			//
			'html tag의 attribute를 활용해 스타일 지정할 수 있습니다: <custom-container type="primary">',
			'다양한 스타일을 적용할 수 있습니다: <custom-container type="secondary">',
			'성공 메시지를 나타내기 위해 사용할 수 있습니다: <custom-container type="success">',
			'위험 메시지를 나타내기 위해 사용할 수 있습니다: <custom-container type="danger">',
		];

	}

	static get defaultDOMString() {
		return '<custom-container>기본 컨테이너</custom-container>';
	}
};

customElements.define('custom-container', Default$1);

const styles = {
	default: `
        padding: 1rem
    `,

	primary: `
        color: slategrey;
        background-color: black;
        padding: 1rem
    `,

	secondary: `
        color: black;
        background-color: lightgrey;
        padding: 1rem
    `,

	success: `
        color: white;
        background-color: green;
        padding: 1rem
    `,

	danger: `
        color: white;
        background-color: red;
        padding: 1rem
    `,
};

var index$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Default: Default$1
});

const tagName = 'custom-icon-circleno';
class CircleNo extends HTMLElement {
	constructor() {
		super();

		this.initStyle();
		this.setStyle();
	}

	initStyle() {
		this.style.cssText = `
		:host{
			background-color: red;
			display: inline-block;
			width: 100px;
			height: 100px;
			border-radius: 50%;
			position: relative;
			}
			
			:host::before {
				content: attr(data-no);
				display: flex;
				justify-content: center;
				align-items: center;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				color: white;
			}`;
	}

	setStyle() {
		const type = this.getAttribute('type');
		if (!type) return;
		this.style.cssText += Vset.styles[type];
	}

	static get exampleDomstring() {
		return `<${tagName} data-no="1"></${tagName}>`;
	}

	static get descriptions() {
		return [
			//
			'html tag의 attribute를 활용해 스타일 지정할 수 있습니다. ex) <span class="code-block">&lt;custom-container type="primary"&gt</span>',
		];

	}

	// static get styles() {
	// 	return {};
	// }

	static get defaultDOMString() {
		return `<${tagName} data-no="1">예제</${tagName}>`;
	}

	// static get styledDOMString() {
	// 	return Object.keys(CircleNo.styles)
	// 		.map((type) => `<${tagName} type="${type}"></${tagName}>`)
	// 		.join('');
	// }
}

customElements.define(tagName, CircleNo);

class Default extends HTMLElement {
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
            display:block;
        `;
	}

	static get exampleDomstring() {
		return `<custom-icon>custom-icon 예제 버튼</custom-icon>`;
	}

	static get defaultDOMString() {
		return '<custom-icon>Custom Icon</custom-icon>';
	}
}

customElements.define('custom-icon', Default);

var index = /*#__PURE__*/Object.freeze({
	__proto__: null,
	CircleNo: CircleNo,
	Default: Default
});

var Components$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Button: index$2,
	Container: index$1,
	Icon: index
});

function Components() {
	const template = document.createElement('template');

	const components = Object.entries(Components$1).map(([component, varints]) => ({
		component,
		variants: Object.entries(varints).map(([type, variant]) => ({ type, variant })),
	}));

	template.innerHTML = `
		<article id="components" class="page">
			${PageHeader('components').innerHTML}
			<h2>Components</h2>
			<section class="interaction list">
				${
					// prettier-ignore
					components.map(
						({ component, variants }) =>
							`<ul class="list" style="gap:0.5rem;">
								<h3>${component}</h3>
								${variants.map(
									({ type, variant }) =>
										`<li style="
												display: flex; 
												gap: 1rem; 
												border:2px solid var(--primary-color);
												border-radius: 0.5rem;
												padding: 1rem 0.5rem;
												">
											<h4 style="font-size:1.2rem; font-weight:bold; color:var(--secondary-color);">${type}</h4>
											<a data-component="${component}" data-type="${type}">${variant.styledDOMString ?? variant.defaultDOMString ?? 'No defaultDOMString'}</a>
										</li>`).join('')}</ul>`).join('')
				}
			</section>
		</article>
	`;

	const section = template.content.cloneNode(true).firstElementChild;

	section.querySelector('.interaction').addEventListener('click', (e) => {
		e.preventDefault();
		const target = e.target.closest('a');

		if (target.tagName !== 'A') return;

		const { component, type } = target.dataset;
		window.location.href = `?page=playground&&component=${component}&&type=${type}`;
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
	const { exampleDomstring, descriptions  } = selectedElem;

	const template = document.createElement('template');

	template.innerHTML = `
		<article id="playground" class="page">
			${PageHeader('playground').innerHTML}
			<h2>Playground</h2>
			<section id="playground-content" class="two-panel-container">
				<pre class="code-content"><code class="language-javascript" contenteditable="true"></code></pre>
				<div class="result"></div>
			</section>

			<section id="playground-description" class="description">
				<h3>Descriptions</h3>
				<div class="description-content">
					</ul>
				</div>
			</section>
		</article>
	`;

	const element = template.content.cloneNode(true).firstElementChild;

	const $code = element.querySelector('pre.code-content code');
	const tmp = hljs.highlight(exampleDomstring.trim(), { language: 'javascript' }).value;

	$code.innerHTML = tmp;

	const resultDiv = element.querySelector('.result');
	resultDiv.innerHTML = exampleDomstring.trim();

	const $descriptionContent = element.querySelector('.description-content');
	
	const allDescriptions = descriptions;
	if(allDescriptions){
		$descriptionContent.innerHTML = `<ul class="list">${descriptions.map((description) => `<li>${hljs.highlight(description, { language: 'html' }).value}</li>`).join('')}</ul>`;
	}else {
		const components = Object.entries(Components$1).map(([component, variants]) => [component, variants]);

		const descriptions = components.map(([component, variants]) => ({component, variants: Object.entries(variants)}));
		const res = descriptions.map(({component, variants})=>({component, variants: variants.map(([name, variant])=>({name, descriptions: variant.descriptions}))}));
		$descriptionContent.innerHTML = res.map(({component, variants})=>`
			<h4><b style="color: var(--secondary-color);">${component}</b></h4>
			<ul class="list" style="border:solid 0.1rem var(--primary-color); padding:1rem; border-radius:1rem;">${variants.map(({name, descriptions = []}) => `
				<h5><b>${name}</b></h5>

			${descriptions.map(description => `<li>${hljs.highlight(description, { language: 'html' }).value}</li>`).join('')}`).join('')}</ul>

		`).join('');
	}

	$code.addEventListener('input', () => {
		resultDiv.innerHTML = $code.textContent;
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
