import PageHeader from '../component/PageHeader.js';

export default function Home() {
	const template = document.createElement('template');

	template.innerHTML = `
		<article id="home" class="page">
			${PageHeader().innerHTML}
			<h2 style="    position: relative; z-index: 100;">사용자 정의 태그를 사용할 때의 이점</h2>
			<section class="list" style="flex-direction:row; justify-content:center; flex-wrap:wrap; gap:1rem; padding-top:1.5rem;">

				<section class='card'>
					<h3>작업자의 특성</h3>
					<p>
						<b>html</b>,
						<b>js</b>,
						<b>css</b>,
						low-level의 퍼블리셔도 이해할 수 있는 수준의 언어로 작성할 수 있다.
					</p>
				</section>

				<section class='card'>
					<h3>유지보수의 용이성</h3>
					<p>
						재사용성이 올라감으로써 유지보수가 용이해진다.
					</p>
				</section>

				<section class='card'>
					<h3>추가 기능에 대한 대응</h3>
					<p>
						추가 기능에 대한 대응을 쉽게 할 수 있다.
					</p>
				</section>
				
			</section>
		</article>
	`;

	const section = template.content.cloneNode(true).firstElementChild;

	return section;
}
