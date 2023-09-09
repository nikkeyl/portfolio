import { fontConverter } from './fontConverter.js'

const otfToTtf = () => {
	return fontConverter({
		taskName: 'otfToTtf',
		fileExt: 'otf'
	})
}

export { otfToTtf }
