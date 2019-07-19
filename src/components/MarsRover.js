import React from 'react';

export default class MarsRover extends React.Component {
    render() {
        return (
            <React.Fragment>
                <element className='component' id='mars_rover_component'>
                <label htmlFor="rover_select">Choose a Mars rover:</label>

                <input onClick={this.marsRoverSelected} type="radio" id="select_curiosity" name="rover_select" value="curiosity" />
                <label htmlFor="select_curiosity">Curiosity</label>

                <input onClick={this.marsRoverSelected} type="radio" id="select_opportunity" name="rover_select" value="opportunity" />
                <label htmlFor="select_opportunity">Opportunity</label>

                <input onClick={this.marsRoverSelected} type="radio" id="select_spirit" name="rover_select" value="spirit" />
                <label htmlFor="select_spirit">Spirit</label>
                </element>
            </React.Fragment>
        )
    }
}