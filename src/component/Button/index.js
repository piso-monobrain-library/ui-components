import Vset from './Vset.js';

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
            width: 100px;
            height: 100px;
            display:block;
            background: url(./assets/test.png) no-repeat center center / contain;
        `;
	}

	static get exampleDomstring() {
		return `
            <btn-default>btn-default 예제 버튼</btn-default>
        `;
	}
}

customElements.define('btn-default', Default);

export { Default, Vset };
