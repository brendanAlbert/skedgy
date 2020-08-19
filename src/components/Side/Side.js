import React, { Fragment } from "react";
import "./side.css";

const Side = () => {
	return (
		<Fragment>
			<div className="side-container">
				<h3>As a student, I want to</h3>

				<p>create a 1st, 2nd, 3rd, 4th choice schedule</p>
				<p>see all classes offered by a teacher</p>
				<p>see all classes offered @ x time</p>
				<p>
					see all classes offered which fulfill a certain A-G
					requirement
				</p>

				<h3>when building a schedule i want to:</h3>
				<p>choose from available 0-6 period classes</p>
			</div>
		</Fragment>
	);
};

export default Side;
