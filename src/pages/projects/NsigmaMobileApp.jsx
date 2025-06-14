import React from "react";
import NavBar from "../../components/common/navBar";
import Footer from "../../components/common/footer";
import Logo from "../../components/common/logo";
import "../styles/projects.css";
import { useHighlightQuery, Highlight } from "../../utils/Highlight";
import ProjectNavArrows from "../../components/projects/ProjectNavArrows";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const slideVariants = {
	enter: { x: 0, opacity: 1, position: "relative" },
	center: { x: 0, opacity: 1, position: "relative" },
	exit: { x: 0, opacity: 1, position: "relative" },
};

const NsigmaMobileApp = () => {
	const highlight = useHighlightQuery();
	const location = useLocation();
	const direction = location.state?.direction || "next";

	return (
		<div className="page-content">
			<NavBar />
			<div className="content-wrapper">
				<div className="projects-logo-container">
					<Logo width={56} />
				</div>
				<motion.div
					className="projects-container"
					key="nsigma-mobile-app"
					custom={direction}
					variants={slideVariants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
					style={{ position: "relative" }}
				>
					<h1 className="projects-title">
						<Highlight text="Nsigma Mobile App" query={highlight} />
					</h1>
					<div className="project-page-date">2024</div>
					<div className="subtitle projects-subtitle">
						<Highlight
							text="Internal cross-platform mobile app for Nsigma Junior-Enterprise. Connects students to mission offers in real time."
							query={highlight}
						/>
					</div>

					{/* Introduction */}
					<section style={{ margin: "32px 0" }}>
						<h2>
							<Highlight text="Introduction" query={highlight} />
						</h2>
						<p>
							The <b>Nsigma Mobile App</b> is a cross-platform
							application designed for the members of Nsigma
							Junior-Enterprise. Its main goal is to connect
							students with real-time mission offers, providing a
							seamless and modern user experience on both iOS and
							Android. The app leverages a secure backend and
							real-time notifications to maximize engagement and
							responsiveness.
						</p>
					</section>

					{/* Table of Contents */}
					<section style={{ margin: "32px 0" }}>
						<h2>
							<Highlight
								text="Table of Contents"
								query={highlight}
							/>
						</h2>
						<ol className="project-toc">
							<li>
								<a href="#project-context">Project Context</a>
							</li>
							<li>
								<a href="#features-stack">Stack & Features</a>
							</li>
							<li>
								<a href="#how-it-works">How It Works</a>
							</li>
							<li>
								<a href="#impact">Impact</a>
							</li>
							<li>
								<a href="#challenges-learnings">
									Challenges & Learnings
								</a>
							</li>
							<li>
								<a href="#conclusion">Conclusion</a>
							</li>
						</ol>
					</section>

					{/* Project Context */}
					<section id="project-context" style={{ margin: "32px 0" }}>
						<h2>
							<Highlight
								text="Project Context"
								query={highlight}
							/>
						</h2>
						<p>
							Nsigma, one of the top Junior-Enterprises in France,
							needed a modern solution to connect its students
							with mission opportunities in real time. The mobile
							app was designed to centralize offers, streamline
							communication, and boost engagement through instant
							notifications and a user-friendly interface. The
							project was developed as an internal tool, with a
							focus on security, scalability, and cross-platform
							compatibility.
						</p>
					</section>

					{/* Stack & Features */}
					<section id="features-stack" style={{ margin: "32px 0" }}>
						<h2>
							<Highlight
								text="Stack & Features"
								query={highlight}
							/>
						</h2>
						<ul>
							<li>
								<b>React Native & Expo:</b> Fast cross-platform
								development for iOS and Android, with 95% code
								reuse.
							</li>
							<li>
								<b>TypeScript:</b> Type safety and
								maintainability.
							</li>
							<li>
								<b>Supabase:</b> Secure backend with row-level
								security (RLS), real-time data sync, and
								authentication.
							</li>
							<li>
								<b>Push Notifications:</b> Real-time alerts for
								new mission offers and updates.
							</li>
							<li>
								<b>Modern UI/UX:</b> Clean, intuitive design for
								both mission browsing and user profile
								management.
							</li>
						</ul>
					</section>

					{/* Mockups - Home Page */}
					<section style={{ margin: "32px 0" }}>
						<h2>
							<Highlight
								text="Home Page Mockups"
								query={highlight}
							/>
						</h2>
						<div
							style={{
								display: "flex",
								gap: 32,
								flexWrap: "wrap",
								justifyContent: "center",
							}}
						>
							<div style={{ textAlign: "center" }}>
								<img
									src="/nsigma_mobile_app/homepage_front.png"
									alt="Home page mockup - front view"
									style={{
										maxWidth: 280,
										borderRadius: 12,
										width: "100%",
									}}
								/>
								<div
									style={{
										fontStyle: "italic",
										color: "#888",
										marginTop: 8,
									}}
								>
									Home page – front view
								</div>
							</div>
							<div style={{ textAlign: "center" }}>
								<img
									src="/nsigma_mobile_app/homepage_3d.png"
									alt="Home page mockup - 3D view"
									style={{
										maxWidth: 280,
										borderRadius: 12,

										width: "100%",
									}}
								/>
								<div
									style={{
										fontStyle: "italic",
										color: "#888",
										marginTop: 8,
									}}
								>
									Home page – 3D view
								</div>
							</div>
						</div>
					</section>

					{/* Mockups - Profile Page */}
					<section style={{ margin: "32px 0" }}>
						<h2>
							<Highlight
								text="Profile Page Mockups"
								query={highlight}
							/>
						</h2>
						<div
							style={{
								display: "flex",
								gap: 32,
								flexWrap: "wrap",
								justifyContent: "center",
							}}
						>
							<div style={{ textAlign: "center" }}>
								<img
									src="/nsigma_mobile_app/profile_front.png"
									alt="Profile page mockup - front view"
									style={{
										maxWidth: 280,
										borderRadius: 12,

										width: "100%",
									}}
								/>
								<div
									style={{
										fontStyle: "italic",
										color: "#888",
										marginTop: 8,
									}}
								>
									Profile page – front view
								</div>
							</div>
							<div style={{ textAlign: "center" }}>
								<img
									src="/nsigma_mobile_app/profile_3d.png"
									alt="Profile page mockup - 3D view"
									style={{
										maxWidth: 280,
										borderRadius: 12,
										width: "100%",
									}}
								/>
								<div
									style={{
										fontStyle: "italic",
										color: "#888",
										marginTop: 8,
									}}
								>
									Profile page – 3D view
								</div>
							</div>
						</div>
					</section>

					{/* How It Works */}
					<section id="how-it-works" style={{ margin: "32px 0" }}>
						<h2>
							<Highlight text="How It Works" query={highlight} />
						</h2>
						<p>
							The app fetches mission offers from Supabase in real
							time, displaying them in a responsive list. Push
							notifications alert users instantly when new
							missions are available. The profile page allows
							users to manage their information and preferences
							securely. All data exchanges are protected by
							row-level security, ensuring privacy and compliance.
							Expo enables fast updates and deployment across both
							platforms.
						</p>
					</section>

					{/* Impact */}
					<section id="impact" style={{ margin: "32px 0" }}>
						<h2>
							<Highlight text="Impact" query={highlight} />
						</h2>
						<ul>
							<li>
								<b>+50% user engagement</b> projected thanks to
								real-time notifications and mobile-first design.
							</li>
							<li>
								Centralized access to all mission offers for
								students.
							</li>
							<li>
								Internal adoption by the Nsigma team, improving
								communication and responsiveness.
							</li>
							<li>
								Private codebase, tailored for the needs of the
								Junior-Enterprise.
							</li>
						</ul>
					</section>

					{/* Challenges & Learnings */}
					<section
						id="challenges-learnings"
						style={{ margin: "32px 0" }}
					>
						<h2>
							<Highlight
								text="Challenges & Learnings"
								query={highlight}
							/>
						</h2>
						<p>
							<b>Technical challenges:</b>
						</p>
						<ul>
							<li>
								Ensuring real-time data sync and notification
								reliability across platforms.
							</li>
							<li>
								Implementing secure authentication and row-level
								security with Supabase.
							</li>
							<li>
								Optimizing the UI for both iOS and Android
								devices.
							</li>
							<li>
								Maintaining a fast development cycle with Expo
								and TypeScript.
							</li>
						</ul>
						<p>
							<b>Learnings:</b>
						</p>
						<ul>
							<li>
								Cross-platform mobile development best
								practices.
							</li>
							<li>Real-time backend integration and security.</li>
							<li>
								Designing for user engagement and adoption in a
								student context.
							</li>
						</ul>
					</section>

					{/* Conclusion */}
					<section id="conclusion" style={{ margin: "32px 0" }}>
						<h2>
							<Highlight text="Conclusion" query={highlight} />
						</h2>
						<p>
							The Nsigma Mobile App demonstrates the power of
							modern cross-platform tools to deliver real value
							for student organizations. It enabled me to deepen
							my skills in mobile development, backend security,
							and user-centric design, while making a tangible
							impact for Nsigma.
						</p>
					</section>

					<span
						className="button"
						style={{
							marginTop: 24,
							opacity: 0.7,
							cursor: "not-allowed",
						}}
					>
						<Highlight text="Private Project" query={highlight} />
					</span>
					<ProjectNavArrows currentTitle="Nsigma Mobile App" />
					<div className="page-footer">
						<Footer />
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default NsigmaMobileApp;
