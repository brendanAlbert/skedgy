import React, { Fragment } from "react";
import Head from "./components/Head/Head";
// import Side from "./components/Side/Side";
import Main from "./components/Main/Main";
import Provider from './context/Provider'

const App = () => {
	// let choices = ['1st', '2nd', '3rd']
	return (

        <Provider>
            <Fragment>
                <div className="dashboard">
                    <div className="top-nav">
                        <Head />
                    </div>
                    {/* <div className="left-nav">
                        <Side />
                    </div> */}
                    <div className="main-content">
                        <Main />
                    </div>
                </div>
            </Fragment>
        </Provider>
	);
};

export default App;
