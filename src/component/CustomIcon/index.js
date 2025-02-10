import Bullet from './Bullet.js';

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

export { Default, Bullet };
