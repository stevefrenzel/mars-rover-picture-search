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
        rover: null,
        earth_date: null,
        martian_sol: null,
        camera: null,
        
        earthDateEntered: false,
        martianSolEntered: false,

        roverSelected: false,
        earthDateSelected: false,
        martianSolSelected: false,
        cameraSelected: false,
        curiositySelected: false,
        opportunityOrSpiritSelected: false
    };

    // GETTING DATA FROM CHILD COMPONENTS

    selectRover = (e) => {
        this.setState({ rover: e.target.value, roverSelected: true });
    }

    // how to only setState when radio button is checked?
    selectTimezone = (e) => {
        if (e.target.value === 'earth_date') {
            this.setState({ timezone: e.target.value, earthDateSelected: true });
        } else if (e.target.value === 'martian_sol'){
            this.setState({ timezone: e.target.value, martianSolSelected: true });
        }
    }

    selectEarthDate = (e) => {
        this.setState({ earth_date: e.target.value, earthDateEntered: true });
    }

    selectMartianSol = (e) => {
        if (e.target.value === '') {
            this.setState({ dateEntered: false });
        } else {
            this.setState({ martian_sol: e.target.value, martianSolEntered: true });
        }        
    }

    selectCamera = (e) => {
        if (e.target.value === 'curiosity') {
            this.setState({ camera: e.target.value, curiositySelected: true });
        } else if (e.target.value === 'opportunity' || 'spirit') {
            this.setState({ camera: e.target.value, opportunityOrSpiritSelected: true });
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

                        {/* CHOOSE TIMEZONE */}

                        {this.state.roverSelected ? <Timezone selectTimezone={this.selectTimezone} /> : null}
                                                
                        {/* ENTER EARTH DATE OR MARTIAN SOL */}

                        {this.state.earthDateSelected ? <EarthDate selectEarthDate={this.selectEarthDate} /> : null}
                      
                        {this.state.martianSolSelected ? <MartianSol selectMartianSol={this.selectMartianSol} /> : null}
                        
                        {/* CHOOSE CAMERA */}

                        <Curiosity selectCamera={this.selectCamera} />

                        <OpportunityAndSpirit selectCamera={this.selectCamera} />

                        {
                            (this.state.roverSelected && 
                            this.state.timezoneSelected &&  
                            this.state.cameraSelected) && 
                            (this.state.earthDateEntered || this.state.martianSolEntered) ? 
                            <SubmitButton /> : 
                            null
                        }
                        
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

// TO DO:

// make all inputs required BEFORE submitting!

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