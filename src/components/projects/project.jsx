import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import * as DevIcons from "devicons-react";
import "./styles/project.css";

// Mapping des titres de projets vers leurs routes internes
const projectRoutes = {
	"Prolific-Joiner": "/projects/prolific-joiner",
	Eosya: "/projects/eosya",
	Noticeable: "/projects/noticeable",
	"Nsigma Mobile App": "/projects/nsigma-mobile-app",
	"Nsigma Legal Documents RAG": "/projects/nsigma-legal-documents-rag",
	"Java Deca Compiler": "/projects/java-deca-compiler",
	"x86 OS Conception": "/projects/x86-os-conception",
	"Bloom Filter": "/projects/bloom-filter",
};

const Project = (props) => {
	const { tech, title, description, linkText, link, date } = props;

	const isPrivate = link === "#";
	const projectRoute = projectRoutes[title] || "/projects";

	const handleLinkClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (isPrivate) {
			return; // Ne rien faire pour les projets privés
		}
		// Le lien externe s'ouvrira dans un nouvel onglet
		window.open(link, "_blank", "noopener,noreferrer");
	};

	const handleCardClick = () => {
		// Scroll vers le haut de la page après le clic sur la carte
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<React.Fragment>
			<Link
				to={projectRoute}
				className="project"
				style={{ textDecoration: "none", color: "inherit" }}
				onClick={handleCardClick}
			>
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
										key={idx}
										style={{
											display: "flex",
											gap: 6,
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										{IconComponent ? (
											<IconComponent
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
					<div
						className="project-link"
						onClick={handleLinkClick}
						style={{
							cursor: isPrivate ? "default" : "pointer",
							opacity: isPrivate ? 0.6 : 1,
						}}
					>
						<div className="project-link-icon">
							<FontAwesomeIcon icon={faLink} />
						</div>
						<div className="project-link-text">{linkText}</div>
					</div>
				</div>
			</Link>
		</React.Fragment>
	);
};

export default Project;
