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

const Noticeable = () => {
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
					key="Noticeable"
					custom={direction}
					variants={slideVariants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
					style={{ position: "relative" }}
				>
					<h1 className="projects-title">
						<Highlight text="Noticeable" query={highlight} />
					</h1>
					<div className="project-page-date">2025</div>
					<div className="subtitle projects-subtitle">
						<Highlight
							text="Early-stage startup, soon incubated at Y Combinator (San Francisco). Currently working as a Founding SWE Intern."
							query={highlight}
						/>
					</div>
					<div style={{ margin: "24px 0" }}>
						<b>Tech stack:</b>{" "}
						<Highlight
							text="Python, LangGraph, Qdrant (RAG pipeline), Docker, AWS"
							query={highlight}
						/>
					</div>
					<div
						style={{
							margin: "32px 0",
							fontStyle: "italic",
							color: "#888",
						}}
					>
						<Highlight
							text="Currently interning – more details coming soon!"
							query={highlight}
						/>
					</div>
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
					<ProjectNavArrows currentTitle="Noticeable" />
					<div className="page-footer">
						<Footer />
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Noticeable;
