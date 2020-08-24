import React, { Fragment, useState, useEffect } from "react";
import "./courses.css";
// import algebra1 from "./algebra_1.png";
// import algebra2 from './algebra_2.png'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

const CourseChip = ({ course, index, wait }) => {

	const [show, setShow] = useState(false)
	useEffect(()=>{
		setTimeout(()=>{
			setShow(true)
		}, wait)
		// eslint-disable-next-line
	},[])

	const getCourseClassNameAndColor = (course) => {
		if (course["a-g_satisfies"].includes("A")) {
			return `orange info-sphere`;
		} else if (course["a-g_satisfies"].includes("B")) {
			return `blue info-sphere`;
		} else if (course["a-g_satisfies"].includes("C")) {
			return `red info-sphere`;
		} else if (course["a-g_satisfies"].includes("D")) {
			return `purple info-sphere`;
		} else if (course["a-g_satisfies"].includes("E")) {
			return `green info-sphere`;
		} else if (course["a-g_satisfies"].includes("F")) {
			return `coral info-sphere`;
		} else if (course["a-g_satisfies"].includes("G")) {
			return `lightblue info-sphere`;
		}
	};

	return (
		
		 show === true && (
				<div 
					
					key={index} className="course-chip fadeIn" id={index}>
						<div
							className={getCourseClassNameAndColor(
								course
							)}
						></div>
						<p className="course-info">{course["course name"]}</p>
					</div>

		)
	)
}

