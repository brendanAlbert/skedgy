import React, { Fragment, useState } from "react";
import "./createSkedg.css";

const CreateSkedg = () => {

	let periods = [0, 1, 2, 3, 4, 5, 6];

	const [choices, setChoices] = useState([]);

	const handleAdd = () => {

		if (choices.length === 0) {
			setChoices([...choices, "1st"]);
		} else if (choices.length === 1) {
			setChoices([...choices, "2nd"]);
		} else if (choices.length === 2) {
			setChoices([...choices, "3rd"]);
		} else if (choices.length === 3) {
			setChoices([...choices, "4th"]);
		}
	};

	return (
		<Fragment>
			<div className="skedg-container">
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

export default CreateSkedg;