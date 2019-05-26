import React from 'react';

export default class Form extends React.Component {
    render() {
        return (
            <React.Fragment>
                <form>
                    <label htmlFor="rover_select">Choose a Mars rover: </label>
                    <select id="rover_select">
                        <option value="curiosity">Curiosity</option>
                        <option value="opportunity">Opportunity</option>
                        <option value="spirit">Spirit</option>
                    </select>
                    <br />
                    <label htmlFor="time_select">Choose a timezone: </label>
                    <select id="time_select">
                        <option value="earth_date">Earth time</option>
                        <option value="sol">Martian sol</option>
                    </select>
                    <br />
                    <label htmlFor="camera_select">Choose a camera: </label>
                    <select id="camera_select">
                        <option value="fhaz">
                            Front Hazard Avoidance Camera
                        </option>
                        <option value="rhaz">
                            Rear Hazard Avoidance Camera
                        </option>
                        <option value="mast">Mast Camera</option>
                        <option value="chemcam">
                            Chemistry and Camera Complex
                        </option>
                        <option value="mahli">Mars Hand Lens Imager</option>
                        <option value="mardi">Mars Descent Imager</option>
                        <option value="navcam">Navigation Camera</option>
                        <option value="pancam">Panoramic Camera</option>
                        <option value="minites">
                            Miniature Thermal Emission Spectrometer (Mini-TES)
                        </option>
                    </select>
                    <br />
                    <button>Get Photos</button>
                </form>
            </React.Fragment>
        );
    }
}

// TO DO:

// add input field to enter date, depending on choice
