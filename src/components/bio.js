import React from 'react';

const bio = props => (
	<div className="bio">
		<div className="bio__header">
			<img
				src={props.bio.image.url}
				alt="Walter Selvakumar"
				className="bio__image"
			/>
		</div>
		<div className="bio__body">
			<h2 className="bio__name">{props.bio.name}</h2>
			<h3 className="bio__job">{props.bio.jobTitle.toUpperCase()}</h3>
			<a
				className="bio__link bio__email"
				href={`mailto:${props.bio.email}`}
				target="_blank"
				rel="noopener noreferrer">
				<i className="far fa-envelope" />
				{props.bio.email}
			</a>
			<a
				className="bio__link bio__github"
				href={props.bio.github}
				target="_blank"
				rel="noopener noreferrer">
				<i className="fab fa-github" />
				Github
			</a>
		</div>
	</div>
);

export default bio;
