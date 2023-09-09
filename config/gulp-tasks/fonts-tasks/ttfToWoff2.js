import { fontConverter } from './fontConverter.js'

const ttfToWoff2 = () => {
	return fontConverter({
		taskName: 'ttfToWoff2',
		fileExt: 'ttf'
	})
}

export { ttfToWoff2 }
