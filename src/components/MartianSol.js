import React from 'react';

export default class MartianSol extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className='component' id='martian_sol_component'>
                    <h1>MartianSol.js</h1>
                    <input onInput={this.props.selectMartianSol} id='martian_sol_input' type='number' name='martian_sol' />
                </div>
            </React.Fragment>
        )
    }
}

// TO DO:

// restrict input to numbers ONLY
// if input empty set dateEntered to false