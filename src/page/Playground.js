import PageHeader from '../component/PageHeader.js';
import * as Components from '../component/index.js';



function getSelectedElem() {
	const queryString = new URLSearchParams(window.location.search);
	const component = queryString.get('component');
	const type = queryString.get('type');

	return !component || !type
		? {
				exampleDomstring: '예제코드가 아직 작성되지 않았습니다.',
				descriptions: '',
		  }
		: Components[component][type];
}
export default function Playground() {
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
	const tmp = hljs.highlight(exampleDomstring.trim(), { language: 'javascript' }).value

	$code.innerHTML = tmp

	const resultDiv = element.querySelector('.result');
	resultDiv.innerHTML = exampleDomstring.trim();

	const $descriptionContent = element.querySelector('.description-content');
	
	const allDescriptions = descriptions
	if(allDescriptions){
		$descriptionContent.innerHTML = `<ul class="list">${descriptions.map((description) => `<li>${hljs.highlight(description, { language: 'html' }).value}</li>`).join('')}</ul>`;
	}else{
		const components = Object.entries(Components).map(([component, variants]) => [component, variants]);

		const descriptions = components.map(([component, variants]) => ({component, variants: Object.entries(variants)}));
		const res = descriptions.map(({component, variants})=>({component, variants: variants.map(([name, variant])=>({name, descriptions: variant.descriptions}))}))
		$descriptionContent.innerHTML = res.map(({component, variants})=>`
			<h4><b style="color: var(--secondary-color);">${component}</b></h4>
			<ul class="list" style="border:solid 0.1rem var(--primary-color); padding:1rem; border-radius:1rem;">${variants.map(({name, descriptions = []}) => `
				<h5><b>${name}</b></h5>

			${descriptions.map(description => `<li>${hljs.highlight(description, { language: 'html' }).value}</li>`).join('')}`).join('')}</ul>

		`).join('')
	}

	$code.addEventListener('input', () => {
		resultDiv.innerHTML = $code.textContent;
	});


	return element;
}
