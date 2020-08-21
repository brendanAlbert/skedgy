import React, { Fragment, useState, useEffect } from "react";
import "./courses.css";
// import algebra1 from "./algebra_1.png";
// import algebra2 from './algebra_2.png'

const Courses = () => {
	let math_courses = [
		{
			"course name": "Math 1A",
			"course code": "N254",
			prereq: null,
			"grade levels": [9],
			"a-g_satisfies": "C",
		},
		{
			"course name": "Math 1B",
			"course code": "N255",
			prereq: null,
			"grade levels": [10],
			"a-g_satisfies": "C",
		},
		{
			"course name": "Math I",
			"course code": "N249",
			prereq: null,
			"grade levels": [9],
			"a-g_satisfies": "C",
		},
		{
			"course name": "Math I Honors",
			"course code": "N248",
			prereq: "math 8 A grades",
			"grade levels": [9],
			"a-g_satisfies": "C",
		},
		{
			"course name": "Math II",
			"course code": "N735",
			prereq: "math I (C or better)",
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "C",
		},
		{
			"course name": "Math II Honors",
			"course code": "N736",
			prereq: "math I Honors(C or better) or math I with A",
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "C",
		},
		{
			"course name": "Math III",
			"course code": "N715",
			prereq: "math II C or better",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "C",
		},
		{
			"course name": "Math III Honors",
			"course code": "N716",
			prereq: "math II Honors(C or better) or math II with A",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "C",
		},
		{
			"course name": "Precalculus/Trig",
			"course code": "N730",
			prereq: "math III (C or better)",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "C",
		},
		{
			"course name": "Precalculus/Trig Honors",
			"course code": "N739",
			prereq: "math III honors(C or better) or math III with A",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "C",
		},
		{
			"course name": "Trigonometry/Statistics",
			"course code": "N741/N742",
			prereq: "math III (C or better)",
			"grade levels": [11, 12],
			"a-g_satisfies": "C",
		},
		{
			"course name": "Algebra II Finance",
			"course code": "N711",
			prereq: "math II",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "C",
		},
		{
			"course name": "AP Calculus AB",
			"course code": "N986",
			prereq: "Precalc/Trig (C or better)",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "C",
		},
		{
			"course name": "AP Calculus BC",
			"course code": "N987",
			prereq: "Precalc/Trig (C or better)",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "C",
		},
		{
			"course name": "AP Statistics",
			"course code": "N994",
			prereq: "Precalc/Trig (C or better)",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "C",
		},
	];

	let science_courses = [
		{
			"course name": "Earth Science",
			"course code": "S853",
			prereq: null,
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "D - physical",
		},
		{
			"course name": "Biology",
			"course code": "S750",
			prereq: "math II concurrent enrollment recommended",
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "D - life",
		},
		{
			"course name": "Biology Honors",
			"course code": "S759",
			prereq: "math II concurrent enrollment recommended",
			"grade levels": [9, 10],
			"a-g_satisfies": "D - life",
		},
		{
			"course name": "Physiology",
			"course code": "S790",
			prereq: null,
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "D - life",
		},
		{
			"course name": "Physiology H",
			"course code": "S799",
			prereq: null,
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "D - life",
		},
		{
			"course name": "Chemistry",
			"course code": "S760",
			prereq: "math III concurrent enrollment",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "D - physical",
		},
		{
			"course name": "Chemistry H",
			"course code": "S769",
			prereq: "math III honors concurrent enrollment",
			"grade levels": [10, 11],
			"a-g_satisfies": "D - physical",
		},
		{
			"course name": "Conceptual Chemistry",
			"course code": "S763",
			prereq: null,
			"grade levels": [11],
			"a-g_satisfies": "D - physical",
		},
		{
			"course name": "IB Environmental Sys * Soc",
			"course code": "S971",
			prereq: null,
			"grade levels": [11, 12],
			"a-g_satisfies": "D - life or physical",
		},
		{
			"course name": "AP Biology",
			"course code": "S976",
			prereq: "Biology",
			"grade levels": [11, 12],
			"a-g_satisfies": "D - life",
		},
		{
			"course name": "IB Biology",
			"course code": "S978",
			prereq: "AP Biology",
			"grade levels": [11, 12],
			"a-g_satisfies": "D - life",
		},
		{
			"course name": "AP Chemistry",
			"course code": "S984",
			prereq: "math III completed or concurrent enrollment",
			"grade levels": [11, 12],
			"a-g_satisfies": "D - physical",
		},
		{
			"course name": "Physics",
			"course code": "S780",
			prereq: "math III completed or concurrent enrollment",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "D - physical",
		},
		{
			"course name": "AP Physics 1",
			"course code": "S997",
			prereq: "math III completed or concurrent enrollment",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "D - physical",
		},
		{
			"course name": "AP Physics C",
			"course code": "S995",
			prereq: "AP Calculus completed or concurrent enrollment",
			"grade levels": [11, 12],
			"a-g_satisfies": "D - physical",
		},
	];

	let language_courses = [
		{
			"course name": "Spanish I",
			"course code": "F730",
			prereq: null,
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "Spanish II",
			"course code": "F731",
			prereq: "Spanish I (C or better)",
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "Online Spanish II",
			"course code": "F731E",
			prereq: "Spanish I (C or better)",
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "Spanish III",
			"course code": "F732",
			prereq: "Spanish II (C or better)",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "Online Spanish III",
			"course code": "F732E",
			prereq: "Spanish II (C or better)",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "Spanish IV H: Patient Care",
			"course code": "F746",
			prereq: "Spanish III (C or better)",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "Spanish IV IB SL",
			"course code": "F737",
			prereq: "Spanish III (C or better)",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "AP Spanish Language",
			"course code": "F986",
			prereq: "Spanish IV (C or better) or teacher recommendation",
			"grade levels": [11, 12],
			"a-g_satisfies": "E",
		},
	];

	// let mathCourseNames = math_courses.map((course) => course["course name"]);
	// let scienceCourseNames = science_courses.map(
	// 	(course) => course["course name"]
	// );

	let mathCourses = math_courses.map((course) => course);
	let scienceCourses = science_courses.map((course) => course);

	const [filterBy, setFilterBy] = useState("");
	const [filteredCourses, setFilteredCourses] = useState([]);

	const handleChange = (event) => {
		setFilterBy(event.target.value);

		let allFilteredCourses = [];

		// let mathfilteredCourses = mathCourseNames.filter((course_name) =>
		// 	course_name.toLowerCase().includes(event.target.value.toLowerCase())
		// );
		// let sciencefilteredCourses = scienceCourseNames.filter((course_name) =>
		// 	course_name.toLowerCase().includes(event.target.value.toLowerCase())
		// );

		let mathfilteredCourses = mathCourses.filter((course) =>
			course["course name"]
				.toLowerCase()
				.includes(event.target.value.toLowerCase())
		);
		let sciencefilteredCourses = scienceCourses.filter((course) =>
			course["course name"]
				.toLowerCase()
				.includes(event.target.value.toLowerCase())
		);

		allFilteredCourses = allFilteredCourses.concat(mathfilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(sciencefilteredCourses);

		setFilteredCourses(allFilteredCourses);
	};

	useEffect(() => {
		let allFilteredCourses = [];

		// let mathfilteredCourses = mathCourseNames.filter((course_name) =>
		// 	course_name.toLowerCase().includes("")
		// );
		// let sciencefilteredCourses = scienceCourseNames.filter((course_name) =>
		// 	course_name.toLowerCase().includes("")
		// );

		let mathfilteredCourses = mathCourses.filter((course) =>
			course["course name"].toLowerCase().includes("")
		);
		let sciencefilteredCourses = scienceCourses.filter((course) =>
			course["course name"].toLowerCase().includes("")
		);

		allFilteredCourses = allFilteredCourses.concat(mathfilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(sciencefilteredCourses);

		setFilteredCourses(allFilteredCourses);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getCourseClassNameAndColor = (course) => {
		if (course["a-g_satisfies"].includes("C")) {
			return `red info-sphere`;
		} else if (course["a-g_satisfies"].includes("D")) {
			return `purple info-sphere`;
		}

		return `purple info-sphere`;
	};

	return (
		<Fragment>
			<div className="courses-container">
				<h4 className="title">Filter by available courses</h4>

				<div className="filter-container">
					<input
						type="text"
						value={filterBy}
						onChange={handleChange}
					/>
					{filterBy !== "" && <p>filtering by : {filterBy}</p>}
				</div>

				<div className="course-grid">
					{filteredCourses.length > 0 &&
						filteredCourses.map((course, index) => (
							<div key={index} className="course-chip" id={index}>
								<div
									className={getCourseClassNameAndColor(
										course
									)}
								></div>
								<p>{course["course name"]}</p>
							</div>
						))}
				</div>
			</div>
		</Fragment>
	);
};

export default Courses;
