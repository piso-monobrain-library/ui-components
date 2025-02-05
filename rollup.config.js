import html from 'rollup-plugin-html';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

export default {
	input: 'src/main.js', // 진입점 파일
	output: {
		dir: 'dist',
		format: 'es',
		sourcemap: false,
		preserveModules: false,
	},
	plugins: [
		postcss(), // CSS 파일 처리
		html({
			fileName: 'index.html', // 출력할 HTML 파일 이름
			template: 'src/index.html', // HTML 템플릿 파일 추가
		}),
		copy({
			targets: [
				{ src: 'style.css', dest: 'dist' }, // style.css 복사
				{ src: 'src/**/*', dest: 'dist' }, // src 폴더의 모든 파일 복사
			],
		}),
	],
};
