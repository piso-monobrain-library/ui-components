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

}

customElements.define('custom-button', Default);

export { Default, Vset };
