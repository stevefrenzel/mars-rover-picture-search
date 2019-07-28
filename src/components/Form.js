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
                curiositySelected: true,
                opportunitySelected: false,
                spiritSelected: false
             });
        } else if (e.target.value === 'opportunity') {
            this.setState({ 
                rover: e.target.value, 
                opportunitySelected: true,
                curiositySelected: false,
                spiritSelected: false
            });
        } else if (e.target.value === 'spirit') {
            this.setState({ 
                rover: e.target.value, 
                spiritSelected: true,
                curiositySelected: false,
                opportunitySelected: false
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
                earthDateSelected: true,
                martianSolSelected: false
            });
        } else if (e.target.value === 'martian_sol'){
            this.setState({ 
                timezone: e.target.value, 
                martianSolSelected: true,
                earthDateSelected: false
            });
        }
    }

    selectEarthDate = (e) => {
        if (!e.target.value) {
            this.setState({
                earthDateEntered: false
            });
        } else {
            this.setState({
                earth_date: e.target.value,
                earthDateEntered: true
            });
        }
    }

    selectMartianSol = (e) => {
        if (!e.target.value) {
            this.setState({
                martianSolEntered: false
            }); 
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
                    <form onSubmit={this.props.getMarsRoverData}>

                            <MarsRover selectRover={this.selectRover}/>

                            {this.state.curiositySelected ? <Curiosity selectCamera={this.selectCamera} /> : null}

                            {this.state.opportunitySelected || this.state.spiritSelected ? <OpportunityAndSpirit selectCamera={this.selectCamera} /> : null}

                            {this.state.cameraSelected ? <Timezone selectTimezone={this.selectTimezone} /> : null}

                            {this.state.earthDateSelected ? <EarthDate selectEarthDate={this.selectEarthDate} /> : null}
                        
                            {this.state.martianSolSelected ? <MartianSol selectMartianSol={this.selectMartianSol} /> : null}

                            {
                                ((this.state.curiositySelected || this.state.opportunitySelected || this.state.spiritSelected) && 
                                (this.state.earthDateEntered || this.state.martianSolEntered) && 
                                this.state.cameraSelected) ? <SubmitButton /> : null}
                        
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

// TO DO:

// Possible to store functions in components to clean up Form.js with Hooks?