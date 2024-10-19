import nested from 'postcss-nested'
import customMedia from 'postcss-custom-media'
import autoprefixer from 'autoprefixer'
import postcssGlobalData from '@csstools/postcss-global-data'

const config = {
	plugins: [
		nested(),
		customMedia(),
		autoprefixer(),
		postcssGlobalData({ files: ['./src/app.pcss'] })
	]
}

export default config
