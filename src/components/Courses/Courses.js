import React, { Fragment } from "react";
import "./courses.css";

const Courses = () => {

    // let periods = [0, 1, 2, 3, 4, 5, 6];
    let courses = [
        'algebra 1',
        'algebra 2',
        'geometry',
        'pre-calculus with trigonometry',
        'english 9',
        'english 10',
        'english 11',
        'english 12',
        'biology',
        'physics',
        'chemistry',
        'art 1',
        'art 2',
        'physical education',
    ]

	// const [choices, setChoices] = useState([]);

	// const handleAdd = () => {

	// 	if (choices.length === 0) {
	// 		setChoices([...choices, "1st"]);
	// 	} else if (choices.length === 1) {
	// 		setChoices([...choices, "2nd"]);
	// 	} else if (choices.length === 2) {
	// 		setChoices([...choices, "3rd"]);
	// 	} else if (choices.length === 3) {
	// 		setChoices([...choices, "4th"]);
	// 	}
	// };

	return (
		<Fragment>
			<div className="courses-container">
				<h4>Here are all available courses</h4>

				<div className="course-grid">
					{courses.length > 0 &&
						courses.map((course, index) => (
							<div key={index} className="course">
								<h6>{course}</h6>
							</div>
						))}
				</div>
			</div>
		</Fragment>
	);
};

export default Courses;
