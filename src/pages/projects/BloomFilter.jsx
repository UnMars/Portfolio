import React from "react";
import NavBar from "../../components/common/navBar";
import Footer from "../../components/common/footer";
import Logo from "../../components/common/logo";
import "../styles/projects.css";
import ProjectNavArrows from "../../components/projects/ProjectNavArrows";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import BloomFilterDemo from "../../components/projects/BloomFilterDemo";

const slideVariants = {
	enter: { x: 0, opacity: 1, position: "relative" },
	center: { x: 0, opacity: 1, position: "relative" },
	exit: { x: 0, opacity: 1, position: "relative" },
};

const BloomFilter = () => {
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
						key="bloom-filter"
						custom={direction}
						variants={slideVariants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
						style={{ position: "relative" }}
					>
						<h1 className="projects-title">
							Bloom Filter Playground
						</h1>
						<div className="project-page-date">2025</div>
						<div className="subtitle projects-subtitle">
							Learning-by-building: interactive demo to understand
							probabilistic sets
						</div>
						<div style={{ marginTop: 8 }}>
							<a
								className="github-link"
								href="https://github.com/UnMars/bloom-filter-learning"
								target="_blank"
								rel="noopener noreferrer"
								title="Open bloom-filter-learning on GitHub"
								aria-label="Open bloom-filter-learning on GitHub"
							>
								<svg
									viewBox="0 0 24 24"
									aria-hidden="true"
									focusable="false"
									className="github-link-icon"
								>
									<path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.29-1.72-1.29-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.27 3.41.97.11-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18.93-.26 1.93-.39 2.93-.39s2 .13 2.93.39c2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.41-5.25 5.7.42.36.79 1.07.79 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
								</svg>
								<span>View project on GitHub</span>
							</a>
						</div>
						{/* Introduction */}
						<section style={{ margin: "32px 0" }}>
							<h2>Introduction</h2>
							<p>
								A <b>Bloom Filter</b> is a tiny, lightning‑fast
								structure that answers a simple question:
								<i> “might this item be in the set?”</i> It uses
								a bit array and a few hash functions. It never
								misses a real member (<b>no false negatives</b>)
								and sometimes says “maybe” for items that are
								not there (<b>false positives</b>), which you
								can tune.
							</p>
						</section>

						{/* What is a Bloom Filter */}
						<section style={{ margin: "32px 0" }}>
							<h2>What is a Bloom Filter?</h2>
							<p>
								It’s a probabilistic set: a bit array of size
								<b> m</b> and <b> k</b> hash functions.
							</p>
							<ul>
								<li>
									Insert: hash the item k times and set those
									bits
								</li>
								<li>Query: check the same k bits</li>
								<li>
									No false negatives; false positives are
									tunable
								</li>
							</ul>
						</section>

						{/* Where it's useful */}
						<section style={{ margin: "24px 0" }}>
							<h2>Where is it useful?</h2>
							<ul>
								<li>
									Caching: skip fetching when the filter says
									“definitely not”.
								</li>
								<li>
									Databases/LSM trees: avoid useless disk
									reads before checking data files.
								</li>
								<li>
									Networking/Security: quick membership tests
									(URLs, IPs, tokens).
								</li>
								<li>
									Analytics/streaming: dedup or pre‑filter
									events with low memory.
								</li>
							</ul>
						</section>

						{/* Real products */}
						<section style={{ margin: "24px 0" }}>
							<h2>Used in real products</h2>
							<ul>
								<li>
									<b>Meta</b>: <i>RocksDB</i> (open‑sourced by
									Facebook) uses Bloom filters in block‑based
									tables to prune disk reads.
								</li>
								<li>
									<b>Netflix</b>: heavy user of{" "}
									<i>Apache Cassandra</i>, which relies on
									per‑SSTable Bloom filters to skip
									unnecessary disk touches.
								</li>
								<li>
									<b>Google</b>: <i>Bigtable</i> and the HBase
									family use per‑SSTable Bloom filters to
									avoid pointless disk seeks.
								</li>
								<li>
									<b>Redis</b>: the <i>RedisBloom</i> module
									adds Bloom filters widely used for caching
									and dedup at scale.
								</li>
								<li>
									<b>CDNs/Edge (e.g., Cloudflare)</b>: request
									pre‑filtering and cache lookups to reduce
									backend hits.
								</li>
								<li>
									<b>Email/Anti‑spam</b>: large providers
									pre‑filter known senders or content hashes
									with small memory.
								</li>
								<li>
									<b>Streaming</b>: pipelines on Kafka/Kinesis
									use Bloom filters for quick dedup/joins
									before expensive reads.
								</li>
							</ul>
						</section>

						{/* Demo */}
						<section style={{ margin: "32px 0" }}>
							<h2>Live Demo</h2>
							<BloomFilterDemo />
						</section>

						{/* Learnings */}
						<section style={{ margin: "32px 0" }}>
							<h2>What I learned</h2>
							<ul>
								<li>
									Trade-offs between memory and accuracy
									(false positives)
								</li>
								<li>
									Choosing optimal parameters m and k for a
									target error rate
								</li>
								<li>
									Communicating complex topics with
									interactive demos
								</li>
							</ul>
						</section>

						{/* Conclusion */}
						<section style={{ margin: "32px 0" }}>
							<h2>Conclusion</h2>
							<p>
								This project reflects how I learn: by building.
								Bloom Filters pop up everywhere (databases,
								caching, security). Understanding them deeply
								helps me design better systems.
							</p>
						</section>

						<ProjectNavArrows currentTitle="Bloom Filter" />
						<div className="page-footer">
							<Footer />
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default BloomFilter;