const Courses = ( { gradeLevel }) => {

	let chosenGradeLevel = [gradeLevel]

	let history_soc_sci_courses = [
		{
			"course name": "American Government",
			"course code": "H600",
			prereq: null,
			"grade levels": [12],
			"a-g_satisfies": "A",
		},
		{
			"course name": "American Government Online",
			"course code": "H600E",
			prereq: null,
			"grade levels": [12],
			"a-g_satisfies": "A",
		},
		{
			"course name": "AP European History",
			"course code": "H986",
			prereq: null,
			"grade levels": [10,11,12],
			"a-g_satisfies": "A",
		},
		{
			"course name": "AP Govt + Politics U.S.",
			"course code": "H966",
			prereq: null,
			"grade levels": [12],
			"a-g_satisfies": "A",
		},
		{
			"course name": "AP Human Geography",
			"course code": "H900",
			prereq: null,
			"grade levels": [9,10,11,12],
			"a-g_satisfies": "A",
		},
		{
			"course name": "AP U.S. History",
			"course code": "H996",
			prereq: null,
			"grade levels": [11],
			"a-g_satisfies": "A",
		},
		{
			"course name": "History of the Americas IB",
			"course code": "H985",
			prereq: null,
			"grade levels": [12],
			"a-g_satisfies": "A",
		},
		{
			"course name": "U.S. History",
			"course code": "H500",
			prereq: null,
			"grade levels": [11],
			"a-g_satisfies": "A",
		},
		{
			"course name": "U.S. History Online",
			"course code": "H500E",
			prereq: null,
			"grade levels": [11],
			"a-g_satisfies": "A",
		},
		{
			"course name": "World History",
			"course code": "H400",
			prereq: null,
			"grade levels": [10],
			"a-g_satisfies": "A",
		},
		{
			"course name": "World History Online",
			"course code": "H400E",
			prereq: null,
			"grade levels": [10],
			"a-g_satisfies": "A",
		},
	]

	let english_courses = [
		{
			"course name": "AP English Lang. + Comp.",
			"course code": "L512",
			prereq: null,
			"grade levels": [11],
			"a-g_satisfies": "B",
		},
		{
			"course name": "AP English Lit. + Comp.",
			"course code": "L996",
			prereq: null,
			"grade levels": [12],
			"a-g_satisfies": "B",
		},
		{
			"course name": "CSU Expository Reading + Writing",
			"course code": "",
			prereq: null,
			"grade levels": [12],
			"a-g_satisfies": "B",
		},
		{
			"course name": "ELD Tran Eng 9",
			"course code": "",
			prereq: null,
			"grade levels": [9],
			"a-g_satisfies": "B",
		},
		{
			"course name": "ELD Tran Eng 10",
			"course code": "",
			prereq: null,
			"grade levels": [10],
			"a-g_satisfies": "B",
		},
		{
			"course name": "ELD Tran Eng 11",
			"course code": "",
			prereq: null,
			"grade levels": [11],
			"a-g_satisfies": "B",
		},
		{
			"course name": "ELD Tran Eng 12",
			"course code": "",
			prereq: null,
			"grade levels": [12],
			"a-g_satisfies": "B",
		},
		{
			"course name": "English 9 + the Performing Arts",
			"course code": "L310",
			prereq: null,
			"grade levels": [9],
			"a-g_satisfies": "B",
		},
		{
			"course name": "English 9",
			"course code": "L300",
			prereq: null,
			"grade levels": [9],
			"a-g_satisfies": "B",
		},
		{
			"course name": "English 9 Honors",
			"course code": "L309",
			prereq: null,
			"grade levels": [9],
			"a-g_satisfies": "B",
		},
		{
			"course name": "English 10",
			"course code": "L400",
			prereq: null,
			"grade levels": [10],
			"a-g_satisfies": "B",
		},
		{
			"course name": "English 10 Honors",
			"course code": "L409",
			prereq: null,
			"grade levels": [10],
			"a-g_satisfies": "B",
		},
		{
			"course name": "English 11",
			"course code": "L500",
			prereq: null,
			"grade levels": [11],
			"a-g_satisfies": "B",
		},
		{
			"course name": "English 11 Online",
			"course code": "L500E",
			prereq: null,
			"grade levels": [11],
			"a-g_satisfies": "B",
		},
		{
			"course name": "English IB HL1",
			"course code": "",
			prereq: null,
			"grade levels": [11],
			"a-g_satisfies": "B",
		},
		{
			"course name": "English IB SL",
			"course code": "",
			prereq: null,
			"grade levels": [11,12],
			"a-g_satisfies": "B",
		},
		{
			"course name": "English 12",
			"course code": "L660",
			prereq: null,
			"grade levels": [12],
			"a-g_satisfies": "B",
		},
		{
			"course name": "English 12 Online",
			"course code": "L660E",
			prereq: null,
			"grade levels": [12],
			"a-g_satisfies": "B",
		},
	]

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
		{
			"course name": "AP Computer Science A",
			"course code": "N996",
			prereq: "",
			"grade levels": [11, 12],
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
		{
			"course name": "AP Computer Science Principles",
			"course code": "S995",
			prereq: "",
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "D",
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

	let elective_courses = [
		{
			"course name": "Foundations of Tech & Engineering",
			"course code": "O605",
			prereq: null,
			"grade levels": [9, 10, 11, 12],
			"a-g_satisfies": "G",
		},
		{
			"course name": "Adv. Tech & Engineering",
			"course code": "O594",
			prereq: "Foundations of Tech & Engineering",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "G",
		},
		{
			"course name": "Professional Internship",
			"course code": "O252",
			prereq: "Foundations of Tech & Engineering",
			"grade levels": [10, 11, 12],
			"a-g_satisfies": "G",
		},
		{
			"course name": "AP Macroeconomics",
			"course code": "H630",
			prereq: "",
			"grade levels": [12],
			"a-g_satisfies": "G",
		},
		{
			"course name": "Psychology",
			"course code": "H701",
			prereq: "",
			"grade levels": [10,11,12],
			"a-g_satisfies": "G",
		},
		{
			"course name": "Psychology Online",
			"course code": "H701E",
			prereq: "",
			"grade levels": [10,11,12],
			"a-g_satisfies": "G",
		},
		{
			"course name": "AP Psychology",
			"course code": "H956",
			prereq: "",
			"grade levels": [11,12],
			"a-g_satisfies": "G",
		},
		{
			"course name": "Theory of Knowledge IB",
			"course code": "H702",
			prereq: "",
			"grade levels": [12],
			"a-g_satisfies": "G",
		},
		{
			"course name": "Journalism",
			"course code": "L920",
			prereq: "",
			"grade levels": [9,10,11,12],
			"a-g_satisfies": "G",
		},
		{
			"course name": "Model UN Honors",
			"course code": "H401",
			prereq: "",
			"grade levels": [10,11,12],
			"a-g_satisfies": "G",
		},
	]

	let requirements = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
	let periods = [0,1,2,3,4,5,6]

	let histsocCourses = history_soc_sci_courses.map((course) => course);
	let englishCourses = english_courses.map((course) => course);

	let mathCourses = math_courses.map((course) => course);
	let scienceCourses = science_courses.map((course) => course);
	let languageCourses = language_courses.map((course) => course);
	let artCourses = art_courses.map((course) => course);

	let electiveCourses = elective_courses.map((course) => course);

	const [filterBy, setFilterBy] = useState("");
	const [filteredCourses, setFilteredCourses] = useState([]);

	const [filterInputToggled, setFilterInputToggle] = useState(false)
	const [filterPeriodsToggled, setFilterPeriodsToggle] = useState(false)
	const [filterRequirementsToggled, setFilterRequirementsToggle] = useState(false)

	const [toggledPeriods, setToggledPeriods] = useState({
		'0' : false,
		'1' : false,
		'2' : false,
		'3' : false,
		'4' : false,
		'5' : false,
		'6' : false,
	})
	const [toggledRequirements, setToggledRequirements] = useState({
		'A' : false,
		'B' : false,
		'C' : false,
		'D' : false,
		'E' : false,
		'F' : false,
		'G' : false,

	})

	const handleChange = (event) => {
		setFilterBy(event.target.value);

		let allFilteredCourses = [];

		let histsocfilteredCourses = histsocCourses.filter((course) =>
			course["course name"]
				.toLowerCase()
				.includes(event.target.value.toLowerCase()) && course['grade levels'].includes(gradeLevel))
		let englishfilteredCourses = englishCourses.filter((course) =>
			course["course name"]
				.toLowerCase()
				.includes(event.target.value.toLowerCase()) && course['grade levels'].includes(gradeLevel))
		let mathfilteredCourses = mathCourses.filter((course) =>
			course["course name"]
				.toLowerCase()
				.includes(event.target.value.toLowerCase()) && course['grade levels'].includes(gradeLevel))
		let sciencefilteredCourses = scienceCourses.filter((course) =>
			course["course name"]
				.toLowerCase()
				.includes(event.target.value.toLowerCase()) && course['grade levels'].includes(gradeLevel))
		let languagefilteredCourses = languageCourses.filter((course) =>
			course["course name"]
				.toLowerCase()
				.includes(event.target.value.toLowerCase()) && course['grade levels'].includes(gradeLevel))
		let artfilteredCourses = artCourses.filter((course) =>
			course["course name"]
				.toLowerCase()
				.includes(event.target.value.toLowerCase()) && course['grade levels'].includes(gradeLevel))
		let electivefilteredCourses = electiveCourses.filter( course => 
			course["course name"]
				.toLowerCase()
				.includes(event.target.value.toLowerCase()) && course['grade levels'].includes(gradeLevel))

		allFilteredCourses = allFilteredCourses.concat(histsocfilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(englishfilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(mathfilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(sciencefilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(languagefilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(artfilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(electivefilteredCourses);

		setFilteredCourses(allFilteredCourses);
	};

	const showAllCourses = () => {
		let allFilteredCourses = [];

		console.log('grade level is ' + chosenGradeLevel)

		let histsocfilteredCourses = histsocCourses.filter((course) =>
			course["course name"].toLowerCase().includes("") && course['grade levels'].includes(gradeLevel)
		);
		let englishfilteredCourses = englishCourses.filter((course) =>
			course["course name"].toLowerCase().includes("") && course['grade levels'].includes(gradeLevel)
		);
		let mathfilteredCourses = mathCourses.filter((course) =>
			course["course name"].toLowerCase().includes("") && course['grade levels'].includes(gradeLevel)
		);
		let sciencefilteredCourses = scienceCourses.filter((course) =>
			course["course name"].toLowerCase().includes("") && course['grade levels'].includes(gradeLevel)
		);
		let languagefilteredCourses = languageCourses.filter((course) =>
			course["course name"].toLowerCase().includes("") && course['grade levels'].includes(gradeLevel)
		);
		let artfilteredCourses = artCourses.filter((course) =>
			course["course name"].toLowerCase().includes("") && course['grade levels'].includes(gradeLevel)
		);
		let electivefilteredCourses = electiveCourses.filter((course) =>
			course["course name"].toLowerCase().includes("") && course['grade levels'].includes(gradeLevel)
		);

		allFilteredCourses = allFilteredCourses.concat(histsocfilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(englishfilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(mathfilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(sciencefilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(languagefilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(artfilteredCourses);
		allFilteredCourses = allFilteredCourses.concat(electivefilteredCourses);

		setFilteredCourses(allFilteredCourses);
	}

	useEffect(() => {
		
		showAllCourses()
		// eslint-disable-next-line
	}, []);

	// const getCourseClassNameAndColor = (course) => {
	// 	if (course["a-g_satisfies"].includes("A")) {
	// 		return `orange info-sphere`;
	// 	} else if (course["a-g_satisfies"].includes("B")) {
	// 		return `blue info-sphere`;
	// 	} else if (course["a-g_satisfies"].includes("C")) {
	// 		return `red info-sphere`;
	// 	} else if (course["a-g_satisfies"].includes("D")) {
	// 		return `purple info-sphere`;
	// 	} else if (course["a-g_satisfies"].includes("E")) {
	// 		return `green info-sphere`;
	// 	} else if (course["a-g_satisfies"].includes("F")) {
	// 		return `coral info-sphere`;
	// 	} else if (course["a-g_satisfies"].includes("G")) {
	// 		return `lightblue info-sphere`;
	// 	}
	// };

	const resetAllFilters = () => {
		setToggledPeriods({
			'0' : false,
			'1' : false,
			'2' : false,
			'3' : false,
			'4' : false,
			'5' : false,
			'6' : false,
		})
		setToggledRequirements({
			'A' : false,
			'B' : false,
			'C' : false,
			'D' : false,
			'E' : false,
			'F' : false,
			'G' : false,
	
		})

		let checks = document.querySelectorAll('input:checked')
		checks = [...checks]
		checks.map( chkbx => chkbx.checked = false)
		showAllCourses()
	}

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
			case 'reset':
				setFilterBy('')
				showAllCourses()
				resetAllFilters()
				break;
			default:
				break;	
		}
	}

	const handlePeriodToggle = ( period ) => {
		let newToggledPeriod = toggledPeriods;
		newToggledPeriod[period] = !newToggledPeriod[period]

		console.log('new toggle matrix')
		console.log(newToggledPeriod)
		setToggledPeriods(newToggledPeriod)
	}

	const handleRequirementsToggle = ( requirement ) => {
		
		let newToggledRequirements = toggledRequirements;
		newToggledRequirements[requirement] = !newToggledRequirements[requirement]

		let allFilteredCourses = [];

		for (const [key, value] of Object.entries(newToggledRequirements)) {

			// console.log(`key = ${key} value = ${value}`)
			if( value && key === 'A')
			{
				let histsocfilteredCourses = histsocCourses.filter((course) =>
					course["course name"].toLowerCase().includes("") && course['grade levels'].includes(gradeLevel)
				);
				allFilteredCourses = allFilteredCourses.concat(histsocfilteredCourses);
			}
			else if( value && key === 'B')
			{
				let englishfilteredCourses = englishCourses.filter((course) =>
					course["course name"].toLowerCase().includes("") && course['grade levels'].includes(gradeLevel)
				);
				allFilteredCourses = allFilteredCourses.concat(englishfilteredCourses);
			}
			else if( value && key === 'C')
			{
				let mathfilteredCourses = mathCourses.filter((course) =>
					course["course name"].toLowerCase().includes("") && course['grade levels'].includes(gradeLevel)
				);
				allFilteredCourses = allFilteredCourses.concat(mathfilteredCourses);
			}
			else if( value && key === 'D')
			{
				let sciencefilteredCourses = scienceCourses.filter((course) =>
					course["course name"].toLowerCase().includes("") && course['grade levels'].includes(gradeLevel)
				);
				allFilteredCourses = allFilteredCourses.concat(sciencefilteredCourses);
			}
			else if( value && key === 'E')
			{
				let languagefilteredCourses = languageCourses.filter((course) =>
					course["course name"].toLowerCase().includes("") && course['grade levels'].includes(gradeLevel)
				);
				allFilteredCourses = allFilteredCourses.concat(languagefilteredCourses);
			}
			else if( value && key === 'F')
			{
				let artfilteredCourses = artCourses.filter((course) =>
					course["course name"].toLowerCase().includes("") && course['grade levels'].includes(gradeLevel)
				);
				allFilteredCourses = allFilteredCourses.concat(artfilteredCourses);
			}
			else if( value && key === 'G')
			{
				let electivefilteredCourses = electiveCourses.filter((course) =>
					course["course name"].toLowerCase().includes("") && course['grade levels'].includes(gradeLevel)
				);
				allFilteredCourses = allFilteredCourses.concat(electivefilteredCourses);
			}
		}
			
		setFilteredCourses(allFilteredCourses);

		console.log('new requirement matrix')
		console.log(newToggledRequirements)
		setToggledPeriods(newToggledRequirements)
	}

	return (
		<Fragment>
			<div className="courses-container">
				{/* <h4 className="title">Filter by available courses</h4> */}

				<div className="filter-container">

{/* first-filter-row */}
					<div className="filter-requirements-pills-container">
						<button onClick={ () => handleToggle('input_toggle')} className="hide-show-btn" >
							{ !filterInputToggled ? '\u2212' : '\u002B' }
						</button>

						<p>search for classes by keyword:</p>
						<div className={ filterInputToggled ? "first-filter-inner-row hide" : "first-filter-inner-row show" }>
							<input
								type="text"
								value={filterBy}
								onChange={handleChange}
							/>
							{/* {filterBy !== "" && <p>filtering by : {filterBy}</p>} */}

							<div className="filter-general-options-container">
								<div>show all classes / reset filters</div>
								<button onClick={ () => handleToggle('reset') }
								className="reset-btn">&times;</button>

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
								<div key={index} className="toggle-widget"><span>{period}</span>
									<label className="switch">
										<input type="checkbox"/>
										<span onClick={ () => handlePeriodToggle(period)}
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
											<span onClick={ () => handleRequirementsToggle(rqrmnt)}
											className="slider round"></span>
										</label>
									</div>

								)) }
								
							</div>
						</div>
					</div>
				</div>


				<div className="course-grid-wrapper">
					{filteredCourses.length === 0 && (
						<p>not showing any courses at the moment</p>
					)}
						
					<div className="course-grid">

							{filteredCourses.length > 0 &&
								filteredCourses.map((course, index) => (
									
									<CourseChip key={index} course={course} index={index} wait={30 * index}/>
												
								))}
						
					</div>
						
				</div>
			</div>
		</Fragment>
	);
};

export default Courses;
