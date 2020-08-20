import React from 'react'
import SkedgyContext from './Context'
import { Component } from 'react';

class Provider extends Component {
    state = {
        currentScreen : 'choiceSchedule',
        screenOptions : ['choiceSchedule', 'classesByTeacher', 'classesByTime', 'classesByAGRequirement', 'chooseFromAvailable']
        // screens : {
        //     choiceSchedule            : { showing : true },
        //     classesByTeacher          : { showing : false },
        //     classesByTime             : { showing : false },
        //     classesByAGRequirement    : { showing : false },
        //     chooseFromAvailable       : { showing : false },
        // },
        // keys : Object.keys(this.state.screens),
        // values : Object.values(this.state.screens),
        // entries : Object.entries(this.state.screens)
    }

    
    render() {
        
        // console.log(this.state.keys)

        // console.log(this.state.values)

        // console.log(this.state.entries)
        
        return (
            
            <SkedgyContext.Provider value = {{
                currentScreen: this.state.currentScreen,
                showScreen: pickedScreen => {
                    console.log(pickedScreen)
                    this.setState({ currentScreen : pickedScreen },  () => {
                        console.log('this.state')
                        console.log(this.state)
                    })
                   
                }
            }} >
                {this.props.children}
            </SkedgyContext.Provider>
        )
    }
}

export default Provider