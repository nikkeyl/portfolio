import { fontConverter } from './fontConverter.js'

const ttfToWoff2 = () =>
	fontConverter({
		taskName: 'ttfToWoff2',
		fileExt: 'ttf'
	})

export { ttfToWoff2 }
