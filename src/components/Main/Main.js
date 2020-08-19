import React, { Fragment, useState, useEffect } from "react";
import "./main.css";

const Main = () => {
	// let choices = ["1st", "2nd", "3rd", "4th"];
	// let choices = ["1st"];
	let periods = [0, 1, 2, 3, 4, 5, 6];

	const [choices, setChoices] = useState([]);

	const handleAdd = () => {
		console.log("handadd btn pushed");

		if (choices.length === 0) {
			console.log("length of newChoices = 0 so we push 1st");
			setChoices([...choices, "1st"]);
			console.log(choices);
		} else if (choices.length === 1) {
			// choices.push("2nd");
			setChoices([...choices, "2nd"]);
			console.log(choices);
		} else if (choices.length === 2) {
			// choices.push("3rd");
			setChoices([...choices, "3rd"]);
			console.log(choices);
		} else if (choices.length === 3) {
			// choices.push("4th");
			setChoices([...choices, "4th"]);
			console.log(choices);
		}
		// console.log("setting new choice to ");
		// console.log(newChoices);
	};

	// useEffect(() => {}, [choices]);

	return (
		<Fragment>
			<div className="main-container">
				<h2>Here are my 1st, 2nd, 3rd and 4th choice schedules</h2>

				<div className="schedules-container">
					{choices.length > 0 &&
						choices.map((schedj, index) => (
							<div key={index} className="schedule">
								<h3>{schedj} choice</h3>
								<div className="choices-container">
									{periods.map((period, idx) => (
										<div key={idx} className="period">
											{period} period
										</div>
									))}
								</div>
							</div>
						))}
				</div>

				{choices.length < 4 && (
					<div id="add_schedule" onClick={handleAdd}>
						+<span>add new schedule</span>
					</div>
				)}
			</div>
		</Fragment>
	);
};

export default Main;
