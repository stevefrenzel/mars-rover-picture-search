import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Data from './components/Data';

import { API_KEY } from './secrets.json';

export default class App extends React.Component {
    getMarsRoverData = async () => {
        const api_call = await fetch(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
        );
        const data = await api_call.json();
        console.log('Data from API call: ', data);
    };

    render() {
        return (
            <React.Fragment>
                <Title />
                <Form />
                <Data />
            </React.Fragment>
        );
    }
}
