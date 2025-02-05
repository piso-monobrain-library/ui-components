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

export { Default };
