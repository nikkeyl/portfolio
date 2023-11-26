const replaceLoaderConfig = ({ startPath = '' } = {}) => {
	return {
		flags: 'g',
		replace: `${startPath}img`,
		search: '@img'
	};
};

export default replaceLoaderConfig;
