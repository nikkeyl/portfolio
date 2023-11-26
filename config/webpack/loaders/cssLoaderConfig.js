const cssLoaderConfig = ({
	endPath = '',
	importLoaders = 0,
	isSourceMap = false
} = {}) => {
	return {
		importLoaders,
		modules: false,
		sourceMap: isSourceMap,
		url: {
			filter: (url) => {
				!url.includes(`img${endPath}`) || !url.includes(`fonts${endPath}`);
			}
		}
	};
};

export default cssLoaderConfig;
