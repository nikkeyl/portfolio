import { fontConverter } from './fontConverter.js'

const otfToTtf = () =>
	fontConverter({
		taskName: 'otfToTtf',
		fontExt: 'otf'
	})

export { otfToTtf }
