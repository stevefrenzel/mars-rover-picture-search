import React from 'react';

class Form extends React.Component {
    enterEarthTimeOrMartianSol() {
        if (document.getElementById('time_select').value === 'earth_date') {
            console.log('enter earth date');
        } else if (
            document.getElementById('time_select').value === 'martian_sol'
        ) {
            console.log('enter martian_sol');
        }
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.props.getMarsRoverData}>
                    <label htmlFor="rover_select">Choose a Mars rover: </label>
                    <select id="rover_select" name="rover_select">
                        <option value="curiosity">Curiosity</option>
                        <option value="opportunity">Opportunity</option>
                        <option value="spirit">Spirit</option>
                    </select>
                    <br />
                    <br />
                    <label htmlFor="time_select">Choose a timezone: </label>
                    <select id="time_select">
                        <option value="earth_date">Earth time</option>
                        <option value="martian_sol">Martian sol</option>
                    </select>
                    <br />
                    <input type="date" />
                    <br />
                    <input type="number" placeholder="please enter a number" />
                    <br />
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
                    <br />
                    <button>Get Photos</button>
                </form>
            </React.Fragment>
        );
    }
}

export default Form;

// TO DO:

// add input field to enter date, depending on choice
