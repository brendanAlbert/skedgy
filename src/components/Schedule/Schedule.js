import React, { useState, useEffect, Fragment } from "react";
import "./schedule.css";
import SkedgyContext from "../../context/Context";

const Schedule = () => {

    const [pickerToggled, setPicker] = useState(false);
    const [healthPickerToggled, setHealthToggle] = useState(false);
    const [physEdToggled, setPhysEdToggle] = useState(false);
    const [englishToggled, setEnglishToggle] = useState(false);
    const [mathToggled, setMathToggle] = useState(false);

    const [healthClassPicked, setHealthClass] = useState(null)

    const [ninthGradeClassesObject, setNinthGradeClassesObject] = useState(null)
    const [currentPeriod, setCurrentPeriod] = useState(null)

    const [zeroPeriodPicked, setZeroPeriod] = useState(null);
    const [zeroPeriodClasses, setZeroPeriodClasses] = useState([])
    const [zeroPeriodClassesLoaded, setZeroPeriodClassesLoaded] = useState(false)
    const [zeroPeriodFetched, setZeroPeriodFetch] = useState(false);

    const [periodPicked, setPeriodPicked] = useState({
        'health': false,
        'zero': false,
        'first': false,
        'second': false,
        'third': false,
        'fourth': false,
        'fifth': false,
        'sixth': false,
    })

    // function fetchAvailableClasses() {


    //     if (ninthGradeClassesObject === null) {
    //         fetch(`http://192.168.0.12:4000/9th`)
    //             .then(response => response.json())
    //             .then(data => {

    //                 setNinthGradeClassesObject(data)
    //                 // setZeroPeriodClasses(data['9th']['0_period'])
    //                 // setZeroPeriodClassesLoaded(true)
    //             })
    //     } else {
    //         // setZeroPeriodClasses(ninthGradeClassesObject['9th']['0_period'])
    //         // setZeroPeriodClassesLoaded(true)
    //     }

    // }

    const showAvailableCoursesForChosenPeriod = () => {

        if (periodPicked.health) {
            return (
                <h5>available online health classes</h5>

            )
        }
        else if (periodPicked.zero) {
            return (
                <h5>available zero period classes</h5>
            )
        }
    }

    const showTabsForChosenPeriod = () => {
        if (periodPicked.health) {
            return (

                <Fragment>
                    <div className="picker-tab sunflower-tab" onClick={() => setPhysEdToggle(!physEdToggled)}>
                        online health during summer
                    </div>
                    <div className="picker-tab sunflower-tab" onClick={() => setPhysEdToggle(!physEdToggled)}>
                        online health during school year
                    </div>
                </Fragment>


            )
        }
        else if (periodPicked.zero) {

        }
    }

    const displayOnlineHealthTab = () => {

        return (

            <Fragment>
                {healthClassPicked === null && (
                    <div className="schedule-container__inner__period--available  sunflower-tab-border" onClick={() => setPeriodPicked(
                        {
                            'health': true, 'zero': false, 'first': false,
                            'second': false, 'third': false, 'fourth': false,
                            'fifth': false, 'sixth': false,
                        }
                    )}>
                        <div className="schedule-container__inner__period_wrapper">
                            <div className="schedule-container__inner__period--add-button">
                                <span></span>
                                <span></span>
                            </div>
                            <div className="schedule-container__inner__period--text">
                                online health
                            </div>
                        </div>
                    </div>
                )}
                {healthClassPicked !== null && (
                    <div className="schedule-container__inner__period sunflower-tab" >
                        <div className="schedule-container__inner__period_wrapper">
                            <div className="schedule-container__inner__period--text">
                                health: {healthClassPicked}
                            </div>
                            <div className="schedule-container__inner__period--edit-button" onClick={() => setHealthToggle(true)}>
                                edit
                            </div>
                        </div>
                    </div>
                )}
            </Fragment>
        )

    }

    // const displayZeroPeriodTab = () => {
    //     return (
    //         <Fragment>
    //                  {zeroPeriodPicked === null && (

    //                         <div className="schedule-container__inner__period--available not-selected " onClick={() => {

    //                             setCurrentPeriod('zero')
    //                             setPicker(!pickerToggled)
    //                             setZeroPeriod('choosing')

    //                             if (!zeroPeriodFetched) {
    //                                 showSectionsWithAvailableZeroPeriods()
    //                                 setZeroPeriodFetch(true)
    //                             }

    //                         }}>
    //                             <div className="schedule-container__inner__period_wrapper">
    //                                 <div className="schedule-container__inner__period--add-button">
    //                                     <span></span>
    //                                     <span></span>
    //                                 </div>
    //                                 <div className="schedule-container__inner__period--text">
    //                                     period 0 * optional
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         )}
    //                         {zeroPeriodPicked !== null && (

    //                         <div className={zeroPeriodPicked === 'choosing' ? 'schedule-container__inner__period--available not-selected' : 'schedule-container__inner__period bara-red-tab'} >
    //                             <div className="schedule-container__inner__period_wrapper">
    //                                 <div className="schedule-container__inner__period--text">
    //                                     0 period: {zeroPeriodPicked}
    //                                 </div>
    //                                 <div className="schedule-container__inner__period--edit-button" onClick={() => {
    //                                     setCurrentPeriod('zero')
    //                                     setPicker(true)
    //                                 }}>
    //                                     edit
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         )}
    //         </Fragment>
    //     )
    // }

    useEffect(() => {

        if (ninthGradeClassesObject === null) {
            fetch(`http://192.168.0.12:4000/9th`)
                .then(response => response.json())
                .then(data => {
                    setNinthGradeClassesObject(data)
                })
        }

    }, [zeroPeriodClasses, periodPicked, ninthGradeClassesObject])

    return (
        <SkedgyContext.Consumer>
            {(context) => (
                <div className="schedule-container">
                    <h1>freshman schedule builder</h1>

                    <div className={pickerToggled ? "period-picker picker-show" : "period-picker picker-hide"}>
                        <h4>freshman sections still needed</h4>

                        {showAvailableCoursesForChosenPeriod()}

                        <div className="picker-tabs">

                            {showTabsForChosenPeriod()}

                            {zeroPeriodClassesLoaded && currentPeriod === 'zero' && zeroPeriodClasses['physed'].length > 0 && (

                                <div className="picker-tab energos-tab" onClick={() => setPhysEdToggle(!physEdToggled)}>
                                    physical education
                                </div>

                            )}


                            {zeroPeriodClassesLoaded && currentPeriod === 'zero' && zeroPeriodClasses['english'].length > 0 && (

                                <div className="picker-tab bara-red-tab" onClick={() => setEnglishToggle(!englishToggled)}>
                                    english
                                </div>

                            )}


                            {zeroPeriodClassesLoaded && currentPeriod === 'zero' && zeroPeriodClasses['math'].length > 0 && (

                                <div className="picker-tab  blue-martina-tab" onClick={() => setMathToggle(!mathToggled)}>
                                    math
                                </div>

                            )}


                            {zeroPeriodClassesLoaded && currentPeriod === 'zero' && zeroPeriodClasses['science'].length > 0 && (

                                <div className="picker-tab pixelated-grass-tab">
                                    science
                                </div>

                            )}



                            {zeroPeriodClassesLoaded && currentPeriod === 'zero' && zeroPeriodClasses['college_career'].length > 0 && (

                                <div className="picker-tab marine-blue-tab">
                                    college and career readiness
                                </div>

                            )}


                            {zeroPeriodClassesLoaded && currentPeriod === 'zero' && zeroPeriodClasses['lang_elective'].length > 0 && (

                                <div className="picker-tab red-pigment-tab">
                                    foreign language or elective
                                </div>

                            )}

                        </div>

                    </div>

                    <div className={englishToggled ? "period-picker picker-show" : "period-picker picker-hide"}>

                        <h4>english sections available</h4>

                        {currentPeriod === 'zero' && (
                            <div className="picker-tabs">
                                <div className="picker-tab bara-red-tab" onClick={() => {
                                    setZeroPeriod('english 9')
                                    setEnglishToggle(false)
                                    setPicker(false)
                                }}>
                                    english 9
                                </div>
                                <div className="picker-tab bara-red-tab" onClick={() => {
                                    setZeroPeriod('english 9 honors')
                                    setEnglishToggle(false)
                                    setPicker(false)
                                }}>
                                    english 9 honors
                                </div>
                                <div className="picker-tab bara-red-tab" onClick={() => {
                                    setZeroPeriod('ucci english 9: performing arts')
                                    setEnglishToggle(false)
                                    setPicker(false)
                                }}>
                                    ucci english 9: performing arts
                                </div>

                            </div>
                        )}

                    </div>







                    <div className="schedule-container__inner">

                        {displayOnlineHealthTab()}

                        {/* { displayZeroPeriodTab() } */}

                    </div>

                </div>
            )}
        </SkedgyContext.Consumer>
    );
};

export default Schedule;
