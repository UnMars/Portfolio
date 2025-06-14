import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	// Récupère la route courante
	const location = useLocation();
	const { active } = props;

	// Calcule l'onglet actif si non fourni
	const pathname = location.pathname;
	const computedActive = () => {
		if (pathname === "/") return "home";
		if (pathname.startsWith("/about")) return "about";
		if (pathname.startsWith("/projects")) return "projects";
		if (pathname.startsWith("/contact")) return "contact";
		return "";
	};

	const currentActive = active || computedActive();

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									currentActive === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									currentActive === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									currentActive === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									currentActive === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
