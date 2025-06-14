import React from "react";
import NavBar from "../../components/common/navBar";
import Footer from "../../components/common/footer";
import "../styles/projects.css";
import { useHighlightQuery, Highlight } from "../../utils/Highlight";
import ProjectNavArrows from "../../components/projects/ProjectNavArrows";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
	PythonOriginal,
	DockerOriginal,
	PostgresqlOriginal,
	ElasticsearchOriginal,
	RedisOriginal,
	DjangoPlain,
} from "devicons-react";
import Logo from "../../components/common/logo";

const slideVariants = {
	enter: { x: 0, opacity: 1, position: "relative" },
	center: { x: 0, opacity: 1, position: "relative" },
	exit: { x: 0, opacity: 1, position: "relative" },
};

const Eosya = () => {
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
						key="eosya-geospatial-platform"
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
								text="Eosya - The Outdoor Sports Topotheque"
								query={highlight}
							/>
						</h1>
						<div className="project-page-date">2024</div>
						<div className="subtitle projects-subtitle">
							<Highlight
								text="Full-stack website application to index and search outdoors activities."
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
								Welcome to <b>Eosya</b>, an innovative platform
								designed to index, search, and visualize every
								outdoor sport activity. This project delivers
								powerful tools for geospatial analysis,
								real-time search, and large-scale data
								visualization, while ensuring performance,
								security, and scalability.
							</p>
							<div
								style={{
									textAlign: "center",
									margin: "24px 0",
								}}
							>
								<img
									src="/eosya/eosya_page.png"
									loading="lazy"
									alt="Eosya page"
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
									Home page
								</div>
							</div>
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
									<a href="#impact">Impact & Scalability</a>
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
								The project was born from the need to centralize
								and efficiently leverage vast geospatial
								datasets for both B2B and B2C applications. The
								goal was to design a robust platform capable of
								handling massive data volumes, providing instant
								search, and integrating easily with other tools
								via API.
							</p>
							<div
								style={{
									textAlign: "center",
									margin: "24px 0",
								}}
							>
								<img
									src="/eosya/eosya_search.png"
									loading="lazy"
									alt="Eosya search"
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
									Search page
								</div>
							</div>
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
									<b>Python (Django):</b> High-performance,
									scalable backend for data management and
									authentication.
								</li>
								<li>
									<b>Docker:</b> Containerization for
									reproducible and secure deployments.
								</li>
								<li>
									<b>PostgreSQL + PostGIS:</b> Advanced
									spatial storage and queries.
								</li>
								<li>
									<b>Elasticsearch:</b> Real-time search and
									autocomplete on 800k+ points.
								</li>
								<li>
									<b>Redis:</b> Fast in-memory caching for API
									performance and rate limiting.
								</li>
							</ul>
							<div
								style={{
									display: "flex",
									gap: 24,
									justifyContent: "center",
									alignItems: "center",
									margin: "24px 0",
								}}
							>
								<PythonOriginal size={48} title="Python" />
								<DjangoPlain size={48} title="Django" />
								<DockerOriginal size={48} title="Docker" />
								<PostgresqlOriginal
									size={48}
									title="PostgreSQL"
								/>
								<ElasticsearchOriginal
									size={48}
									title="Elasticsearch"
								/>
								<RedisOriginal size={48} title="Redis" />
							</div>
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
								The platform collects, cleans, and indexes
								geospatial data from multiple sources. Users can
								perform instant searches thanks to
								Elasticsearch, visualize results on an
								interactive map, and access advanced analytics
								via the API or web interface. Deployments are
								automated via CI/CD to ensure security and
								speed. Redis is used for caching frequent
								queries and boosting API responsiveness.
							</p>
							<div
								style={{
									textAlign: "center",
									margin: "24px 0",
								}}
							>
								<img
									src="/eosya/eosya_search_bar.png"
									alt="Search bar"
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
									Search bar with autocomplete
								</div>
							</div>
						</section>

						{/* Impact & Scalability */}
						<section id="impact" style={{ margin: "32px 0" }}>
							<h2>
								<Highlight
									text="Impact & Scalability"
									query={highlight}
								/>
							</h2>
							<ul>
								<li>
									<b>800,000+</b> points of interest indexed
									with OpenStreetMap and searchable in real
									time
								</li>
								<li>
									Secure cloud deployment and high
									availability
								</li>
							</ul>
							<div
								style={{
									textAlign: "center",
									margin: "24px 0",
								}}
							>
								<img
									src="/eosya/eosya_topo.png"
									alt="Detailled topo page"
									style={{
										maxWidth: 640,
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
									Detailled page of a collection of tracks
								</div>
							</div>
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
									Scaling indexing and search on large data
									volumes
								</li>
								<li>
									Automating deployments and managing security
								</li>
								<li>
									Optimizing performance for real-time search
									and caching
								</li>
							</ul>
							<p>
								<b>Learnings:</b>
							</p>
							<ul>
								<li>
									Cloud architecture for scalability and
									security
								</li>
								<li>Optimizing geospatial data pipelines</li>
								<li>Efficient caching strategies with Redis</li>
							</ul>
							<div
								style={{
									textAlign: "center",
									margin: "24px 0",
								}}
							>
								<img
									src="/eosya/eosya_architecture.png"
									alt="Eosya architecture"
									style={{
										maxWidth: 800,
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
									Eosya architecture
								</div>
							</div>
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
								Eosya enabled me to develop advanced skills in
								cloud architecture, big data processing, and
								automation. The project had a real impact for
								its users and continues to evolve to meet new
								business needs.
							</p>
						</section>

						{/* SEO Keywords (hidden for SEO) */}
						<div style={{ display: "none" }}>
							geospatial platform, POI indexing, real-time search,
							open source, FastAPI, Elasticsearch, PostgreSQL,
							Docker, Redis, CI/CD, cloud, territorial analysis,
							geospatial API, map visualization, scalability,
							automated deployment, caching.
						</div>
						<a
							href="https://explore.eosya.com"
							target="_blank"
							rel="noopener noreferrer"
							className="button"
							style={{ marginTop: 24 }}
						>
							Visit Site
						</a>
						<ProjectNavArrows currentTitle="Eosya" />
						<div className="page-footer">
							<Footer />
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Eosya;
