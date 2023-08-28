import { fontConverter } from './fontConverter.js'

const otfToTtf = () =>
	fontConverter({
		taskName: 'otfToTtf',
		fileExt: 'otf'
	})

export { otfToTtf }
