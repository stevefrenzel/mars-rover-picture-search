import React from 'react';

export default class Timezone extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='component' id='timezone_component'>
                    <h1>Timezone.js</h1>
                    <p>Choose a timezone:</p>

                    <div className='radio_button'>
                        <input onClick={this.props.selectTimezone} type="radio" id="select_earth_date" name="timezone_select" value="earth_date" required />
                        <label htmlFor="select_earth_date">Earth Date</label>
                    </div>

                    <div className='radio_button'>
                        <input onClick={this.props.selectTimezone} type="radio" id="select_martian_sol" name="timezone_select" value="martian_sol" required />
                        <label htmlFor="select_martian_sol">Martian Sol</label>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}