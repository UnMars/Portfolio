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

const NsigmaLegalDocumentsRAG = () => {
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
					key="nsigma-legal-documents-rag"
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
							text="Nsigma Legal Documents RAG"
							query={highlight}
						/>
					</h1>
					<div className="project-page-date">2024</div>
					<div className="subtitle projects-subtitle">
						<Highlight
							text="Conversational agent for automating internal workflows using RAG (Retrieval Augmented Generation)."
							query={highlight}
						/>
					</div>

					{/* Introduction */}
					<section style={{ margin: "32px 0" }}>
						<h2>
							<Highlight text="Introduction" query={highlight} />
						</h2>
						<p>
							The <b>Nsigma Legal Documents RAG</b> project is an
							internal conversational agent designed to automate
							and streamline document-related workflows for Nsigma
							Junior-Enterprise. In the world of
							Junior-Enterprises, regulatory and administrative
							requirements generate a heavy documentation burden.
							This agent allows team members to ask questions
							about JE regulations and instantly receive
							well-structured, up-to-date answers, always based on
							reliable sources. It is especially valuable for
							audits, quality checks, and ensuring compliance.
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
								<a href="#workflow-diagram">Workflow Diagram</a>
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
							Nsigma, as a leading Junior-Enterprise, manages a
							large volume of legal and administrative documents.
							The regulatory environment is complex and constantly
							evolving, making it challenging to keep answers up
							to date and compliant. Manual handling of these
							documents was time-consuming and error-prone,
							especially when facing audits or quality reviews.
							The need for a smart, automated solution led to the
							development of a conversational agent capable of
							understanding regulatory questions, retrieving the
							most relevant and recent documents, and providing
							sourced, reliable answers—greatly facilitating
							audits, compliance, and day-to-day operations.
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
								<b>Python:</b> Core language for backend and
								workflow logic.
							</li>
							<li>
								<b>LangChain:</b> Framework for building RAG
								pipelines and conversational agents.
							</li>
							<li>
								<b>Retrieval Augmented Generation (RAG):</b>{" "}
								Combines LLMs with document retrieval for
								accurate, context-aware responses.
							</li>
							<li>
								<b>API Integration:</b> Seamless connection with
								internal tools and document storage.
							</li>
							<li>
								<b>Security:</b> Access control and data privacy
								for sensitive legal documents.
							</li>
						</ul>
					</section>

					{/* Workflow Diagram */}
					<section id="workflow-diagram" style={{ margin: "32px 0" }}>
						<h2>
							<Highlight
								text="Workflow Diagram"
								query={highlight}
							/>
						</h2>
						<div style={{ textAlign: "center", margin: "24px 0" }}>
							<img
								src="/nsigma_legal_rag/workflow.png"
								alt="Workflow diagram"
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
								Workflow: from user query to document retrieval
								and response generation
							</div>
						</div>
					</section>

					{/* How It Works */}
					<section id="how-it-works" style={{ margin: "32px 0" }}>
						<h2>
							<Highlight text="How It Works" query={highlight} />
						</h2>
						<p>
							The agent receives natural language queries from
							users, processes them using a RAG pipeline, and
							retrieves the most relevant legal or administrative
							documents. LangChain orchestrates the retrieval and
							generation steps, ensuring that responses are both
							accurate and contextually relevant. The system can
							automate repetitive tasks, such as document
							classification, extraction of key information, and
							even drafting of standard replies, all while
							maintaining strict access controls.
						</p>
					</section>

					{/* Impact */}
					<section id="impact" style={{ margin: "32px 0" }}>
						<h2>
							<Highlight text="Impact" query={highlight} />
						</h2>
						<ul>
							<li>
								<b>Productivity boost:</b> Significant reduction
								in time spent searching and managing documents.
							</li>
							<li>
								<b>Improved response quality:</b> More accurate
								and consistent answers to internal queries.
							</li>
							<li>
								<b>Adoption:</b> Widely used by the Nsigma team
								for daily operations.
							</li>
							<li>
								<b>Private codebase:</b> Tailored for internal
								needs and compliance.
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
								Designing a robust RAG pipeline for legal
								documents.
							</li>
							<li>
								Ensuring data privacy and secure access control.
							</li>
							<li>
								Integrating with existing internal tools and
								workflows.
							</li>
							<li>
								Maintaining high accuracy and relevance in
								generated responses.
							</li>
						</ul>
						<p>
							<b>Learnings:</b>
						</p>
						<ul>
							<li>
								Advanced use of LangChain and RAG for enterprise
								automation.
							</li>
							<li>
								Best practices in conversational AI for business
								processes.
							</li>
							<li>
								Balancing automation with compliance and
								security requirements.
							</li>
						</ul>
					</section>

					{/* Conclusion */}
					<section id="conclusion" style={{ margin: "32px 0" }}>
						<h2>
							<Highlight text="Conclusion" query={highlight} />
						</h2>
						<p>
							The Nsigma Legal Documents RAG project enabled me to
							deepen my expertise in AI-driven automation, secure
							workflow design, and the practical application of
							RAG in a real business context. It continues to
							evolve to meet the growing needs of the Nsigma team.
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
					<ProjectNavArrows currentTitle="Nsigma Legal Documents RAG" />
					<div className="page-footer">
						<Footer />
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default NsigmaLegalDocumentsRAG;
