import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Data from './components/Data';

import { API_KEY } from './secrets.json';

class App extends React.Component {
    getMarsRoverData = async e => {
        e.preventDefault();
        const rover = e.target.elements.rover_select.value;
        // const time = e.target.getElementById('time_select').value;
        const camera = e.target.elements.camera_select.value;
        const api_call = await fetch(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&camera=${camera}&api_key=${API_KEY}`
        );
        const data = await api_call.json();
        console.log('Data from API call: ', data);
    };

    render() {
        return (
            <React.Fragment>
                <Title />
                <Form getMarsRoverData={this.getMarsRoverData} />
                <Data />
            </React.Fragment>
        );
    }
}

export default App;
