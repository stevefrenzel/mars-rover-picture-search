import React from 'react';

export default class OpportunityAndSpirit extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='component' id='opportunity_spirit_component'>
                    <h1>OpportunityAndSpirit.js</h1>
                    <p><label htmlFor="camera_select">Choose a camera: </label></p>

                    <input type="radio" id="select_camera" name="camera_select" value="fhaz" />
                    <label htmlFor="select_camera">Front Hazard Avoidance Camera</label>

                    <input type="radio" id="select_camera" name="camera_select" value="rhaz" />
                    <label htmlFor="select_camera">Rear Hazard Avoidance Camera</label>

                    <input type="radio" id="select_camera" name="camera_select" value="navcam" />
                    <label htmlFor="select_camera">Navigation Camera</label>

                    <input type="radio" id="select_camera" name="camera_select" value="pancam" />
                    <label htmlFor="select_camera">Panoramic Camera</label>

                    <input type="radio" id="select_camera" name="camera_select" value="minites" />
                    <label htmlFor="select_camera">Miniature Thermal Emission Spectrometer (Mini-TES</label>
                </div>
            </React.Fragment>
        )
    }
}