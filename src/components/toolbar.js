import React from 'react';

const toolbar = props => (
	<nav className="toolbar">
		<div className="toolbar__logo">
			<i className="fas fa-home" />
		</div>
		<button className="toolbar__toggle" onClick={props.onClick}>
			<span />
			<span />
			<span />
		</button>
		<div
			className={props.showLinks ? `toolbar__links--show` : `toolbar__links`}>
			<a
				className="toolbar__link toolbar__email"
				href={`mailto:${props.bio.email}`}
				target="_blank"
				rel="noopener noreferrer">
				<i className="far fa-envelope" />
				{props.bio.email}
			</a>
			<a
				className="toolbar__link toolbar__github"
				href={props.bio.github}
				target="_blank"
				rel="noopener noreferrer">
				<i className="fab fa-github" />
				Github
			</a>
		</div>
	</nav>
);

export default toolbar;
