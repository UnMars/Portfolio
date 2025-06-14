import React from "react";
import NavBar from "../../components/common/navBar";
import Footer from "../../components/common/footer";
import Logo from "../../components/common/logo";
import "../styles/projects.css";
import ProjectNavArrows from "../../components/projects/ProjectNavArrows";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { PythonOriginal } from "devicons-react";

const slideVariants = {
	enter: { x: 0, opacity: 1, position: "relative" },
	center: { x: 0, opacity: 1, position: "relative" },
	exit: { x: 0, opacity: 1, position: "relative" },
};

const ProlificJoiner = () => {
	const location = useLocation();
	const direction = location.state?.direction || "next";

	return (
		<div className="page-content">
			<NavBar />
			<div className="content-wrapper">
				<div className="projects-logo-container">
					<Logo width={56} />
				</div>
				<AnimatePresence mode="wait" initial={false}>
					<motion.div
						className="projects-container"
						key="prolific-joiner"
						custom={direction}
						variants={slideVariants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
						style={{ position: "relative" }}
					>
						<h1 className="projects-title">
							Prolific-Joiner - Open Source Automation Bot for
							Prolific.co
						</h1>
						<div className="project-page-date">2022</div>
						<div className="subtitle projects-subtitle">
							Open-source automation for paid studies on
							Prolific.co
						</div>

						{/* Introduction */}
						<section style={{ margin: "32px 0" }}>
							<h2>Introduction</h2>
							<p>
								Welcome to <b>Prolific-Joiner</b>, an
								open-source automation bot designed to maximize
								your participation in paid studies on{" "}
								<a
									href="https://www.prolific.co"
									target="_blank"
									rel="noopener noreferrer"
								>
									Prolific.co
								</a>
								. This project was born out of a desire to
								automate the repetitive process of checking for
								new studies and to help users increase their
								earnings with minimal effort. Prolific-Joiner
								automatically detects new studies, handles
								authentication, bypasses ReCaptcha, and can run
								24/7. It is used by a small but active community
								to boost their study opportunities.
							</p>
							{/* Image suggestion */}
							<div
								style={{
									textAlign: "center",
									margin: "24px 0",
								}}
							>
								<img
									src="/prolific.gif"
									loading="lazy"
									alt="Prolific-Joiner bot demo"
									style={{
										maxWidth: 600,
										borderRadius: 12,
										boxShadow: "0 4px 16px #0001",
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
									Screenshot of the bot in action
								</div>
							</div>
						</section>

						{/* Table of Contents */}
						<section style={{ margin: "32px 0" }}>
							<h2>Table of Contents</h2>
							<ol className="project-toc">
								<li>
									<a href="#project-context">
										Project Context
									</a>
								</li>
								<li>
									<a href="#features-stack">
										Features & Technical Stack
									</a>
								</li>
								<li>
									<a href="#how-it-works">How It Works</a>
								</li>
								<li>
									<a href="#community-impact">
										Community & Impact
									</a>
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
						<section
							id="project-context"
							style={{ margin: "32px 0" }}
						>
							<h2>Project Context</h2>
							<p>
								<b>Prolific-Joiner</b> was created to solve a
								simple but impactful problem: how to be the
								first to join high-paying studies on Prolific.co
								before they fill up. As a frequent user, I
								realized that automating this process could save
								time and maximize earnings. The project is fully
								open-source and available on{" "}
								<a
									href="https://github.com/UnMars/Prolific-Joiner"
									target="_blank"
									rel="noopener noreferrer"
								>
									GitHub
								</a>
								, allowing anyone to contribute, customize, or
								simply benefit from the automation.
							</p>
							{/* Image suggestion */}
							<div
								style={{
									textAlign: "center",
									margin: "24px 0",
								}}
							>
								<img
									src="/Prolific-Joiner.png"
									loading="lazy"
									alt="Prolific-Joiner GitHub repository"
									style={{
										maxWidth: 400,
										borderRadius: 12,
										boxShadow: "0 4px 16px #0001",
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
									GitHub repository screenshot
								</div>
							</div>
						</section>

						{/* Features & Technical Stack */}
						<section
							id="features-stack"
							style={{ margin: "32px 0" }}
						>
							<h2>Features & Technical Stack</h2>
							<ul>
								<li>
									<b>Automatic Study Detection:</b> Instantly
									detects and joins new studies as soon as
									they appear on Prolific.
								</li>
								<li>
									<b>Authentication Handling:</b> Manages
									session tokens and renewals for seamless,
									uninterrupted operation.
								</li>
								<li>
									<b>ReCaptcha Bypass:</b> Uses advanced
									techniques to bypass ReCaptcha and avoid
									manual interruptions.
								</li>
								<li>
									<b>24/7 Operation:</b> Designed for
									continuous use, maximizing your chances to
									participate in studies.
								</li>
								<li>
									<b>Configurable via JSON:</b> Easy setup and
									customization for different user needs.
								</li>
								<li>
									<b>Sound Notification & Auto-Open:</b>{" "}
									Notifies users and opens new studies in a
									browser tab automatically.
								</li>
							</ul>
							<p>
								<b>Technical Stack:</b> Python (core language),
								HTTP requests for API interaction, headless
								automation, JSON configuration.
							</p>
							{/* Image suggestion */}
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									textAlign: "center",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<div
									style={{
										maxWidth: 120,
										borderRadius: 12,
										boxShadow: "0 4px 16px #0001",
										width: "100%",
										padding: "10px",
									}}
								>
									<PythonOriginal
										size="100%"
										title="Python logo"
									/>
								</div>
								<div
									style={{
										fontStyle: "italic",
										color: "#888",
										marginTop: 8,
									}}
								>
									Python is at the core of the project
								</div>
							</div>
						</section>

						{/* How It Works */}
						<section id="how-it-works" style={{ margin: "32px 0" }}>
							<h2>How It Works</h2>
							<p>
								Prolific-Joiner continuously polls the Prolific
								API, checking for new available studies. When a
								study is detected, it automatically
								authenticates, bypasses any ReCaptcha, and joins
								the study. The user receives a sound
								notification and the study page opens in a new
								browser tab.
							</p>
							{/* <p>Example JSON config:</p>
							<pre
								style={{
									background: "#f4f4f5",
									padding: 16,
									borderRadius: 8,
									overflowX: "auto",
								}}
							>
								{`{
  "prolific_email": "your@email.com",
  "prolific_password": "yourpassword",
  "notification_sound": true,
  "auto_open": true
}`}
							</pre>
							<div
								style={{
									textAlign: "center",
									margin: "24px 0",
								}}
							>
								<img
									src="/images/config-example.png"
									alt="Prolific-Joiner config example"
									style={{
										maxWidth: 400,
										borderRadius: 12,
										boxShadow: "0 4px 16px #0001",
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
									Example of a configuration file
								</div>
							</div> */}
						</section>

						{/* Community & Impact */}
						<section
							id="community-impact"
							style={{ margin: "32px 0" }}
						>
							<h2>Community & Impact</h2>
							<ul>
								<li>
									<b>38+</b> GitHub stars, <b>13</b> forks
								</li>
								<li>
									Used by a growing community of Prolific
									users to automate study participation
								</li>
								<li>
									Helped users maximize their earnings and
									reduce manual effort
								</li>
								<li>Fully open-source under GPL-3.0 license</li>
							</ul>
							<p>
								Prolific-Joiner has empowered users to automate
								their workflow, save time, and increase their
								income from paid studies. The project's
								open-source nature has encouraged collaboration
								and improvements from contributors worldwide.
							</p>
							{/* Image suggestion */}
							<div
								style={{
									textAlign: "center",
									margin: "24px 0",
								}}
							>
								<img
									src="/prolific_stats.png"
									alt="GitHub stars and forks"
									style={{
										maxWidth: 220,
										borderRadius: 12,
										boxShadow: "0 4px 16px #0001",
										width: "100%",
										background: "#fff",
									}}
								/>
								<div
									style={{
										fontStyle: "italic",
										color: "#888",
										marginTop: 8,
									}}
								>
									GitHub stars and forks
								</div>
							</div>
						</section>

						{/* Challenges & Learnings */}
						<section
							id="challenges-learnings"
							style={{ margin: "32px 0" }}
						>
							<h2>Challenges & Learnings</h2>
							<p>
								<b>Technical Challenges:</b>
							</p>
							<ul>
								<li>
									Handling Prolific's authentication and
									session renewal
								</li>
								<li>Bypassing ReCaptcha reliably</li>
								<li>
									Respecting API rate limits to avoid bans
								</li>
							</ul>
							<p>
								<b>Learnings:</b>
							</p>
							<ul>
								<li>
									Advanced Python scripting and automation
								</li>
								<li>
									Robust error handling for long-running bots
								</li>
								<li>
									Open-source documentation and community
									support
								</li>
							</ul>
							<p>
								Building Prolific-Joiner was a great opportunity
								to deepen my skills in automation, error
								handling, and open-source best practices. I
								learned how to create robust, user-friendly
								tools that can run continuously and adapt to
								changes in third-party APIs.
							</p>
							{/* Image suggestion */}
							<div
								style={{
									textAlign: "center",
									margin: "24px 0",
								}}
							>
								<img
									src="/RecaptchaLogo.png"
									alt="ReCaptcha bypass illustration"
									style={{
										maxWidth: 120,
										borderRadius: 12,
										boxShadow: "0 4px 16px #0001",
										width: "100%",
										background: "#fff",
									}}
								/>
								<div
									style={{
										fontStyle: "italic",
										color: "#888",
										marginTop: 8,
									}}
								>
									ReCaptcha bypass illustration
								</div>
							</div>
						</section>

						{/* Conclusion */}
						<section id="conclusion" style={{ margin: "32px 0" }}>
							<h2>Conclusion</h2>
							<p>
								Through <b>Prolific-Joiner</b>, I have developed
								advanced skills in automation, API interaction,
								and open-source development. The project not
								only helped me and others save time and increase
								earnings, but also fostered a small community of
								automation enthusiasts. Open-sourcing the
								project gave it real-world impact and
								visibility, and I continue to maintain and
								improve it based on user feedback.
							</p>
							{/* Image suggestion */}
							<div
								style={{
									textAlign: "center",
									margin: "24px 0",
								}}
							>
								<img
									src="/openSource.png"
									alt="Open Source badge"
									style={{
										maxWidth: 120,
										borderRadius: 12,
										boxShadow: "0 4px 16px #0001",
										width: "100%",
										background: "#fff",
									}}
								/>
								<div
									style={{
										fontStyle: "italic",
										color: "#888",
										marginTop: 8,
									}}
								>
									Open Source badge
								</div>
							</div>
						</section>

						{/* SEO Keywords (hidden for SEO) */}
						<div style={{ display: "none" }}>
							Prolific automation bot, paid studies automation,
							open source Prolific bot, Python automation script,
							ReCaptcha bypass, Prolific.co API, study
							participation maximizer, 24/7 automation, open
							source project, GitHub automation tool.
						</div>
						<a
							href="https://github.com/UnMars/Prolific-Joiner"
							target="_blank"
							rel="noopener noreferrer"
							className="button"
							style={{ marginTop: 24 }}
						>
							View on GitHub
						</a>
						<ProjectNavArrows currentTitle="Prolific-Joiner" />
						<div className="page-footer">
							<Footer />
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default ProlificJoiner;
