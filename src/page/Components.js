import PageHeader from '../component/PageHeader.js';
import * as CustomComponents from '../component/index.js';

export default function Components() {
	const template = document.createElement('template');

	const components = Object.entries(CustomComponents).map(([component, varints]) => ({
		component,
		variants: Object.entries(varints).map(([type, variant]) => ({ type, variant })),
	}));

	template.innerHTML = `
		<article id="components" class="page">
			${PageHeader('components').innerHTML}
			<h2>Components</h2>
			<section class="interaction list">
				${
					// prettier-ignore
					components.map(
						({ component, variants }) =>
							`<ul class="list" style="gap:0.5rem;">
								<h3>${component}</h3>
								${variants.map(
									({ type, variant }) =>
										`<li style="
												display: flex; 
												gap: 1rem; 
												border:2px solid var(--primary-color);
												border-radius: 0.5rem;
												padding: 1rem 0.5rem;
												">
											<h4 style="font-size:1.2rem; font-weight:bold; color:var(--secondary-color);">${type}</h4>
											<a data-component="${component}" data-type="${type}">${variant.styledDOMString ?? variant.defaultDOMString ?? 'No defaultDOMString'}</a>
										</li>`).join('')}</ul>`).join('')
				}
			</section>
		</article>
	`;

	const section = template.content.cloneNode(true).firstElementChild;

	section.querySelector('.interaction').addEventListener('click', (e) => {
		e.preventDefault();
		const target = e.target.closest('a');

		if (target.tagName !== 'A') return;

		const { component, type } = target.dataset;
		window.location.href = `?page=playground&&component=${component}&&type=${type}`;
	});

	return section;
}
