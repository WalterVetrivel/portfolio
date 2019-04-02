import React from 'react';
import Education from './education';

const educationContainer = props => (
	<div className="education-container">
		<h2>Education</h2>
		<div className="education-list">
			{props.education.map(education => (
				<Education key={education.qualification} education={education} />
			))}
		</div>
	</div>
);

export default educationContainer;
