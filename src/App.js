import React, { Fragment } from "react";

import Login from "./components/Login/Login";
import Provider from "./context/Provider";

const App = () => {
	return (
		<Provider>
			<Fragment>
				<Login />
			</Fragment>
		</Provider>
	);
};

export default App;
