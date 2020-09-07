import React, { Fragment } from "react";
import "./head.css";
// import CreateSkedg from "../CreateSkedg/CreateSkedg";
import SkedgyContext from "../../context/Context";

const Head = () => {
	return (
		<SkedgyContext.Consumer>
			{(context) => (
				<Fragment>
					<div className="nav-container">
						<div className="head-container">
							<h1>Welcome to Skedgy!</h1>

							<h3>As a 9th grader, I want to</h3>

							<div className="choice-menu">
								<p
									onClick={() =>
										context.showScreen("choiceSchedule")
									}
									className="bub"
								>
									pick my top 4 choice schedules
								</p>
								<p className="bub">
									generate possible schedules
								</p>
								<p
									onClick={() =>
										context.showScreen("create9thSchedule")
									}
									className="bub"
								>
									create freshman schedule
								</p>
							</div>
						</div>
					</div>
				</Fragment>
			)}
		</SkedgyContext.Consumer>
	);
};

export default Head;
