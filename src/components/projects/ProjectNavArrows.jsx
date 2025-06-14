import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import INFO from "../../data/user";

import "./styles/projectNavArrows.css";

/**
 * Affiche les flèches de navigation entre projets.
 * @param {string} currentTitle - Titre du projet courant (pour trouver l'index)
 */
const ProjectNavArrows = ({ currentTitle }) => {
	const projects = INFO.projects;
	const idx = projects.findIndex((p) => p.title === currentTitle);

	// Hooks toujours appelés, même si idx === -1
	const [showEasterEgg, setShowEasterEgg] = useState(false);

	useEffect(() => {
		if (idx === -1) return;
		// Récupérer la liste des projets visités
		let visited = [];
		try {
			visited = JSON.parse(
				localStorage.getItem("projectVisited") || "[]"
			);
		} catch {
			visited = [];
		}
		// Ajouter le projet courant si pas déjà dedans
		if (!visited.includes(projects[idx].title)) {
			visited.push(projects[idx].title);
		}
		// Si tous les projets ont été visités et qu'on boucle
		let tourCount = parseInt(
			localStorage.getItem("projectTourCount") || "0",
			10
		);
		let showEgg = false;
		if (
			visited.length === projects.length &&
			((localStorage.getItem("lastProjectNav") ===
				projects[projects.length - 1].title &&
				idx === 0) ||
				(localStorage.getItem("lastProjectNav") === projects[0].title &&
					idx === projects.length - 1))
		) {
			tourCount += 1;
			localStorage.setItem("projectTourCount", tourCount.toString());
			showEgg = true;
			visited = [];
		}
		localStorage.setItem("projectVisited", JSON.stringify(visited));
		localStorage.setItem("lastProjectNav", projects[idx]?.title);
		if (showEgg) {
			setShowEasterEgg(true);
			setTimeout(() => setShowEasterEgg(false), 4000);
		}
	}, [idx, projects]);

	if (idx === -1) return null;

	// Navigation circulaire
	const prev = projects[(idx - 1 + projects.length) % projects.length];
	const next = projects[(idx + 1) % projects.length];

	const toPage = (title) => {
		return "/projects/" + title.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
	};

	// Message marrant
	const funnyMessages = [
		"Bravo, you've completed the tour! 🥳",
		"Another round? 🚀",
		"Looking for a bug or just bored? 😏",
		"Can't get enough, huh? 😉",
		"It's the hamster wheel effect! 🐹",
	];
	const tourCount = parseInt(
		localStorage.getItem("projectTourCount") || "0",
		10
	);
	const message = funnyMessages[tourCount % funnyMessages.length];

	const handleNavClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="project-nav-arrows-wrapper">
			{showEasterEgg && (
				<div className="project-nav-easter-egg">{message}</div>
			)}
			<div className="project-nav-arrows">
				{projects.length > 1 && (
					<Link
						className="project-nav-arrow left"
						to={{
							pathname: toPage(prev.title),
							state: { direction: "prev" },
						}}
						state={{ direction: "prev" }}
						onClick={handleNavClick}
					>
						<FontAwesomeIcon icon={faChevronLeft} />
						<span className="project-nav-label">{prev.title}</span>
					</Link>
				)}
				{projects.length > 1 && (
					<Link
						className="project-nav-arrow right"
						to={{
							pathname: toPage(next.title),
							state: { direction: "next" },
						}}
						state={{ direction: "next" }}
						onClick={handleNavClick}
					>
						<span className="project-nav-label">{next.title}</span>
						<FontAwesomeIcon icon={faChevronRight} />
					</Link>
				)}
			</div>
		</div>
	);
};

export default ProjectNavArrows;
