module.exports = {
	token:
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiNGYxYzdlNzAtN2E4Zi00N2VhLWI5MGMtZjNiNDAzODAwY2NkIn0.CVR8XadTGXBpWInlETdMrDeFQjvuCJOuYMD5cFDZ5JY',
	url: 'https://api-apeast.graphcms.com/v1/cjtv9r5o85d3l01dv6w58ahgg/master',
	query: `{
		bios {
			id
			name
			jobTitle
			github
			email
			image {
				id
				url
			}
		}
		educations {
			id
			institution
			qualification
			score
			yearCompleted
		}
		projects {
			id
			title
			description
			url
			image {
				id
				url
			}
		}
		skills {
			id
			category
			skills
			icon
		}
	}`
};
