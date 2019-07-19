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
                <element className='component' id='form_component'>
                <form onSubmit={this.props.getMarsRoverData}>

                    {/* CHOOSE MARS ROVER */}

                    <MarsRover />

                    {/* CHOOSE TIMEZONE */}

                    <Timezone />

                    {/* ENTER DATE */}

                    {/* ADD CONDITIONAL TO SHOW EITHER */}
                    {/* EarthDate.js OR MartianSol.js */}

                    {/* CHOOSE CAMERA */}

                    {/* ADD CONDITIONAL TO SHOW EITHER */}
                    {/* Curiosity.js OR OpportunityAndSpirit.js */}

                    <button>Get Photos</button>

                </form>
                </element>
            </React.Fragment>
        );
    }
}

// TO DO:

// radio button is "jumping", need to isolate each section

// show timezone selection ONLY after Mars rover has been chosen
// show date depending on timezone selection

// show camera selection ONLY after timezone has been chosen

// show submit button ONLY after Mars rover + timezone + camera section 
// have been chosen and date has been entered