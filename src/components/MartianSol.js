import React from 'react';

export default class MartianSol extends React.Component {
    state = {
        martian_sol: null
    }

    selectDate = (e) => {
        this.setState({
            martian_sol: e.target.value,
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className='component' id='martian_sol_component'>
                    <h1>MartianSol.js</h1>
                    <input onInput={this.selectDate} id='martian_sol_input' type='number' name='martian_sol' />
                </div>
            </React.Fragment>
        )
    }
}

// TO DO:

// restrict input to numbers ONLY