import React from 'react';
import Project from './project';

const projects = props => (
	<div className="projects">
		<h2>Projects</h2>
		<div className="projects-list">
			{props.projects.map(project => (
				<Project project={project} />
			))}
		</div>
	</div>
);

export default projects;
