const typografConfig = {
	locale: ['ru', 'en-US'],
	enableRule: [
		'common/html/processingAttrs',
		'common/number/digitGrouping',
		'common/other/repeatWord',
		'common/other/replaceNbsp',
		'ru/other/accent',
		'ru/money/ruble'
	],
	setSetting: [
		'common/html/processingAttrs',
		'attrs',
		['alt', 'placeholder', 'title']
	]
}

export { typografConfig }
