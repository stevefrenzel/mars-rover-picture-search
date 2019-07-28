import React from 'react';

export default class OpportunityAndSpirit extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='component' id='opportunity_spirit_component'>
                    <h2>Choose a camera:</h2>

                    <div className='radio_button'>
                        <input onClick={this.props.selectCamera} type="radio" id="fhaz_camera_opportunity_spirit" name="camera_select" value="fhaz" required />
                        <label htmlFor="fhaz_camera_opportunity_spirit">Front Hazard Avoidance Camera</label>
                    </div>

                    <div className='radio_button'>
                        <input onClick={this.props.selectCamera} type="radio" id="rhaz_camera_opportunity_spirit" name="camera_select" value="rhaz" required />
                        <label htmlFor="rhaz_camera_opportunity_spirit">Rear Hazard Avoidance Camera</label>
                    </div>

                    <div className='radio_button'>
                        <input onClick={this.props.selectCamera} type="radio" id="navcam_camera_opportunity_spirit" name="camera_select" value="navcam" required />
                        <label htmlFor="navcam_camera_opportunity_spirit">Navigation Camera</label>
                    </div>

                    <div className='radio_button'>
                        <input onClick={this.props.selectCamera} type="radio" id="pancam_camera_opportunity_spirit" name="camera_select" value="pancam" required />
                        <label htmlFor="pancam_camera_opportunity_spirit">Panoramic Camera</label>
                    </div>

                    <div className='radio_button'>
                        <input onClick={this.props.selectCamera} type="radio" id="minites_camera_opportunity_spirit" name="camera_select" value="minites" required />
                        <label htmlFor="minites_camera_opportunity_spirit">Miniature Thermal Emission Spectrometer (Mini-TES)</label>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}