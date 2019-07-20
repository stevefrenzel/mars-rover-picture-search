import React from 'react';

export default class Title extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='component' id='title_component'>
                    <h1>Mars Rover Picture Search</h1>
                    <p>Search for photos of Mars rover Curiousity, Opportunity and Spirit!</p>
                </div>
            </React.Fragment>
        );
    }
}