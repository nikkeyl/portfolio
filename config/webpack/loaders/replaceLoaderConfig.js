const replaceLoaderConfig = (startPath) => ({
	search: '@img',
	replace: `${startPath}img`,
	flags: 'g'
})

export { replaceLoaderConfig }
