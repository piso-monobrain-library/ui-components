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
	console.log(selectedElem);
	const { exampleDomstring, descriptions = '' } = selectedElem;

	const template = document.createElement('template');

	template.innerHTML = `
		<article id="playground" class="page">
			${PageHeader('playground').innerHTML}
			<h2>Playground</h2>
			<section id="playground-content" class="two-panel-container">
				<textarea class="code language-javascript" rows="5"></textarea>
				<div class="result"></div>
			</section>

			<section id="playground-description" class="description">
				<h3>Descriptions</h3>
				<div class="description-content">
					${descriptions}
				</div>
			</section>
		</article>
	`;

	const element = template.content.cloneNode(true).firstElementChild;

	const textarea = element.querySelector('.code.language-javascript');
	textarea.value = exampleDomstring.trim();

	const resultDiv = element.querySelector('.result');
	resultDiv.innerHTML = exampleDomstring.trim();

	textarea.addEventListener('input', () => {
		resultDiv.innerHTML = textarea.value;
	});

	return element;
}
