import React, { Fragment } from "react";
import "./side.css";
import SkedgyContext from "../../context/Context";

const Side = () => {
	// screenOptions : ['choiceSchedule', 'classesByTeacher', 'classesByTime', 'classesByAGRequirement', 'chooseFromAvailable']
	return (
		<SkedgyContext.Consumer>
			{(context) => (
				<Fragment>
					<div className="side-container">
						<h3>As a student, I want to</h3>

						<p
							className="side-btn"
							onClick={() => context.showScreen("choiceSchedule")}
						>
							create a 1st, 2nd, 3rd, 4th choice schedule
						</p>
						{/* <p className="side-btn" onClick={ () => context.showScreen('classesByTeacher')}>see all classes offered by a teacher</p> */}
						<p
							className="side-btn"
							onClick={() => context.showScreen("classesByTime")}
						>
							see all classes offered @ x time
						</p>
						<p
							className="side-btn"
							onClick={() =>
								context.showScreen("classesByAGRequirement")
							}
						>
							see all classes offered which fulfill a certain A-G
							requirement
						</p>
					</div>
				</Fragment>
			)}
		</SkedgyContext.Consumer>
	);
};

export default Side;
