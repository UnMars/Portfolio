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

const JavaDecaCompiler = () => {
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
					key="java-deca-compiler"
					custom={direction}
					variants={slideVariants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
					style={{ position: "relative" }}
				>
					<h1 className="projects-title">
						<Highlight
							text="Java Deca Compiler"
							query={highlight}
						/>
					</h1>
					<div className="project-page-date">2025</div>
					<div className="subtitle projects-subtitle">
						<Highlight
							text="Software engineering project: Developed a compiler for a Java subset."
							query={highlight}
						/>
					</div>

					{/* Team Banner */}
					<div style={{ textAlign: "center", margin: "32px 0" }}>
						<img
							src="/java_deca/team_banner.png"
							alt="Team banner"
							style={{
								maxWidth: 800,
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
							Our team banner for the Java Deca Compiler project
						</div>
					</div>

					{/* Introduction */}
					<section style={{ margin: "32px 0" }}>
						<h2>
							<Highlight text="Introduction" query={highlight} />
						</h2>
						<p>
							The <b>Java Deca Compiler</b> project was a major
							software engineering assignment at ENSIMAG. The goal
							was to design and implement a compiler for a subset
							of the Java language, applying rigorous software
							engineering practices in a team environment. The
							project emphasized code quality, testing,
							documentation, and collaborative organization.
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
							This project was part of the Software Engineering
							curriculum at ENSIMAG. The main objective was to
							illustrate key aspects of software
							engineering—organization, code quality, validation,
							and documentation—through the development of a real
							compiler. The team consisted of five students from
							different backgrounds, working together with clear
							task separation, regular meetings, and agile tools
							like Trello and Git.
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
								<b>Java:</b> Main language for compiler
								implementation.
							</li>
							<li>
								<b>SonarQube:</b> Code quality analysis and
								continuous integration.
							</li>
							<li>
								<b>Git:</b> Version control and collaborative
								development.
							</li>
							<li>
								<b>Trello:</b> Project management and task
								tracking.
							</li>
							<li>
								<b>JavaDoc:</b> Comprehensive documentation for
								all modules.
							</li>
							<li>
								<b>300+ tests:</b> Extensive unit and
								integration testing for reliability.
							</li>
							<li>
								<b>Test coverage:</b> 86.6% (measured with
								SonarQube).
							</li>
							<li>
								<b>Test-Driven Development (TDD):</b> Intensive
								use of TDD methodology throughout the project.
							</li>
						</ul>
					</section>

					{/* How It Works */}
					<section id="how-it-works" style={{ margin: "32px 0" }}>
						<h2>
							<Highlight text="How It Works" query={highlight} />
						</h2>
						<p>
							The compiler processes source code written in a Java
							subset, performing lexical and semantic analysis,
							and generating output code. The project placed a
							strong emphasis on automated testing (over 300+
							tests) and continuous integration pipelines to
							ensure code quality. Test-Driven Development (TDD)
							was used intensively: each feature was specified and
							tested before implementation, which greatly improved
							reliability and maintainability. SonarQube was used
							to monitor code health and coverage (86.6%), and
							JavaDoc provided detailed documentation for
							maintainability. The team worked in parallel, with
							clear roles and regular code reviews.
						</p>
					</section>

					{/* AST Example */}
					<section id="ast-example" style={{ margin: "32px 0" }}>
						<h2>
							<Highlight text="AST Example" query={highlight} />
						</h2>
						<p>
							A key part of the compiler is the construction and
							manipulation of the Abstract Syntax Tree (AST). The
							AST represents the hierarchical structure of
							expressions and statements in the source code,
							enabling semantic analysis and code generation.
							Below is an illustration of an <b>AbstractExpr</b>{" "}
							tree, as implemented in the project:
						</p>
						<div style={{ textAlign: "center", margin: "24px 0" }}>
							<img
								src="/java_deca/abstract_expr.png"
								alt="Abstract Syntax Tree (AST) for an expression"
								style={{
									maxWidth: "90%",
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
								Abstract Syntax Tree (AST) for an example
								expression
							</div>
						</div>
					</section>

					{/* Impact */}
					<section id="impact" style={{ margin: "32px 0" }}>
						<h2>
							<Highlight text="Impact" query={highlight} />
						</h2>
						<ul>
							<li>
								<b>High code quality:</b> Achieved through
								rigorous testing and SonarQube analysis.
							</li>
							<li>
								<b>Efficient teamwork:</b> Clear task
								separation, regular meetings, and agile tools.
							</li>
							<li>
								<b>Comprehensive documentation:</b> Full JavaDoc
								coverage for all modules.
							</li>
							<li>
								<b>Successful delivery:</b> The project received
								a high grade and positive feedback for its
								organization and quality.
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
								Understanding and implementing complex compiler
								concepts (lexical, semantic analysis).
							</li>
							<li>
								Maintaining code quality and test coverage in a
								team setting.
							</li>
							<li>
								Clarifying requirements and adapting to evolving
								project needs.
							</li>
							<li>
								Applying TDD rigorously to ensure every feature
								was covered by tests from the start.
							</li>
						</ul>
						<p>
							<b>Learnings:</b>
						</p>
						<ul>
							<li>
								Importance of rigorous methodology and
								collective organization.
							</li>
							<li>
								Effective communication and task management in a
								diverse team.
							</li>
							<li>
								Best practices in code quality, testing, and
								documentation.
							</li>
							<li>
								How TDD and high coverage directly impact
								project robustness and auditability, especially
								in an academic and collaborative context.
							</li>
						</ul>
					</section>

					{/* Conclusion */}
					<section id="conclusion" style={{ margin: "32px 0" }}>
						<h2>
							<Highlight text="Conclusion" query={highlight} />
						</h2>
						<p>
							The Java Deca Compiler project was a valuable
							opportunity to apply advanced software engineering
							principles in a real-world context. It strengthened
							my skills in teamwork, code quality, and project
							management, and provided a solid foundation in
							compiler construction.
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
						<Highlight text="Academic Project" query={highlight} />
					</span>
					<ProjectNavArrows currentTitle="Java Deca Compiler" />
					<div className="page-footer">
						<Footer />
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default JavaDecaCompiler;
