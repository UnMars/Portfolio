import React from "react";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/ctfs.css";

const Ctfs = () => {
	return (
		<div className="ctfs">
			<Card
				icon={faFlagCheckered}
				title="CTF & Hackathons"
				body={
					<div className="ctfs-body">
						<div className="ctf">
							<div className="ctf-info">
								<div className="ctf-title">
									Aleo × zSociety Web3 Hackathon
								</div>
								<div className="ctf-subtitle">
									1st place / 250+ teams ($100k prize pool)
								</div>
							</div>
							<div className="ctf-rank">2025</div>
						</div>

						<div className="ctf">
							<div className="ctf-info">
								<div className="ctf-title">
									H7CTF International
								</div>
								<div className="ctf-subtitle">
									Rank 195/527 teams
								</div>
							</div>
							<div className="ctf-rank">2024</div>
						</div>

						<div className="ctf">
							<div className="ctf-info">
								<div className="ctf-title">PatriotCTF</div>
								<div className="ctf-subtitle">
									Rank 81/1360 teams
								</div>
							</div>
							<div className="ctf-rank">2024</div>
						</div>

						<div className="ctf">
							<div className="ctf-info">
								<div className="ctf-title">GreHack</div>
								<div className="ctf-subtitle">
									Rank 21/38 teams
								</div>
							</div>
							<div className="ctf-rank">2024</div>
						</div>

						<div className="ctf">
							<div className="ctf-info">
								<div className="ctf-title">TUCTF</div>
								<div className="ctf-subtitle">
									Rank 19/485 teams
								</div>
							</div>
							<div className="ctf-rank">2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Ctfs;
