import React from 'react';

export default class Form extends React.Component {
    render() {
        return (
            <React.Fragment>
                <form>
                    <input
                        type="text"
                        name="rover_name"
                        placeholder="Rover name"
                    />
                </form>
            </React.Fragment>
        );
    }
}
