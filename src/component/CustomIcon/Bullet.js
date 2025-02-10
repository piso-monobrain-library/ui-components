const tagName = 'custom-bullet';
export default class Bullet extends HTMLElement {
	constructor() {
		super();

		this.initStyle();
		this.setStyle();
	}

	initStyle() {
		const circleSize = this.getAttribute('circle-size') ?? '1rem';
		const backgroundColor = this.getAttribute('background-color');
		const color = this.getAttribute('color');

		this.style.cssText =`
			display: inline-flex;
			justify-content: center;
			align-items: center;
			min-width: ${circleSize};
			min-height: ${circleSize};
			max-width: ${circleSize};
			max-height: ${circleSize};
			line-height: calc(${circleSize} + 0.5rem);
			border-radius: 50%;
			${backgroundColor ? `background-color: ${backgroundColor};` : ''}
			${color ? `color: ${color};` : ''}
		`;
	}


	setStyle() {
		const type = this.getAttribute('type');
		if (!type) return;
		this.style.cssText += Bullet.styles[type];
	}


	static get exampleDomstring() {
		return `
<style>
	${tagName} {
		background-color: #000;
		color: #fff;
	}
</style>
<div style="padding: 1rem;">
<${tagName} circle-size="2rem">1</${tagName}>
<${tagName} circle-size="2rem">2</${tagName}>
<${tagName} circle-size="2rem">3</${tagName}>
<${tagName} circle-size="2rem">예</${tagName}>
</div>

<div style="padding: 1rem;">
<${tagName} circle-size="2rem" type="rounded" 
	background-color="rgb(124, 27, 124)" color="#fff">1</${tagName}>
<${tagName} circle-size="2rem" type="rounded" 
	background-color="rgb(144, 27, 124)" color="#fff">2</${tagName}>
<${tagName} circle-size="2rem" type="rounded" 
	background-color="rgb(184, 27, 124)" color="#fff">3</${tagName}>
<${tagName} circle-size="2rem" type="rounded" 
	background-color="rgb(200, 27, 124)" color="#fff">예</${tagName}>
</div>
`;



	}

	static get descriptions() {
		return [
			//
		];

	}

	static get defaultDOMString() {
		return `<${tagName}>예</${tagName}>`;
	}

	static get styles() {
		return {
			rounded: `
				border-radius: 0.5rem;
			`,	
			circle: `
				border-radius: 50%;
			`,
		}
	}


	static get styledDOMString() {
		return Object.keys(Bullet.styles)
			.map((type) => `<${tagName} type="${type}" circle-size="2rem" background-color="rgb(124, 27, 124)" color="#fff">예</${tagName}>`)
			.join('');

	}
}

customElements.define(tagName, Bullet);
