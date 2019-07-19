import React from 'react';

export default class OpportunityAndSpirit extends React.Component {
    render() {
        return (
            <React.Fragment>
                <label htmlFor="camera_select">Choose a camera: </label>
                <select id="camera_select">
                    <option value="fhaz">Front Hazard Avoidance Camera</option>
                    <option value="rhaz">Rear Hazard Avoidance Camera</option>
                    <option value="navcam">Navigation Camera</option>
                    <option value="pancam">Panoramic Camera</option>
                    <option value="minites">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
                </select>
            </React.Fragment>
        )
    }
}