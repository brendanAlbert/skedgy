import React, { Fragment } from 'react'
import Head from './components/Head/Head'
import Side from './components/Side/Side'

const App = () => {

    // let choices = ['1st', '2nd', '3rd']
    return (
        <Fragment>

            <div className="dashboard">
                <div className="top-nav">
                    <Head/>
                </div>
                <div className="left-nav">
                    <Side/>
                </div>
                <div className="main-content">here is the main nav</div>

            </div>
            



        </Fragment>
    )
}

export default App