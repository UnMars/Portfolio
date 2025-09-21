import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./noticeable.jpeg"
								alt="Noticeable"
								className="work-image"
							/>
							<div className="work-info">
								<div className="work-title">Noticeable</div>
								<div className="work-subtitle">
									Founding SWE Intern
								</div>
							</div>
							<div className="work-duration">
								May 2025 - August 2025
							</div>
						</div>
						<div className="work">
							<img
								src="./eosya/eosya.webp"
								alt="eosya"
								className="work-image"
							/>
							<div className="work-info">
								<div className="work-title">Eosya</div>
								<div className="work-subtitle">
									Full-Stack Developer
								</div>
							</div>
							<div className="work-duration">
								May 2024 - August 2025
							</div>
						</div>
						<div className="work">
							<img
								src="./nsigma.webp"
								alt="nsig"
								className="work-image"
							/>
							<div className="work-info">
								<div className="work-title">Nsigma</div>
								<div className="work-subtitle">CIO</div>
							</div>
							<div className="work-duration">
								March 2024 - March 2025
							</div>
						</div>
						<div className="work">
							<img
								src="./nsigma.webp"
								alt="nsig"
								className="work-image"
							/>
							<div className="work-info">
								<div className="work-title">Nsigma</div>
								<div className="work-subtitle">
									Technical Consultant
								</div>
							</div>
							<div className="work-duration">
								November 2023 - March 2024
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
