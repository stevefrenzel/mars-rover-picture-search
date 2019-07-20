import React from 'react';

export default class MartianSol extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className='component' id='martian_sol_component'>
                    <h1>MartianSol.js</h1>
                    <input onInput={this.props.selectMartianSol} id='martian_sol_input' type='number' name='martian_sol' required />
                </div>
            </React.Fragment>
        )
    }
}