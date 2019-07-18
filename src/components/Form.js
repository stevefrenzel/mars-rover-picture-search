import React from 'react';

export default class Form extends React.Component {

    enterEarthTimeOrMartianSol(e) {
        if (e.target.value === 'earth_date') {
            console.log('enter earth date');
        } else if (e.target.value === 'martian_sol') {
            console.log('enter martian_sol');
        }
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.props.getMarsRoverData}>

                    {/* CHOOSE MARS ROVER */}

                    <label htmlFor="rover_select">Choose a Mars rover: </label>
                    <select id="rover_select" name="rover_select">
                        <option value="curiosity">Curiosity</option>
                        <option value="opportunity">Opportunity</option>
                        <option value="spirit">Spirit</option>
                    </select>

                    <br />
                    <br />

                    {/* CHOOSE TIMEZONE */}

                    <label htmlFor="time_select">Choose a timezone: </label>
                    <select id="time_select">
                        <option value="earth_date" onClick={this.enterEarthTimeOrMartianSol}>Earth time</option>
                        <option value="martian_sol" onClick={this.enterEarthTimeOrMartianSol}>Martian sol</option>
                    </select>

                    <br />

                    {/* ENTER DATE */}

                    <input type="date" name="earth_date" />
                    <input type="number" name="martian_sol" />

                    <br />
                    <br />

                    {/* CHOOSE CAMERA */}

                    <label htmlFor="camera_select">Choose a camera: </label>
                    <select id="camera_select">
                        <option value="fhaz">Front Hazard Avoidance Camera</option>
                        <option value="rhaz">Rear Hazard Avoidance Camera</option>
                        <option value="mast">Mast Camera</option>
                        <option value="chemcam">Chemistry and Camera Complex</option>
                        <option value="mahli">Mars Hand Lens Imager</option>
                        <option value="mardi">Mars Descent Imager</option>
                        <option value="navcam">Navigation Camera</option>
                        <option value="pancam">Panoramic Camera</option>
                        <option value="minites">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
                    </select>

                    <br />
                    <br />

                    <button>Get Photos</button>

                </form>
            </React.Fragment>
        );
    }
}

// TO DO:

// add input field to enter date, depending on choice
