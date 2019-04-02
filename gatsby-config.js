const apiInfo = require('./api-config.js');
module.exports = {
	siteMetadata: {
		title: `Walter Vetrivel Selvakumar Portfolio`,
		description: `Portfolio Website for Walter Vetrivel Selvakumar.`,
		author: `Walter Vetrivel Selvakumar`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/logo.png`
			}
		},
		{
			resolve: `gatsby-source-graphcms`,
			options: {
				endpoint: apiInfo.url,
				token: apiInfo.token,
				query: apiInfo.query
			}
		}
	]
};
