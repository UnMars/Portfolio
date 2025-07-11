import { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { AnimatePresence } from "framer-motion";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";
const Homepage = lazy(() => import("./pages/homepage"));
const About = lazy(() => import("./pages/about"));
const Projects = lazy(() => import("./pages/projects"));
const Contact = lazy(() => import("./pages/contact"));
const Notfound = lazy(() => import("./pages/404"));
const ProlificJoiner = lazy(() => import("./pages/projects/ProlificJoiner"));
const Eosya = lazy(() => import("./pages/projects/Eosya"));
const Noticeable = lazy(() => import("./pages/projects/Noticeable"));
const NsigmaMobileApp = lazy(() => import("./pages/projects/NsigmaMobileApp"));
const NsigmaLegalDocumentsRAG = lazy(() =>
	import("./pages/projects/NsigmaLegalDocumentsRAG")
);
const JavaDecaCompiler = lazy(() =>
	import("./pages/projects/JavaDecaCompiler")
);
const X86OSConception = lazy(() => import("./pages/projects/X86OSConception"));

import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			setTimeout(() => {
				ReactGA.initialize(TRACKING_ID);
			}, 0);
		}
	}, []);

	const location = useLocation();

	return (
		<div className="App">
			<AnimatePresence mode="wait" initial={false}>
				<Suspense fallback={<div>Chargement…</div>}>
					<Routes location={location} key={location.pathname}>
						<Route path="/" element={<Homepage />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<Notfound />} />
						<Route
							path="/projects/prolific-joiner"
							element={<ProlificJoiner />}
						/>
						<Route path="/projects/eosya" element={<Eosya />} />
						<Route
							path="/projects/noticeable"
							element={<Noticeable />}
						/>
						<Route
							path="/projects/nsigma-mobile-app"
							element={<NsigmaMobileApp />}
						/>
						<Route
							path="/projects/nsigma-legal-documents-rag"
							element={<NsigmaLegalDocumentsRAG />}
						/>
						<Route
							path="/projects/java-deca-compiler"
							element={<JavaDecaCompiler />}
						/>
						<Route
							path="/projects/x86-os-conception"
							element={<X86OSConception />}
						/>
					</Routes>
				</Suspense>
			</AnimatePresence>
			<SpeedInsights />
		</div>
	);
}

export default App;
