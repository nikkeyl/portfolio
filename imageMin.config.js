import projectConfig from './project.config.js';

const {
	images: { optimizationLevel }
} = projectConfig;

const imageMinConfig = {
	interlaced: true,
	optimizationLevel,
	svgoPlugins: [
		{
			removeViewBox: false
		}
	]
};

export default imageMinConfig;
