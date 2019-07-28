import React from 'react';

export default class Curiosity extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='component' id='curiosity_component'>
                    <h2>Choose a camera:</h2>

                    <div className='radio_button'>
                        <input onClick={this.props.selectCamera} type="radio" id="fhaz_camera_curiosity" name="camera_select" value="fhaz" required />
                        <label htmlFor="fhaz_camera_curiosity">Front Hazard Avoidance Camera</label>
                    </div>

                    <div className='radio_button'>
                        <input onClick={this.props.selectCamera} type="radio" id="rhaz_camera_curiosity" name="camera_select" value="rhaz" required />
                        <label htmlFor="rhaz_camera_curiosity">Rear Hazard Avoidance Camera</label>
                    </div>

                    <div className='radio_button'>
                        <input onClick={this.props.selectCamera} type="radio" id="mast_camera_curiosity" name="camera_select" value="mast" required />
                        <label htmlFor="mast_camera_curiosity">Mast Camera</label>
                    </div>

                    <div className='radio_button'>
                        <input onClick={this.props.selectCamera} type="radio" id="chemcam_camera_curiosity" name="camera_select" value="chemcam" required />
                        <label htmlFor="chemcam_camera_curiosity">Chemistry and Camera Complex</label>
                    </div>

                    <div className='radio_button'>
                        <input onClick={this.props.selectCamera} type="radio" id="mahli_camera_curiosity" name="camera_select" value="mahli" required />
                        <label htmlFor="mahli_camera_curiosity">Mars Hand Lens Imager</label>
                    </div>

                    <div className='radio_button'>
                        <input onClick={this.props.selectCamera} type="radio" id="mardi_camera_curiosity" name="camera_select" value="mardi" required />
                        <label htmlFor="mardi_camera_curiosity">Mars Descent Imager</label>
                    </div>

                    <div className='radio_button'>
                        <input onClick={this.props.selectCamera} type="radio" id="navcam_camera_curiosity" name="camera_select" value="navcam" required />
                        <label htmlFor="navcam_camera_curiosity">Navigation Camera</label>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}