import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { VitePWA } from 'vite-plugin-pwa';
import { createHtmlPlugin } from 'vite-plugin-html';
import svgr from 'vite-plugin-svgr';

export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
		optimizeDeps: {
			exclude: ["firebase", "firebase/app", "firebase/auth", "firebase/firestore", "firebase/analytics"],
		},
		base: `/${process.env.VITE_APP_REPO}/`,
		plugins: [ 
			svgr({
				svgrOptions: {
					icon: true,
					replaceAttrValues: { '#000000': 'currentColor' , 'nonef': 'currentColor' },
				},
			}),
			react(),

			createHtmlPlugin({
				minify: true,
				/**
				 * After writing entry here, you will not need to add script tags in `index.html`, the original tags need to be deleted
				 * @default src/main.ts
				 */
				entry: 'src/main.tsx',
				/**
				 * If you want to store `index.html` in the specified folder, you can modify it, otherwise no configuration is required
				 * @default index.html
				 */
				// template: 'public/index.html',

				/**
				 * Data that needs to be injected into the index.html ejs template
				 */
				inject: {
					data: {
						title: `${process.env.VITE_APP_NAME}`,
						themeColorLight: `${process.env.VITE_APP_THEME_COLOR_LIGHT}`,
						themeColorDark: `${process.env.VITE_APP_THEME_COLOR_DARK}`,
					},
					// tags: [
					// 	{
					// 		injectTo: 'body-prepend', // body | body-prepend | head | head-prepend
					// 		tag: 'div',
					// 		attrs: {
					// 			id: 'tag',
					// 		},
					// 	},
					// ],
				},
			}),

			VitePWA({
				registerType: 'autoUpdate',
				devOptions: {
					enabled: false,
				},
				// workbox: {
				// 	globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
				// },
				manifest: {
					short_name: `${process.env.VITE_APP_NAME}`,
					name: `${process.env.VITE_APP_NAME}`,
					// scope: `${process.env.VITE_APP_REPO}`,
					scope: `.`,
					icons: [
						{
							src: 'assets/manifest-icon-192.maskable.png',
							sizes: '192x192',
							type: 'image/png',
							purpose: 'any',
						},
						{
							src: 'assets/manifest-icon-192.maskable.png',
							sizes: '192x192',
							type: 'image/png',
							purpose: 'maskable',
						},
						{
							src: 'assets/manifest-icon-512.maskable.png',
							sizes: '512x512',
							type: 'image/png',
							purpose: 'any',
						},
						{
							src: 'assets/manifest-icon-512.maskable.png',
							sizes: '512x512',
							type: 'image/png',
							purpose: 'maskable',
						},
					],
					start_url: './',
					display: 'standalone',
					theme_color: `${process.env.VITE_APP_THEME_COLOR_PRIMARY}`,
					background_color: `${process.env.VITE_APP_THEME_COLOR_BACKGROUND}`,
				},
			}),
		],

		resolve: {
			alias: {
				'@PAGES': path.resolve(__dirname, './src/pages'),
				'@SERVICES': path.resolve(__dirname, 'src/services'),
				'@UICOMPONENTS': path.resolve(__dirname, 'src/submodules/UIComponents/src/components'),
			},
		},
	});
};
