import React, { Fragment, useState } from "react";
import "./courses.css";
import algebra1 from './algebra_1.png'
// import algebra2 from './algebra_2.png'

const Courses = () => {

    let initial_courses = [
        'algebra 1',
        'algebra 2',
        'geometry',
        'pre-calc + trig',
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

    const [filterBy, setFilterBy] = useState('');
    const [filteredCourses, setFilteredCourses] = useState(initial_courses);

    const handleChange = (event) => {
        // this.setState({ filterby : event.target.value })
        console.log(`setting filter to : ${event.target.value}`)
        setFilterBy(event.target.value);

        let newfilteredCourses = initial_courses.filter( course => course.includes(event.target.value))
        setFilteredCourses(newfilteredCourses);
    }

	return (
		<Fragment>
			<div className="courses-container">
				<h4 className="title">Filter by available courses</h4>

                <div className="filter-container">
                    <input type="text" value={filterBy} onChange={handleChange}/>
                    { filterBy !== '' && ( 
                        <p>filtering by : {filterBy}</p>
                        )
                    }
                </div>

				<div className="course-grid">
					{filteredCourses.length > 0 &&
						filteredCourses.map((course, index) => (
							// <div key={index} className="course" id={index}>
							// 	<h6>{course}</h6>
                            //     {/* <img id={'algebra'+index} className="course-img" src={algebra1} alt="course"/> */}
							// </div>
							<div key={index} className="course-chip" id={index}>
                                <img id={'algebra'+index} className="course-chip__img" src={algebra1} alt="course"/>
								<p>{course}</p>
							</div>

                            
						))}
				</div>
			</div>
		</Fragment>
	);
};

export default Courses;
