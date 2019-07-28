import React from 'react';

export default class EarthDate extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className='component' id='earth_date_component'>
                    <h2>Month / Day / Year</h2>
                    <input onInput={this.props.selectEarthDate} id='earth_date_input' type='date' name='earth_date' required />
                </div>
            </React.Fragment>
        )
    }
}