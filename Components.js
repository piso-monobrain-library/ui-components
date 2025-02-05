import PageHeader from '../component/PageHeader.js';

export default function Components() {
	const template = document.createElement('template');

	template.innerHTML = `
		<article id="components" class="page">
			${PageHeader('components').innerHTML}
			<h2>Components</h2>
			<section class="list">
				<ul>
					<h3>Button</h3>
					<li><a>Default</a></li>
				</ul>
				<ul>
					<h3>Container</h3>
					<li><a>Default</a></li>
				</ul>
			</section>
		</article>
	`;

	const section = template.content.cloneNode(true).firstElementChild;

	section.querySelector('.list').addEventListener('click', (e) => {
		e.preventDefault();
		const { target } = e;

		if (target.tagName !== 'A') return;

		const component = target.closest('ul').querySelector('h3').textContent;
		window.location.href = `?page=playground&&component=${component}&&type=${target.textContent}`;
		console.log(component);
	});

	return section;
}
