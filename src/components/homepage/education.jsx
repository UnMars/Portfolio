import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/education.css";

const Education = () => {
	return (
		<div className="education">
			<Card
				icon={faGraduationCap}
				title="Education"
				body={
					<div className="education-body">
						<div className="education-item">
							<img
								src="./ensimag.png"
								alt="ensimag"
								className="education-image"
							/>
							<div className="education-info">
								<div className="education-title">ENSIMAG</div>
								<div className="education-subtitle">
									Computer Science at France's best CS engineering school
								</div>
							</div>
							<div className="education-duration">
								2023 - 2026
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Education;
