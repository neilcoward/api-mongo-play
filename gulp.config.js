module.exports = function() {
	var config = {
		// all js to vet
		alljs: [
			'./src/server/**/*.js',
			'./*.js',
			'./src/server/*.js',
			'!./{node_modules,node_modules/**}'
		],

		nodeConfig: {
			script: './src/server/app.js',
			ext: 'js',
			env: {
				PORT:8000
			},
			igrore: ['./node_modules/**']
		}
	};

	return config;
};
