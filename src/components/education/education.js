import React from 'react';

const education = props => (
	<div className="education">
		<h3 className="education__qualification">
			<i class="fas fa-user-graduate" />
			{props.education.qualification}
		</h3>
		<small className="education__year">
			<b>Completed in:</b> <span>{props.education.yearCompleted}</span>
		</small>
		<p className="education__institution">
			<i class="fas fa-university" />
			{props.education.institution}
		</p>
		<p className="education__score">
			Score: <span>{props.education.score}</span>
		</p>
	</div>
);

export default education;
