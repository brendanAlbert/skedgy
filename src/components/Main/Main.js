import React from "react";
import "./main.css";
// import CreateSkedg from "../CreateSkedg/CreateSkedg";
import Courses from "../Courses/Courses";
import SkedgyContext from "../../context/Context";

const Main = () => {
	function determineScreen(currentScreen, gradeLevel) {
		switch (currentScreen) {
			case "choiceSchedule":
				return (
					<SkedgyContext.Consumer>
						{
							(context) => (
								<div className="main-container">
									<h2>create my 1st, 2nd, 3rd, 4th choice schedules</h2>
									<Courses gradeLevel={gradeLevel} />
									{/* <CreateSkedg /> */}
								</div>		
							)
						}
					</SkedgyContext.Consumer>
					
				);

			// case "classesByTime":
			// 	return (
			// 		<Fragment>
			// 			<h2>see all classes offered @ the chosen time</h2>
			// 			<Courses />
			// 		</Fragment>
			// 	);
			// case "classesByAGRequirement":
			// 	return (
			// 		<Fragment>
			// 			<h2>
			// 				see all classes offered which fulfill a certain A-G
			// 				requirement
			// 			</h2>
			// 			<Courses />
			// 		</Fragment>
			// 	);
			default:
				// return <CreateSkedg />;
		}
	}

	return (
		<SkedgyContext.Consumer>
			{(context) => (
				<div className="main-container">
					{determineScreen(context.currentScreen, context.gradeLevel)}
				</div>
			)}
		</SkedgyContext.Consumer>
	);
};

export default Main;
