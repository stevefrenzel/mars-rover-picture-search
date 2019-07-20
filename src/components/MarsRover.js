import React from 'react';

export default class MarsRover extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className='component' id='mars_rover_component'>
                    <h1>MarsRover.js</h1>
                    <p>Choose a Mars rover:</p>
                
                    <div className='radio_button'>
                        <input onClick={this.props.selectRover} type="radio" id="select_curiosity" name="rover_select" value="curiosity" required/>
                        <label htmlFor="curiosity">Curiosity</label>
                    </div>

                    <div className='radio_button'>
                        <input onClick={this.props.selectRover} type="radio" id="select_opportunity" name="rover_select" value="opportunity" required />
                        <label htmlFor="opportunity">Opportunity</label>
                    </div>

                    <div className='radio_button'>
                        <input onClick={this.props.selectRover} type="radio" id="select_spirit" name="rover_select" value="spirit" required />
                        <label htmlFor="spirit">Spirit</label>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}