import React, { Fragment } from 'react'

const App = () => {

    let choices = ['1st', '2nd', '3rd']
    return (
        <Fragment>
            <h1>Welcome to Skedgy!</h1>

            <h3>as a student I want to be able to:</h3>
            <ul>
                { choices.map( choice => (

                    <li>create my {choice} choice schedule</li>
                )
                )}
            </ul>
            <h4>i also want to be able to:</h4>
            <p>see all classes offered by a teacher</p>
            <p>see all classes offered @ x time</p>
            <p>see all classes offered which fulfill a certain A-G requirement</p>

            <h4>when building a schedule, I want to:</h4>
            <p>choose from available 0-6 period classes</p>



        </Fragment>
    )
}

export default App