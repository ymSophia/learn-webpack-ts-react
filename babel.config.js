module.exports = (api) => {
	api.cache(true);

	const presets = ['@babel/preset-typescript'];
	const plugins = [];

	return {
		presets,
		plugins,
	};
};
