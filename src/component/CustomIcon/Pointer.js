export default class Pointer extends HTMLElement {
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

	initStyle() {
		this.style.cssText = ``;
	}

	/* btn_icon_gamestart */

	/* 시작하기 */

	setStyle() {
		const type = this.getAttribute('type');
		if (!type) return;
		this.style.cssText += Vset.styles[type];
	}

	static get exampleDomstring() {
		return `<custom-icon-pointer-icon></custom-icon-pointer-icon>`;
	}

	static get descriptions() {
		return [
			//
			'html tag의 attribute를 활용해 스타일 지정할 수 있습니다. ex) <span class="code-block">&lt;custom-container type="primary"&gt</span>',
		];

	}

	static get styles() {
		return {};
	}

	static get defaultDOMString() {
		return '<custom-icon>예제</custom-icon>';
	}

	static get styledDOMString() {
		return Object.keys(Vset.styles)
			.map((type) => `<custom-icon-pointer type="${type}"></custom-icon-pointer>`)
			.join('');
	}
}

customElements.define('custom-icon-pointer', Pointer);
