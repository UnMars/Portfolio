import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faFile } from "@fortawesome/free-solid-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";
import Education from "../components/homepage/education";
import Ctfs from "../components/homepage/ctfs";

import INFO from "../data/user";
import SEO from "../data/seo";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import "./styles/homepage.css";

const INITIAL_LOGO_SIZE = 140;
const MIN_LOGO_SIZE = 56;

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(INITIAL_LOGO_SIZE);
	const [waveOnLoad, setWaveOnLoad] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
		// Déclenche l'animation wave au chargement
		setWaveOnLoad(true);
		const timeout = setTimeout(() => setWaveOnLoad(false), 1400);
		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scroll = window.scrollY;
			let newLogoSize = INITIAL_LOGO_SIZE - (scroll * 6) / 10;
			if (newLogoSize < MIN_LOGO_SIZE) {
				newLogoSize = MIN_LOGO_SIZE;
				setStayLogo(true);
			} else {
				setStayLogo(false);
			}
			setLogoSize(newLogoSize);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
		transition:
			"box-shadow 0.3s cubic-bezier(0.4,0,0.2,1), border 0.3s cubic-bezier(0.4,0,0.2,1)",
	};

	const parseDate = (d) => {
		// Si année seule, on prend 1er janvier
		if (!d) return 0;
		if (/^\d{4}$/.test(d)) return new Date(`${d}-01-01`).getTime();
		return new Date(d).getTime();
	};
	const professionalProjects = INFO.projects
		.filter((p) => p.type === "pro")
		.sort((a, b) => parseDate(b.date) - parseDate(a.date));
	const academicProjects = INFO.projects
		.filter((p) => p.type === "school")
		.sort((a, b) => parseDate(b.date) - parseDate(a.date));

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo
								width={logoSize}
								height={logoSize}
								link={false}
							/>
						</div>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								marginLeft: 24,
								fontSize: 28,
								fontWeight: 600,
								color: "#222",
							}}
						>
							Hi, I'm Guillaume{" "}
							<span
								className={`wave-hand${
									waveOnLoad ? " wave-hand-animate" : ""
								}`}
								style={{ fontSize: 28, marginLeft: 8 }}
							>
								👋
							</span>
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>
								<div
									className="homepage-secondary-subtitle"
									style={{
										fontStyle: "italic",
										color: "var(--secondary-color)",
										fontSize: 18,
										marginTop: 8,
										marginBottom: 8,
									}}
								>
									Building real things, not just code.
								</div>

								<div
									className="subtitle homepage-subtitle"
									dangerouslySetInnerHTML={{
										__html: INFO.homepage.description,
									}}
								/>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										{/* <DotLottieReact
											src="homepage.lottie"
											loop
											autoplay
											speed={0.5}
											style={{
												width: "100%",
												height: "auto",
												maxWidth: 320,
												minWidth: 120,
											}}
										/> */}
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faEnvelope}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.main.resume_url}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faFile}
									className="homepage-social-icon"
								/>
							</a>
							<div
								className="resume-hint marker-highlight"
								role="note"
								aria-label="Resume link"
							>
								<span
									className="resume-hint-emoji"
									aria-hidden="true"
								>
									👀
								</span>
								<span className="resume-hint-text">
									Resume here
								</span>
							</div>
						</div>

						<div className="homepage-projects">
							<h2 style={{ marginBottom: 8 }}>
								<span className="marker-highlight">
									Professional Projects
								</span>
							</h2>
							<AllProjects projects={professionalProjects} />
							<h2 style={{ margin: "32px 0 8px 0" }}>
								<span className="marker-highlight">
									Academic & Other Projects
								</span>
							</h2>
							<AllProjects projects={academicProjects} />
						</div>

						<div className="homepage-after-title">
							<div className="homepage-articles">
								<Education />
							</div>

							<div className="homepage-works">
								<Works />
							</div>

							<div className="homepage-ctfs">
								<Ctfs />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
