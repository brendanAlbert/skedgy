import React, { Fragment, useState } from "react";
import "./head.css";
// import CreateSkedg from "../CreateSkedg/CreateSkedg";
import SkedgyContext from "../../context/Context";

const Head = () => {

	const [active, setActive] = useState(0)

	// const setClassNames = ( grade ) => {
	// 	switch(grade)
	// 	{
	// 		case 9:
	// 			setActive(9)
	// 			break;
	// 		case 10:
	// 			setActive(10)
	// 			break;
	// 		case 11:
	// 			setActive(11)
	// 			break;
	// 		case 12:
	// 			setActive(12)
	// 			break;
	// 	}

	// }

	return (
		<SkedgyContext.Consumer>
			{(context) => (
				<Fragment>
					<div className="nav-container">
						<div className="head-container">
							<h1>Welcome to Skedgy!</h1>
			
							<h2>I am a:</h2>
			
							<div className="grade-level-container">
								<p onClick={() => {
									context.setGradeLevel(9)
									setActive(9)
								}} className={ active === 9 ? 'bub active' : 'bub'}>freshman</p>
								<p onClick={() => {
									context.setGradeLevel(10)
									setActive(10)
								}} className={ active === 10 ? 'bub active' : 'bub'}>sophomore</p>
								<p onClick={() => {
									context.setGradeLevel(11)
									setActive(11)
								}} className={ active === 11 ? 'bub active' : 'bub'}>junior</p>
								<p onClick={() => {
									context.setGradeLevel(12)
									setActive(12)
								}} className={ active === 12 ? 'bub active' : 'bub'}>senior</p>


								{/* <p onClick={() => context.setGradeLevel(10)} className={ active === 10 ? 'bub active' : 'bub'}>sophomore</p>
								<p onClick={() => context.setGradeLevel(11)} className={ active === 11 ? 'bub active' : 'bub'}>junior</p>
								<p onClick={() => context.setGradeLevel(12)} className={ active === 12 ? 'bub active' : 'bub'}>senior</p> */}
							</div>

						</div>

						<div className="head-container">
							<h3>As a student, I want to</h3>	

							<p className="bub">pick my top 4 choice schedules</p>
							<p className="bub">generate possible schedules</p>

						</div>
					</div>
	
					
				</Fragment>
			)}
		</SkedgyContext.Consumer>
		
	);
};

export default Head;

/*
 <div className="grade-level-container">
                <div>09<span>th</span></div>
                <div className="grade-divider"></div>
                <div className="locked">10<span>th</span></div>
                <div className="grade-divider"></div>
                <div className="locked">11<span>th</span></div>
                <div className="grade-divider"></div>
                <div className="locked">12<span>th</span></div>
            </div>
*/
