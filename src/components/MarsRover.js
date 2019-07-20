import React from 'react';

export default class MarsRover extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='component' id='mars_rover_component'>
                    <h1>MarsRover.js</h1>
                    <p><label htmlFor="rover_select">Choose a Mars rover:</label></p>

                    <input type="radio" id="select_curiosity" name="rover_select" value="curiosity" />
                    <label htmlFor="select_curiosity">Curiosity</label>

                    <input type="radio" id="select_opportunity" name="rover_select" value="opportunity" />
                    <label htmlFor="select_opportunity">Opportunity</label>

                    <input type="radio" id="select_spirit" name="rover_select" value="spirit" />
                    <label htmlFor="select_spirit">Spirit</label>
                </div>
            </React.Fragment>
        )
    }
}