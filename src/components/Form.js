import React from 'react';
import MarsRover from '../components/MarsRover';
import Timezone from '../components/Timezone';
import EarthDate from '../components/EarthDate';
import MartianSol from '../components/MartianSol';
import Curiosity from '../components/Curiosity';
import OpportunityAndSpirit from '../components/OpportunityAndSpirit';
import SubmitButton from './SubmitButton';

export default class Form extends React.Component {
    state = {

        // DATA FOR API CALL
        rover: null,
        earth_date: null,
        martian_sol: null,
        camera: null,
        
        // DETERMINING WHICH ROVER WAS SELECTED
        curiositySelected: false,
        opportunitySelected: false,
        spiritSelected: false,

        // DETERMINING WHICH TIMEZONE WAS SELECTED
        // AND IF DATE HAS BEEN ENTERED

        earthDateSelected: false,
        earthDateEntered: false,
        martianSolSelected: false,
        martianSolEntered: false,

        cameraSelected: false
    };

    // GETTING DATA FROM CHILD COMPONENTS

    selectRover = (e) => {
        if (e.target.value === 'curiosity') {
            this.setState({ 
                rover: e.target.value, 
                curiositySelected: true
             });
        } else if (e.target.value === 'opportunity') {
            this.setState({ 
                rover: e.target.value, 
                opportunitySelected: true
            });
        } else if (e.target.value === 'spirit') {
            this.setState({ 
                rover: e.target.value, 
                spiritSelected: true
             });
        } 
    }

    selectCamera = (e) => {
            this.setState({ 
                camera: e.target.value, 
                cameraSelected: true 
            });
    }

    // how to only setState when radio button is checked?
    selectTimezone = (e) => {
        if (e.target.value === 'earth_date') {
            this.setState({ 
                timezone: e.target.value, 
                earthDateSelected: true 
            });
        } else if (e.target.value === 'martian_sol'){
            this.setState({ 
                timezone: e.target.value, 
                martianSolSelected: true 
            });
        }
    }

    selectEarthDate = (e) => {
        this.setState({ 
            earth_date: e.target.value, 
            earthDateEntered: true 
        });
    }

    selectMartianSol = (e) => {
        if (e.target.value === '') {
            this.setState({ dateEntered: false });
        } else {
            this.setState({ 
                martian_sol: e.target.value, 
                martianSolEntered: true 
            });
        }        
    }


    render() {

        return (
            <React.Fragment>
                <div className='component' id='form_component'>
                    <h1>Form.js</h1>
                    <form onSubmit={this.props.getMarsRoverData}>

                        {/* CHOOSE MARS ROVER */}

                        <MarsRover selectRover={this.selectRover}/>

                        {/* CHOOSE CAMERA */}

                        {this.state.curiositySelected ? <Curiosity selectCamera={this.selectCamera} /> : null}

                        {this.state.opportunitySelected || this.state.spiritSelected ? <OpportunityAndSpirit selectCamera={this.selectCamera} /> : null}

                        {/* CHOOSE TIMEZONE */}

                        <Timezone selectTimezone={this.selectTimezone} />
                                                
                        {/* ENTER EARTH DATE OR MARTIAN SOL */}

                        {this.state.earthDateSelected ? <EarthDate selectEarthDate={this.selectEarthDate} /> : null}
                      
                        {this.state.martianSolSelected ? <MartianSol selectMartianSol={this.selectMartianSol} /> : null}

                        {
                            ((this.state.curiositySelected || this.state.opportunitySelected || this.state.spiritSelected) && 
                            this.state.timezoneSelected && 
                            (this.state.earthDateEntered || this.state.martianSolEntered) && 
                            this.state.cameraSelected) ? <SubmitButton /> : null}
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

// TO DO:

// Possible to store functions in components to clean up Form.js?

// How to keep track of checked radio buttons?
// (If certain buttons are unchecked, certain components need to disappear)

// How to erase input from one date after switching to the other one?
// (To avoid two inputs, which should make an invalid API call)

// 2.
// show timezone selection ONLY after Mars rover has been chosen
// show date depending on timezone selection

// 3.
// show camera selection ONLY after timezone has been chosen

// 4.
// show submit button ONLY after Mars rover + timezone + camera section 
// have been chosen and date has been entered