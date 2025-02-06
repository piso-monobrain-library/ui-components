class Vset extends HTMLElement {
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
		this.style.cssText += styles[type];
	}

	static get exampleDomstring() {
		return `
		<div style="display: flex; flex-direction: row;	flex-wrap: wrap; gap: 1rem;">
			<btn-vset type="start">시작하기</btn-vset>
			<btn-vset type="restart">다시하기</btn-vset>
            <btn-vset type="begin">처음으로</btn-vset>
            <btn-vset type="next" aria-label="다음"></btn-vset>
            <btn-vset type="prev" aria-label="이전"></btn-vset>
		</div>`;
	}

	static get descriptions() {
		const descriptions = [
			//
			'html tag의 attribute를 활용해 스타일 지정할 수 있습니다. ex) <span class="code-block">&lt;custom-container type="primary"&gt</span>',
		];

		return `<ul class="list"">${descriptions.map((description) => `<li>${description}</li>`).join('')}</ul>`;
	}
}

const styles = {
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

customElements.define('btn-vset', Vset);

export default Vset;
