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
			"course name": "Precalculus + Trig",
			"course code": "N730",
			prereq: "math III (C or better)",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "C",
		},
		{
			"course name": "Precalculus + Trig Honors",
			"course code": "N739",
			prereq: "math III honors(C or better) or math III with A",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "C",
		},
		{
			"course name": "Trigonometry + Statistics",
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
		{
			"course name": "AP Spanish Literature",
			"course code": "F987",
			prereq: "AP Spanish Language (C or better)",
			"grade levels": [11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "French I",
			"course code": "F701",
			prereq: null,
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "French II",
			"course code": "F702",
			prereq: "French I (C or better)",
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "French III",
			"course code": "F703",
			prereq: "French II (C or better)",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "French IV IB SL",
			"course code": "F707",
			prereq: "French III (C or better)",
			"grade levels": [11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "AP French",
			"course code": "F976",
			prereq: "French IV (C or better)",
			"grade levels": [11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "Chinese I",
			"course code": "F751",
			prereq: null,
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "Online Chinese I",
			"course code": "F751E",
			prereq: null,
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "Chinese II",
			"course code": "F752",
			prereq: "Chinese I (C or better)",
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "Online Chinese II",
			"course code": "F752E",
			prereq: "Chinese I (C or better)",
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "Chinese III",
			"course code": "F753",
			prereq: "Chinese II (C or better)",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "Online Chinese III",
			"course code": "F753E",
			prereq: "Chinese II (C or better)",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "Chinese III H: Entrepreneurship",
			"course code": "F762",
			prereq: "Chinese II (C or better)",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "Mandarin IB SL",
			"course code": "F756",
			prereq: "Chinese III (C or better)",
			"grade levels": [11, 12],
			"a-g_satisfies": "E",
		},
		{
			"course name": "AP Chinese",
			"course code": "F755",
			prereq: "Mandarin IB (C or better)",
			"grade levels": [11, 12],
			"a-g_satisfies": "E",
		},
	];

	let art_courses = [
		{
			"course name": "Art I",
			"course code": "A701",
			prereq: null,
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "Art II",
			"course code": "A703",
			prereq: "Art I (C or better)",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "Art III",
			"course code": "A710",
			prereq: "Art II (C or better)",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "Art IV",
			"course code": "A712",
			prereq: "Art III (C or better)",
			"grade levels": [11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "AP Studio Art",
			"course code": "A987",
			prereq: "teacher approval",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "Theater Arts I",
			"course code": "L916",
			prereq: null,
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "Theater Arts II",
			"course code": "L917",
			prereq: 'Theater 1',
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "Theater Arts III",
			"course code": "L918",
			prereq: 'Theater 1I',
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "Drama Workshop",
			"course code": "L914",
			prereq: 'Theater 1II and teacher approval',
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "Media Writing and Production",
			"course code": "O734",
			prereq: 'teacher approval',
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "Bass Clef Chorus (Male)",
			"course code": "M800",
			prereq: null,
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "Treble Clef Chorus",
			"course code": "M810",
			prereq: null,
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "Concert Choir (Mixed)",
			"course code": "M830",
			prereq: 'teacher approval',
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "Chamber Singers Honors",
			"course code": "M841",
			prereq: 'teacher approval',
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "Adv. Treble Ensemble",
			"course code": "M850",
			prereq: 'teacher approval',
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "Symphonic Band (Spring)",
			"course code": "M720",
			prereq: null,
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "Color Guard",
			"course code": "M770",
			prereq: null,
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "String Orchestra",
			"course code": "M740",
			prereq: null,
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "Drumline",
			"course code": "M772",
			prereq: null,
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "AP Music Theory",
			"course code": "M870",
			prereq: null,
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "History of Rock and Roll",
			"course code": "M991",
			prereq: null,
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "Graphic Novels",
			"course code": "A780",
			prereq: null,
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "F",
		},
		{
			"course name": "AP Art History",
			"course code": "A976",
			prereq: null,
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "F",
		},
	]

	let requirements = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
	let periods = [0,1,2,3,4,5,6]

	// let mathCourseNames = math_courses.map((course) => course["course name"]);
	// let scienceCourseNames = science_courses.map(
	// 	(course) => course["course name"]
	// );

	let mathCourses = math_courses.map((course) => course);
	let scienceCourses = science_courses.map((course) => course);
	let languageCourses = language_courses.map((course) => course);
	let artCourses = art_courses.map((course) => course);

	const [filterBy, setFilterBy] = useState("");
	const [filteredCourses, setFilteredCourses] = useState([]);

	const [filterInputToggled, setFilterInputToggle] = useState(false)
	const [filterPeriodsToggled, setFilterPeriodsToggle] = useState(false)
	const [filterRequirementsToggled, setFilterRequirementsToggle] = useState(false)

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
		let languagefilteredCourses = languageCourses.filter((course) =>
			course["course name"]
				.toLowerCase()
				.includes(event.target.value.toLowerCase())
		);
		let artfilteredCourses = artCourses.filter((course) =>
			course["course name"]
				.toLowerCase()
				.includes(event.target.value.toLowerCase())
		);

		allFilteredCourses = allFilteredCourses.concat(mathfilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(sciencefilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(languagefilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(artfilteredCourses);

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
		let languagefilteredCourses = languageCourses.filter((course) =>
			course["course name"].toLowerCase().includes("")
		);
		let artfilteredCourses = artCourses.filter((course) =>
			course["course name"].toLowerCase().includes("")
		);

		allFilteredCourses = allFilteredCourses.concat(mathfilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(sciencefilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(languagefilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(artfilteredCourses);

		setFilteredCourses(allFilteredCourses);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getCourseClassNameAndColor = (course) => {
		if (course["a-g_satisfies"].includes("C")) {
			return `red info-sphere`;
		} else if (course["a-g_satisfies"].includes("D")) {
			return `purple info-sphere`;
		} else if (course["a-g_satisfies"].includes("E")) {
			return `green info-sphere`;
		} else if (course["a-g_satisfies"].includes("F")) {
			return `coral info-sphere`;
		}
	};

	const handleToggle = ( requirement ) => {
		console.log('requirement ' + requirement + ' toggled')

		switch(requirement)
		{
			case 'input_toggle':
				setFilterInputToggle( ! filterInputToggled )
				break;
			case 'periods_toggle':
				setFilterPeriodsToggle( ! filterPeriodsToggled )
				break;
			case 'requirements_toggle':
				setFilterRequirementsToggle( ! filterRequirementsToggled )
				break;
			
		}
	}

	return (
		<Fragment>
			<div className="courses-container">
				{/* <h4 className="title">Filter by available courses</h4> */}

				<div className="filter-container">

					<div className="first-filter-row">
					<button onClick={ () => handleToggle('input_toggle')} className="hide-show-btn" >
						{ !filterInputToggled ? '\u2212' : '\u002B' }
					</button>

						<div className={ filterInputToggled ? "first-filter-inner-row hide" : "first-filter-inner-row show" }>
							<input
								type="text"
								value={filterBy}
								onChange={handleChange}
							/>
							{/* {filterBy !== "" && <p>filtering by : {filterBy}</p>} */}

							<div className="filter-general-options-container">
								<div>show all classes / reset filters</div>
								<button className="reset-btn">&times;</button>

							</div>
						</div>
					</div>
					
					<div className="filter-requirements-pills-container">
					<button onClick={ () => handleToggle('periods_toggle')} className="hide-show-btn" >
						{ !filterPeriodsToggled ? '\u2212' : '\u002B' }
					</button>

						<p>show only classes available at toggled periods:</p>
					<div className={ filterPeriodsToggled ? "periods-inner hide" : "periods-inner show" }>
						<div className="requirements-toggle-container">

							{ periods.map( (period, index) => (
								<div key={index} className="toggle-widget"><span>{period, index}</span>
									<label className="switch">
										<input type="checkbox"/>
										<span onClick={ () => handleToggle(period)}
										className="slider round"></span>
									</label>
								</div>

							)) }
							
						</div>
					</div>
					</div>
					<div className="filter-requirements-pills-container">
						<button onClick={ () => handleToggle('requirements_toggle')} className="hide-show-btn" >
							{ !filterRequirementsToggled ? '\u2212' : '\u002B' }
						</button>

							<p>toggle to show classes which fulfill A-G requirements:</p>
						<div className={ filterRequirementsToggled ? "periods-inner hide" : "periods-inner show" }>
							<div className="requirements-toggle-container">

								{ requirements.map( (rqrmnt , idx) => (
									<div key={idx} className="toggle-widget"><span>{rqrmnt}</span>
										<label className="switch">
											<input type="checkbox"/>
											<span onClick={ () => handleToggle(rqrmnt)}
											className="slider round"></span>
										</label>
									</div>

								)) }
								
							</div>
						</div>
					</div>
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
								<p className="course-info">{course["course name"]}</p>
							</div>
						))}
				</div>
			</div>
		</Fragment>
	);
};

export default Courses;
