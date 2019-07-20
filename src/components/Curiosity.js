import React from 'react';

export default class Curiosity extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='component' id='curiosity_component'>
                    <h1>Curiosity.js</h1>
                    <p>Choose a camera:</p>

                    <div className='radio_button'>
                        <input type="radio" id="fhaz_camera_curiosity" name="camera_select_curiosity" value="fhaz" />
                        <label htmlFor="fhaz_camera_curiosity">Front Hazard Avoidance Camera</label>
                    </div>

                    <div className='radio_button'>
                        <input type="radio" id="rhaz_camera_curiosity" name="camera_select_curiosity" value="rhaz" />
                        <label htmlFor="rhaz_camera_curiosity">Rear Hazard Avoidance Camera</label>
                    </div>

                    <div className='radio_button'>
                        <input type="radio" id="mast_camera_curiosity" name="camera_select_curiosity" value="mast" />
                        <label htmlFor="mast_camera_curiosity">Mast Camera</label>
                    </div>

                    <div className='radio_button'>
                        <input type="radio" id="chemcam_camera_curiosity" name="camera_select_curiosity" value="chemcam" />
                        <label htmlFor="chemcam_camera_curiosity">Chemistry and Camera Complex</label>
                    </div>

                    <div className='radio_button'>
                        <input type="radio" id="mahli_camera_curiosity" name="camera_select_curiosity" value="mahli" />
                        <label htmlFor="mahli_camera_curiosity">Mars Hand Lens Imager</label>
                    </div>

                    <div className='radio_button'>
                        <input type="radio" id="mardi_camera_curiosity" name="camera_select_curiosity" value="mardi" />
                        <label htmlFor="mardi_camera_curiosity">Mars Descent Imager</label>
                    </div>

                    <div className='radio_button'>
                        <input type="radio" id="navcam_camera_curiosity" name="camera_select_curiosity" value="navcam" />
                        <label htmlFor="navcam_camera_curiosity">Navigation Camera</label>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}