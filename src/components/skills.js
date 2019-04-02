import React from 'react';

const skills = props => (
	<div className="skills">
		<h2>Skills</h2>
		<div className="skills-list">
			{props.skills.map(skill => {
				return (
					<div className="skill">
						<h4 className="skill__category">
							<i className={skill.icon} />
							{skill.category}
						</h4>
						<p className="skill__skills">{skill.skills}</p>
					</div>
				);
			})}
		</div>
	</div>
);

export default skills;
