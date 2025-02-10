import PageHeader from '../component/PageHeader.js';

export default function Home() {
	const template = document.createElement('template');

	template.innerHTML = `
		<article id="simulator" class="page">
			${PageHeader('simulator').innerHTML}
			<h2>Simulator</h2>

            <section class="list">
                <h3>순수 HTML CSS 사용시</h3>
                <section id="playground-content" class="two-panel-container">
                    <pre class="code-content origin"><code class="language-javascript" contenteditable="true"></code></pre>
                    <div class="result"></div>
                </section>
            </section>

            <section class="list">
                <h3>사용자 정의 태그 사용시</h3>
                <section id="playground-content" class="two-panel-container">
                    <pre class="code-content web-component"><code class="language-javascript" contenteditable="true"></code></pre>
                    <div class="result"></div>
                </section>
            </section>
		</article>
	`;

	const section = template.content.cloneNode(true).firstElementChild;

    let $origin = section.querySelector('pre.code-content.origin code');
    let str = `
<style>
    .wraaper{
        background-color: slategrey;
        display: block;
        padding: 1rem;
        height: 100%;
        width: 100%;
    }

    .title{
        color: gold;
    }

    .description{
        color: darkgreen;
        line-height: 1.5;
    }
</style>
<div class="wraaper">
    <h1 class="title">

        타이틀
    </h1>
    <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    </p>
</div>
    `
    $origin.innerHTML = hljs.highlight(str.trim(), { language: 'javascript' }).value;
    let $result = section.querySelector('pre.code-content.origin + .result');
    $result.innerHTML = str.trim();

    $origin = section.querySelector('pre.code-content.web-component code');
    str = `
<style>
    .wraaper{
        background-color: slategrey;
        display: block;
        padding: 1rem;
        height: 100%;
        width: 100%;
    }

    .wrapper > * {
        background: none;
    }

    .title{
        color: gold;
    }

    .description{
        color: darkgreen;
        line-height: 1.5;
    }
</style>
<custom-container class="wraaper">
    <h1 class="title">
        타이틀
    </h1>
    <custom-container type="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    </custom-container>
</custom-container>
    `
    $origin.innerHTML = hljs.highlight(str.trim(), { language: 'javascript' }).value;
    $result = section.querySelector('pre.code-content.web-component + .result');
    section.querySelector('pre.code-content.web-component + .result').innerHTML = str.trim();

    return section;
}
