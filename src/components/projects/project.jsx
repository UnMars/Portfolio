import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import * as DevIcons from "devicons-react";
import "./styles/project.css";

const Project = (props) => {
	const { tech, title, description, linkText, link, date } = props;

	const isPrivate = link === "#";
	return (
		<React.Fragment>
			<div
				className="project"
				style={isPrivate ? { cursor: "default" } : {}}
			>
				{isPrivate ? (
					<div className="project-container">
						<div className="project-logo-container">
							{tech &&
								Array.isArray(tech) &&
								tech.length > 0 &&
								tech.map((t, idx) => {
									const IconComponent = DevIcons[t.icon];
									return (
										<div
											className="project-logo"
											style={{
												display: "flex",
												gap: 6,
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											{IconComponent ? (
												<IconComponent
													key={idx}
													title={t.label}
													size="32"
												/>
											) : null}
										</div>
									);
								})}
						</div>
						<div className="project-title">{title}</div>
						<div className="project-date">{date}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				) : (
					<Link to={link} style={{ cursor: "pointer" }}>
						<div className="project-container">
							<div className="project-logo-container">
								{tech &&
									Array.isArray(tech) &&
									tech.length > 0 &&
									tech.map((t, idx) => {
										const IconComponent = DevIcons[t.icon];
										return (
											<div
												className="project-logo"
												style={{
													display: "flex",
													gap: 6,
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												{IconComponent ? (
													<IconComponent
														key={idx}
														title={t.label}
														size="32"
													/>
												) : null}
											</div>
										);
									})}
							</div>
							<div className="project-title">{title}</div>
							<div className="project-date">{date}</div>
							<div className="project-description">
								{description}
							</div>
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>
								<div className="project-link-text">
									{linkText}
								</div>
							</div>
						</div>
					</Link>
				)}
			</div>
		</React.Fragment>
	);
};

export default Project;
