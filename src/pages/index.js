import React from 'react';
import {graphql} from 'gatsby';
import SEO from '../components/seo';
import Toolbar from '../components/toolbar';
import Bio from '../components/bio';
import Education from '../components/education/educationContainer';
import Skills from '../components/skills';
import Projects from '../components/projects/projects';
import Footer from '../components/footer';

class IndexPage extends React.Component {
	state = {
		showLinks: false
	};

	onToggleToolbar = () => {
		this.setState(prevState => {
			return {showLinks: !prevState.showLinks};
		});
	};

	render() {
		const bio = this.props.data.allBio.edges[0].node;
		const education = this.props.data.allEducation.edges
			.map(({node}) => node)
			.reverse();
		const skills = this.props.data.allSkill.edges.map(({node}) => node);
		const projects = this.props.data.allProject.edges.map(({node}) => node);
		return (
			<>
				<SEO
					title="Walter Vetrivel Selvakumar"
					keywords={[`walter`, `web developer`, `portfolio`, `gatsby`, `react`]}
				/>
				<Toolbar
					bio={bio}
					onClick={this.onToggleToolbar}
					showLinks={this.state.showLinks}
				/>
				<main>
					<section className="content">
						<div className="side">
							<Bio bio={bio} />
						</div>
						<div className="details">
							<Education education={education} />
							<Skills skills={skills} />
						</div>
					</section>
					<section className="project-section">
						<Projects projects={projects} />
					</section>
				</main>
				<Footer />
			</>
		);
	}
}

export default IndexPage;

export const query = graphql`
	query {
		allBio {
			edges {
				node {
					name
					jobTitle
					github
					email
					image {
						url
					}
				}
			}
		}
		allEducation {
			edges {
				node {
					institution
					qualification
					score
					yearCompleted
				}
			}
		}
		allSkill {
			edges {
				node {
					category
					skills
					icon
				}
			}
		}
		allProject {
			edges {
				node {
					title
					description
					url
					image {
						url
					}
				}
			}
		}
	}
`;
