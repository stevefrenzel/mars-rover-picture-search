import React from 'react';

export default class OpportunityAndSpirit extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='component' id='opportunity_spirit_component'>
                    <h1>OpportunityAndSpirit.js</h1>
                    <p>Choose a camera:</p>

                    <div className='radio_button'>
                        <input type="radio" id="fhaz_camera_opportunity_spirit" name="camera_select_opportunity_spirit" value="fhaz" />
                        <label htmlFor="fhaz_camera_opportunity_spirit">Front Hazard Avoidance Camera</label>
                    </div>

                    <div className='radio_button'>
                        <input type="radio" id="rhaz_camera_opportunity_spirit" name="camera_select_opportunity_spirit" value="rhaz" />
                        <label htmlFor="rhaz_camera_opportunity_spirit">Rear Hazard Avoidance Camera</label>
                    </div>

                    <div className='radio_button'>
                        <input type="radio" id="navcam_camera_opportunity_spirit" name="camera_select_opportunity_spirit" value="navcam" />
                        <label htmlFor="navcam_camera_opportunity_spirit">Navigation Camera</label>
                    </div>

                    <div className='radio_button'>
                        <input type="radio" id="pancam_camera_opportunity_spirit" name="camera_select_opportunity_spirit" value="pancam" />
                        <label htmlFor="pancam_camera_opportunity_spirit">Panoramic Camera</label>
                    </div>

                    <div className='radio_button'>
                        <input type="radio" id="minites_camera_opportunity_spirit" name="camera_select_opportunity_spirit" value="minites" />
                        <label htmlFor="minites_camera_opportunity_spirit">Miniature Thermal Emission Spectrometer (Mini-TES)</label>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}