import { variableFontRegex } from '../../helpers/regExpList.js'

// no spaces between @font-face {} declarations
const fontFaceTemplate = (fileName, fontFamily, fontWeight, fontStyle) => {
	return variableFontRegex.test(fileName)
		? `@font-face {\n\tsrc: url("../fonts/${fileName}.woff2") format("woff2") tech("variations");\n\tfont-family: "${fontFamily}";\n\tfont-weight: 1 1000;\n\tfont-display: swap;\n}\n`
		: `@font-face {\n\tsrc: url("../fonts/${fileName}.woff2") format("woff2");\n\tfont-family: "${fontFamily}";\n\tfont-weight: ${fontWeight};\n\tfont-style: ${fontStyle};\n\tfont-display: swap;\n}\n`
}

export { fontFaceTemplate }
