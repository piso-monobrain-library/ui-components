export default function PageHeader(currentPage = 'home') {
	const template = document.createElement('template');

	const links = ['components', 'playground'];

	template.innerHTML = `
		<header id="page-header">
			<h1>
                <a href="/" class="${currentPage === 'home' ? 'active' : ''}">
                    MONO
                </a>
            </h1>
            <nav style="border-bottom: 0.1rem solid var(--primary-color); display: flex; flex-direction: row; gap: 1rem;">
                ${links
					.map(
						(link) => `<a class="${currentPage === link ? 'active' : ''}" href="?page=${link}">${link}</a>`
					)
					.join('')}
            </nav>
		</header>
	`;

	return template.content.cloneNode(true).firstElementChild;
}
