import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { AnimatePresence } from "framer-motion";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import ProlificJoiner from "./pages/projects/ProlificJoiner";
import Eosya from "./pages/projects/Eosya";
import Noticeable from "./pages/projects/Noticeable";
import NsigmaMobileApp from "./pages/projects/NsigmaMobileApp";
import NsigmaLegalDocumentsRAG from "./pages/projects/NsigmaLegalDocumentsRAG";
import JavaDecaCompiler from "./pages/projects/JavaDecaCompiler";
import X86OSConception from "./pages/projects/X86OSConception";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	const location = useLocation();

	return (
		<div className="App">
			<AnimatePresence mode="wait" initial={false}>
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
						path="/projects/Noticeable"
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
			</AnimatePresence>
		</div>
	);
}

export default App;
