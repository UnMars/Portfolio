import React from "react";
import NavBar from "../../components/common/navBar";
import Footer from "../../components/common/footer";
import Logo from "../../components/common/logo";
import "../styles/projects.css";
import { useHighlightQuery, Highlight } from "../../utils/Highlight";
import ProjectNavArrows from "../../components/projects/ProjectNavArrows";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const slideVariants = {
	enter: { x: 0, opacity: 1, position: "relative" },
	center: { x: 0, opacity: 1, position: "relative" },
	exit: { x: 0, opacity: 1, position: "relative" },
};

const X86OSConception = () => {
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
				<AnimatePresence mode="wait" initial={false}>
					<motion.div
						className="projects-container"
						key="x86-os-conception"
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
								text="x86 OS Conception"
								query={highlight}
							/>
						</h1>
						<div className="project-page-date">2025</div>
						<div className="subtitle projects-subtitle">
							<Highlight
								text="Advanced OS design project: Implemented user/kernel partitioning, memory paging, and security for a minimalist x86 OS."
								query={highlight}
							/>
						</div>

						{/* Introduction */}
						<section style={{ margin: "32px 0" }}>
							<h2>
								<Highlight
									text="Introduction"
									query={highlight}
								/>
							</h2>
							<p>
								The <b>x86 OS Conception</b> project was an
								advanced operating system design assignment at
								ENSIMAG. The goal was to deepen our
								understanding of low-level system concepts by
								building a minimalist x86 OS from scratch,
								focusing on user/kernel partitioning, memory
								management, and security. The project was
								carried out in a team of five, with a strong
								emphasis on collaboration and technical
								leadership.
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
									<a href="#project-context">
										Project Context
									</a>
								</li>
								<li>
									<a href="#features-stack">
										Stack & Features
									</a>
								</li>
								<li>
									<a href="#how-it-works">How It Works</a>
								</li>
								<li>
									<a href="#illustrations">Illustrations</a>
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
						<section
							id="project-context"
							style={{ margin: "32px 0" }}
						>
							<h2>
								<Highlight
									text="Project Context"
									query={highlight}
								/>
							</h2>
							<p>
								This project was part of the advanced systems
								curriculum at ENSIMAG. The objective was to
								apply and deepen our knowledge of OS internals
								by designing and implementing a minimalist x86
								operating system. The team was organized via
								Discord, with dedicated channels for tasks,
								bugs, tests, and code pushes. I took the
								technical lead on user/kernel partitioning and
								memory management, ensuring robust isolation and
								security.
							</p>
						</section>

						{/* Stack & Features */}
						<section
							id="features-stack"
							style={{ margin: "32px 0" }}
						>
							<h2>
								<Highlight
									text="Stack & Features"
									query={highlight}
								/>
							</h2>
							<ul>
								<li>
									<b>C:</b> Low-level programming for OS
									internals.
								</li>
								<li>
									<b>Linux:</b> Development and testing
									environment.
								</li>
								<li>
									<b>Git:</b> Version control and
									collaborative workflow.
								</li>
								<li>
									<b>User/Kernel partitioning:</b> Full
									isolation and privilege separation.
								</li>
								<li>
									<b>Memory paging:</b> Page tables, page
									faults, and virtual memory management.
								</li>
								<li>
									<b>Interrupt handling:</b> Secure and
									efficient management of hardware and
									software interrupts.
								</li>
								<li>
									<b>Security:</b> User-mode isolation, access
									control, and memory protection.
								</li>
							</ul>
						</section>

						{/* How It Works */}
						<section id="how-it-works" style={{ margin: "32px 0" }}>
							<h2>
								<Highlight
									text="How It Works"
									query={highlight}
								/>
							</h2>
							<p>
								The OS is structured around a strict separation
								between user and kernel modes. User processes
								are isolated from the kernel and from each
								other, with all privileged operations routed
								through secure system calls. Memory management
								is handled via paging, with page tables and TLBs
								ensuring efficient and protected access.
								Interrupts are managed through a dedicated
								handler, supporting both hardware and software
								events. The system was designed for robustness,
								security, and extensibility, with a focus on
								real-world OS principles.
							</p>
						</section>

						{/* Illustrations */}
						<section
							id="illustrations"
							style={{ margin: "32px 0" }}
						>
							<h2>
								<Highlight
									text="Illustrations"
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
								{/* Boot Sequence Screenshot */}
								<div style={{ textAlign: "center" }}>
									<img
										src="/x86os/boot.png"
										alt="Boot Sequence Screenshot"
										style={{
											maxWidth: 420,
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
										Boot sequence: OS initialization and
										kernel messages
									</div>
								</div>
								{/* Shell Screenshot */}
								<div style={{ textAlign: "center" }}>
									<img
										src="/x86os/shell.png"
										alt="Shell Screenshot"
										style={{
											maxWidth: 420,
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
										Shell
									</div>
								</div>
							</div>
							{/* Add more images if needed */}
						</section>

						{/* Impact */}
						<section id="impact" style={{ margin: "32px 0" }}>
							<h2>
								<Highlight text="Impact" query={highlight} />
							</h2>
							<ul>
								<li>
									<b>Advanced technical skills:</b> Deepened
									understanding of OS internals, memory
									management, and security.
								</li>
								<li>
									<b>Leadership:</b> Led the user-mode
									isolation and memory management features.
								</li>
								<li>
									<b>Teamwork:</b> Coordinated a team of five,
									adapting to each member's strengths.
								</li>
								<li>
									<b>Concrete results:</b> Successfully
									implemented user/kernel partitioning,
									paging, and secure interrupt handling.
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
									Debugging at a low level with limited error
									feedback from the CPU.
								</li>
								<li>
									Ensuring robust user/kernel isolation and
									memory protection.
								</li>
								<li>
									Managing complex team coordination and
									knowledge transfer.
								</li>
							</ul>
							<p>
								<b>Learnings:</b>
							</p>
							<ul>
								<li>
									Practical application of advanced OS
									concepts (paging, TLB, privilege
									separation).
								</li>
								<li>
									Leadership and technical mentoring in a
									high-stakes project.
								</li>
								<li>
									Effective communication and documentation
									for team success.
								</li>
							</ul>
						</section>

						{/* Conclusion */}
						<section id="conclusion" style={{ margin: "32px 0" }}>
							<h2>
								<Highlight
									text="Conclusion"
									query={highlight}
								/>
							</h2>
							<p>
								The x86 OS Conception project was a unique
								opportunity to apply theoretical knowledge to a
								real-world system, pushing the boundaries of
								what a small team can achieve in OS design. It
								provided invaluable experience in both technical
								depth and team leadership.
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
							<Highlight
								text="Academic Project"
								query={highlight}
							/>
						</span>
						<ProjectNavArrows currentTitle="x86 OS Conception" />
						<div className="page-footer">
							<Footer />
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default X86OSConception;
