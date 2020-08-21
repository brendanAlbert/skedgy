import React from "react";
import SkedgyContext from "./Context";
import { Component } from "react";

class Provider extends Component {
	state = {
		currentScreen: "choiceSchedule",
		screenOptions: [
			"choiceSchedule",
			"classesByTime",
			"classesByAGRequirement",
		],
	};

	render() {
		return (
			<SkedgyContext.Provider
				value={{
					currentScreen: this.state.currentScreen,
					showScreen: (pickedScreen) => {
						console.log(pickedScreen);
						this.setState({ currentScreen: pickedScreen }, () => {
							console.log("this.state");
							console.log(this.state);
						});
					},
				}}
			>
				{this.props.children}
			</SkedgyContext.Provider>
		);
	}
}

export default Provider;
