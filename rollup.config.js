import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import deletePlugin from 'rollup-plugin-delete';

export default {
	input: 'src/main.js', // 진입점 파일
	plugins: [
		deletePlugin({ targets: 'dist/*', hook: 'buildStart' }),
		postcss(), // CSS 파일 처리
		copy({
			targets: [
				{ src: 'src/style.css', dest: 'dist' }, // style.css 복사
				{ src: 'src/index.html', dest: 'dist' }, // src 폴더의 모든 파일 복사
				{ src: 'src/assets', dest: 'dist' }, // src 폴더의 모든 파일 복사
			],
		}),
	],
	output: {
		dir: 'dist',
		format: 'es',
		sourcemap: false,
		preserveModules: false,
	},
};
