import React from 'react';

const project = props => (
	<div className="project">
		<img
			src={props.project.image.url}
			alt={props.project.title}
			className="project__image"
		/>
		<div className="project__body">
			<div className="project__details">
				<h3 className="project__title">{props.project.title}</h3>
				<p className="project__description">{props.project.description}</p>
			</div>
			<p className="text-right">
				<a
					href={props.project.url}
					target="_blank"
					rel="noopener noreferrer"
					className="project__link">
					Live Demo
				</a>
			</p>
		</div>
	</div>
);

export default project;
