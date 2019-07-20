import React from 'react';

export default class Timezone extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='component' id='timezone_component'>
                    <h1>Timezone.js</h1>
                    <p><label htmlFor="time_select">Choose a timezone:</label></p>

                    <input type="radio" id="select_earth_date" name="rover_select" value="earth_date" />
                    <label htmlFor="select_earth_date">Earth Date</label>

                    <input type="radio" id="select_martian_sol" name="rover_select" value="martian_sol" />
                    <label htmlFor="select_martian_sol">Martian Sol</label>
                </div>
            </React.Fragment>
        )
    }
}