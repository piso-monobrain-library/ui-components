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
			'다양한 스타일을 적용할 수 있습니다: <span class="code-block">&lt;custom-container type="secondary"&gt</span>',
			'성공 메시지를 나타내기 위해 사용할 수 있습니다: <span class="code-block">&lt;custom-container type="success"&gt</span>',
			'위험 메시지를 나타내기 위해 사용할 수 있습니다: <span class="code-block">&lt;custom-container type="danger"&gt</span>',
		];

		return `<ul class="list"">${descriptions.map((description) => `<li>${description}</li>`).join('')}</ul>`;
	}
}

customElements.define('custom-container', Default);

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

export { Default };
