import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = ({ projects }) => {
	const data = projects || INFO.projects;
	return (
		<div className="all-projects-container">
			{data.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						tech={project.tech}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						date={project.date}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
