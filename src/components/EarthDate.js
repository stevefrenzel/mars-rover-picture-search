import React from 'react';

export default class EarthDate extends React.Component {
    state = {
        earth_date: null
    }

    selectDate = (e) => {
        this.setState({
            earth_date: e.target.value,
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className='component' id='earth_date_component'>
                    <h1>EarthDate.js</h1>
                    <input onInput={this.selectDate} id='earth_date_input' type='date' name='earth_date' />
                </div>
            </React.Fragment>
        )
    }
}