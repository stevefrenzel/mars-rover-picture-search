import React from 'react';
import MarsRover from '../components/MarsRover';
import Timezone from '../components/Timezone';
import EarthDate from '../components/EarthDate';
import MartianSol from '../components/MartianSol';
import Curiosity from '../components/Curiosity';
import OpportunityAndSpirit from '../components/OpportunityAndSpirit';

export default class Form extends React.Component {
    state = {
        rover: null,
        roverSelected: false,
        timezoneSelected: false,
        earth_date: null,
        martian_sol: null,
        dateEntered: false,
        camera: null,
        cameraSelected: false,
    };

    // GETTING DATA FROM CHILD COMPONENTS

    selectRover = (e) => {
        this.setState({
            rover: e.target.value,
            roverSelected: true
        });
    }

    selectTimezone = (e) => {
        this.setState({
            timezone: e.target.value,
            timezoneSelected: true
        });
    }

    selectEarthDate = (e) => {
        this.setState({
            earth_date: e.target.value,
            dateEntered: true
        });
    }

    selectMartianSol = (e) => {
        this.setState({
            martian_sol: e.target.value,
            dateEntered: true
        });
    }

    selectCamera = (e) => {
        this.setState({
            camera: e.target.value,
            cameraSelected: true
        });
    }

    // RENDERING SECTIONS

    renderTimezoneSelection() {
    }

    renderDate() {
    }

    renderCameraSelection() {
    }

    renderSubmitButton() {
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

                        <Timezone selectTimezone={this.selectTimezone}/>

                        {/* ENTER DATE */}

                        {/* ADD CONDITIONAL TO SHOW EITHER */}
                        <EarthDate selectEarthDate={this.selectEarthDate}/>
                        {/* OR */}
                        <MartianSol selectMartianSol={this.selectMartianSol}/>

                        {/* CHOOSE CAMERA */}

                        {/* ADD CONDITIONAL TO SHOW EITHER */}
                        <Curiosity selectCamera={this.selectCamera}/>
                        {/* OR */}
                        <OpportunityAndSpirit selectCamera={this.selectCamera}/>

                        <button>Get Photos</button>

                    </form>
                </div>
            </React.Fragment>
        );
    }
}

// TO DO:

// How to erase input from one date if you've entered it but then change it?
// (To avoid two inputs, which would make an invalid API call)

// 2.
// show timezone selection ONLY after Mars rover has been chosen
// show date depending on timezone selection

// 3.
// show camera selection ONLY after timezone has been chosen

// 4.
// show submit button ONLY after Mars rover + timezone + camera section 
// have been chosen and date has been entered