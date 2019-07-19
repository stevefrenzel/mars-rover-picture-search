import React from 'react';

export default class Curiosity extends React.Component {
    render() {
        return (
            <React.Fragment>
                <label htmlFor="camera_select">Choose a camera: </label>
                <select id="camera_select">
                    <option value="fhaz">Front Hazard Avoidance Camera</option>
                    <option value="rhaz">Rear Hazard Avoidance Camera</option>
                    <option value="mast">Mast Camera</option>
                    <option value="chemcam">Chemistry and Camera Complex</option>
                    <option value="mahli">Mars Hand Lens Imager</option>
                    <option value="mardi">Mars Descent Imager</option>
                    <option value="navcam">Navigation Camera</option>
                </select>
            </React.Fragment>
        )
    }
}