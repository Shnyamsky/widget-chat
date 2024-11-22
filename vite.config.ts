import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

export default defineConfig({
	plugins: [svelte()],
	build: {
		outDir: 'build'
	},
	resolve: {
		alias: {
			$assets: path.resolve(__dirname, './src/assets'),
			$components: path.resolve(__dirname, './src/components'),
			$screens: path.resolve(__dirname, './src/screens'),
			$shared: path.resolve(__dirname, './src/shared'),
			$store: path.resolve(__dirname, './src/store'),
			$styles: path.resolve(__dirname, './src/styles')
		}
	}
})
