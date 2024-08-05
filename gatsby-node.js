const path = require('path');
const fs = require('fs');

exports.createPages = async ({ actions }) => {
	const { createPage } = actions;
	
	const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'src/assets/data.json')));
	data.destinations.forEach(destination => {
		createPage({
			path: `/destination/${destination.name.toLowerCase()}`,
			component: path.resolve('./src/pages/destination.js'),
			context: {
				destination,
			},
		});
	});
};
