import React from "react";
import SkedgyContext from "./Context";
import { Component } from "react";

class Provider extends Component {
	state = {
		currentScreen: "choiceSchedule",
		gradeLevel: 0,
		screenOptions: [
			"choiceSchedule",
			"classesByTime",
			"classesByAGRequirement",
		],
		gradeLevelOptions : [
			9, 10, 11, 12
		]
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
					gradeLevel: this.state.gradeLevel,
					setGradeLevel: (level) => {
						this.setState({ gradeLevel : level} , () => {
							console.log('this.state after setting grade level')
							console.log(this.state)
						})
					}
				}}
			>
				{this.props.children}
			</SkedgyContext.Provider>
		);
	}
}

export default Provider;
