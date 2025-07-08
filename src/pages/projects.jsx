import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import SEO from "../data/seo";
import SearchBar from "../components/projects/searchbar";

import "./styles/projects.css";

const projectRoutes = {
	"Prolific-Joiner": "/projects/prolific-joiner",
	Eosya: "/projects/eosya",
	Noticeable: "/projects/noticeable",
	"Nsigma Mobile App": "/projects/nsigma-mobile-app",
	"Nsigma Legal Documents RAG": "/projects/nsigma-legal-documents-rag",
	"Java Deca Compiler": "/projects/java-deca-compiler",
	"x86 OS Conception": "/projects/x86-os-conception",
};

function splitMatches(projects, query) {
	if (!query.trim()) return [projects, []];
	const q = query.toLowerCase();

	// Mot entier (regex \b pour délimiter le mot)
	const exact = projects.filter((p) =>
		[p.title, p.description, ...(p.tags || [])]
			.filter(Boolean)
			.some((field) => new RegExp(`\\b${q}\\b`, "i").test(field))
	);

	// Match partiel (mais pas déjà dans exact)
	const partial = projects.filter(
		(p) =>
			!exact.includes(p) &&
			[p.title, p.description, ...(p.tags || [])]
				.filter(Boolean)
				.some((field) => field.toLowerCase().includes(q))
	);

	return [exact, partial];
}

function highlightInText(text, query) {
	if (!query) return text;
	const regex = new RegExp(`(${query})`, "ig");
	return text.split(regex).map((part, i) =>
		regex.test(part) ? (
			<mark className="marker-highlight" key={i}>
				{part}
			</mark>
		) : (
			part
		)
	);
}

const AnimatedCard = ({ children, ...props }) => {
	const [appear, setAppear] = useState(true);
	useEffect(() => {
		const t = setTimeout(() => setAppear(false), 30);
		return () => clearTimeout(t);
	}, []);
	return (
		<div
			className={`project-card${appear ? " project-card-appear" : ""}`}
			{...props}
		>
			{children}
		</div>
	);
};

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const navigate = useNavigate();
	const currentSEO = SEO.find((item) => item.page === "projects");

	const parseDate = (d) => {
		if (!d) return 0;
		if (/^\d{4}$/.test(d)) return new Date(`${d}-01-01`).getTime();
		return new Date(d).getTime();
	};
	const allProjects = INFO.projects
		.filter((p) => p.type === "pro" || p.type === "school")
		.sort((a, b) => parseDate(b.date) - parseDate(a.date));
	const [search, setSearch] = useState("");

	const [exactMatches, partialMatches] = splitMatches(allProjects, search);
	const filteredProjects = [...exactMatches, ...partialMatches];

	const handleEnter = (project) => {
		navigate(projectRoutes[project.title] || "/projects");
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={56} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Building real things, not just code.
						</div>
						<div
							className="projects-intro"
							style={{
								fontSize: 20,
								color: "var(--secondary-color)",
								margin: "16px 0 18px 0",
								fontStyle: "italic",
							}}
						>
							Explore my most impactful projects. Click on any
							card to discover the story, the challenges, and the
							technologies behind each adventure!
						</div>
						<div
							style={{
								textAlign: "center",
								color: "var(--secondary-color)",
								marginBottom: 8,
								fontSize: 16,
							}}
						>
							Use the search bar below to filter by technology,
							framework, or keyword. Results will appear
							instantly, or browse all projects below!
						</div>
						<SearchBar
							projects={allProjects}
							placeholder="What are you looking for? React, AI, coffee...?"
							onChange={setSearch}
							filteredProjects={filteredProjects}
							onEnter={handleEnter}
						/>
						<div
							className="projects-list"
							style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "32px",
								justifyContent: "center",
							}}
						>
							{filteredProjects.length === 0 ? (
								<div
									style={{
										color: "#bdbdbd",
										fontSize: 18,
										marginTop: 32,
									}}
								>
									No project found.
								</div>
							) : (
								filteredProjects.map((project, idx) => (
									<Link
										key={idx}
										to={
											projectRoutes[project.title] ||
											"/projects"
										}
										style={{
											textDecoration: "none",
											color: "inherit",
										}}
										onClick={() => window.scrollTo(0, 0)}
									>
										<AnimatedCard>
											{project.image && (
												<img
													src={project.image}
													alt={project.title}
													className="project-card-image"
												/>
											)}
											<div className="project-card-content">
												<h3 className="project-card-title">
													{highlightInText(
														project.title,
														search
													)}
												</h3>
												<div className="project-card-date">
													{project.date}
												</div>
												{project.tagline && (
													<div className="project-card-tagline">
														{highlightInText(
															project.tagline,
															search
														)}
													</div>
												)}
												<div className="project-card-description">
													{highlightInText(
														project.description,
														search
													)}
												</div>
												<div className="project-card-btn">
													Learn more →
												</div>
											</div>
										</AnimatedCard>
									</Link>
								))
							)}
						</div>
					</div>
				</div>
				<div className="page-footer">
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
