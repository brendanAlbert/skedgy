import React, { Fragment } from "react";
import "./head.css";

const Head = () => {
	return (
		<Fragment>
			<div className="head-container">
				<h1>Welcome to Skedgy!</h1>

				<h2>I am a:</h2>

				<div className="grade-level-container">
					<p className="bub">freshman</p>
					<p className="bub">sophomore</p>
					<p className="bub">junior</p>
					<p className="bub">senior</p>
				</div>
			</div>
		</Fragment>
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
