import React from 'react';
import MarsRover from '../components/MarsRover';
import Timezone from '../components/Timezone';
import EarthDate from '../components/EarthDate';
import MartianSol from '../components/MartianSol';
import Curiosity from '../components/Curiosity';
import OpportunityAndSpirit from '../components/OpportunityAndSpirit';

export default class Form extends React.Component {
    state = {
        roverSelected: false,
        timezoneSelected: false,
        dateEntered: false,
        cameraSelected: false
    };

    // SWITCHING STATE TO TRUE
    // possible to write it DRY?

    marsRoverSelected = () => {
        this.setState({
            roverSelected: true
        })
    }

    timezoneSelected = () => {
        this.setState({
            timezoneSelected: true
        })
    }

    dateEntered = () => {
        this.setState({
            dateEntered: true
        })
    }

    cameraSelected = () => {
        this.setState({
            cameraSelected: true
        })
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

                        <MarsRover />

                        {/* CHOOSE TIMEZONE */}

                        <Timezone />

                        {/* ENTER DATE */}

                        {/* ADD CONDITIONAL TO SHOW EITHER */}
                        <EarthDate />
                        {/* OR */}
                        <MartianSol />

                        {/* CHOOSE CAMERA */}

                        {/* ADD CONDITIONAL TO SHOW EITHER */}
                        <Curiosity />
                        {/* OR */}
                        <OpportunityAndSpirit />

                        <button>Get Photos</button>

                    </form>
                </div>
            </React.Fragment>
        );
    }
}

// TO DO:

// 1.
// pass props from child components 
// MarsRover, Timezone, EarthDate, MartianSol, Curiosity and OpportunityAndSpirit
// to parent component Form

// 2.
// show timezone selection ONLY after Mars rover has been chosen
// show date depending on timezone selection

// 3.
// show camera selection ONLY after timezone has been chosen

// 4.
// show submit button ONLY after Mars rover + timezone + camera section 
// have been chosen and date has been entered