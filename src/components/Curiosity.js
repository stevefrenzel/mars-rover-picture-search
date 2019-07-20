import React from 'react';

export default class Curiosity extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='component' id='curiosity_component'>
                    <h1>Curiosity.js</h1>
                    <p><label htmlFor="camera_select">Choose a camera: </label></p>

                    <input type="radio" id="select_camera" name="camera_select" value="fhaz" />
                    <label htmlFor="select_camera">Front Hazard Avoidance Camera</label>

                    <input type="radio" id="select_camera" name="camera_select" value="rhaz" />
                    <label htmlFor="select_camera">Rear Hazard Avoidance Camera</label>

                    <input type="radio" id="select_camera" name="camera_select" value="mast" />
                    <label htmlFor="select_camera">Mast Camera</label>

                    <input type="radio" id="select_camera" name="camera_select" value="chemcam" />
                    <label htmlFor="select_camera">Chemistry and Camera Complex</label>

                    <input type="radio" id="select_camera" name="camera_select" value="mahli" />
                    <label htmlFor="select_camera">Mars Hand Lens Imager</label>

                    <input type="radio" id="select_camera" name="camera_select" value="mardi" />
                    <label htmlFor="select_camera">Mars Descent Imager</label>

                    <input type="radio" id="select_camera" name="camera_select" value="navcam" />
                    <label htmlFor="select_camera">Navigation Camera</label>
                </div>
            </React.Fragment>
        )
    }
}