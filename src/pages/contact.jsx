import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={56} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							I'm always open to new opportunities,
							collaborations, or simply exchanging about tech,
							backend, or system design challenges. If you want to
							discuss a project, share feedback, or explore how we
							could work together, feel free to reach out directly
							at{" "}
							<a
								href={`mailto:${INFO.main.email}`}
								className="contact-link"
							>
								{INFO.main.email}
							</a>
							. You can also connect with me on{" "}
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
								className="contact-link"
							>
								{" "}
								LinkedIn
							</a>{" "}
							or follow my updates on{" "}
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
								className="contact-link"
							>
								{" "}
								GitHub
							</a>
							. I value impactful exchanges and try to answer as
							quickly as possible. Looking forward to connecting!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
