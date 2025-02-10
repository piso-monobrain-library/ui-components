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
