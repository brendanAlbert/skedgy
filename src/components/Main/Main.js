import React, { Fragment } from "react";
import "./main.css";
import CreateSkedg from "../CreateSkedg/CreateSkedg";
import Courses from "../Courses/Courses";
import SkedgyContext from "../../context/Context";

const Main = () => {

	function determineScreen(param) {
		switch(param) {
			case 'choiceSchedule':
				console.log('going into 1st case')
				return <Fragment>
					<Courses />
					<CreateSkedg />
				</Fragment>
			case 'classesByTeacher':
				console.log('going into 2nd case')
				return (<h2>see all classes offered by each teacher</h2>);
			case 'classesByTime':
				console.log('going into 2nd case')
				return (<h2>see all classes offered @ the chosen time</h2>);
			case 'classesByAGRequirement':
				console.log('going into 2nd case')
				return (<h2>see all classes offered which fulfill a certain A-G requirement</h2>);
			case 'chooseFromAvailable':
				console.log('going into 2nd case')
				return (<h2>see all classes offered during chosen period</h2>);
			default:
				return <CreateSkedg />;
		}
	}

	return (
		<SkedgyContext.Consumer>
			{ context => (

				
					<div className="main-container">
						{determineScreen(context.currentScreen)}
					</div>
				
			
			)}

		</SkedgyContext.Consumer>
	);
};

export default Main;
