import projectConfig from './project.config.js';

const { lang } = projectConfig;

const typografConfig = {
	locale: lang === 'ru' ? ['ru', 'en-US'] : ['en-US'],
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
};

export default typografConfig;
