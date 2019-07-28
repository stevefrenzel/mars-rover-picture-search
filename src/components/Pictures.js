import React from 'react';

export default class Pictures extends React.Component {
    render() {
        if (!this.props.photos) {
            return null;
        }
        if (this.props.photos.length === 0) {
            return (
                <React.Fragment>
                    <h1>NO PHOTOS AVAILABLE!</h1>
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <div className='component' id='pictures_component'>
                    {this.props.photos.photos.map(
                        photo => (
                            <a href={photo.img_src} rel="noopener noreferrer" target="_blank" key={photo.id}>
                                <img src={photo.img_src} alt="M.R.P.S." key={photo.id} />
                            </a>
                        )
                    )}
                </div>
            </React.Fragment>
        );
    }
}

// TO DO:

// How to add to alt of <img>
// Rover: {photo.rover.name} / Camera: {photo.camera.full_name} / Earth Date: {photo.earth_date} / Martian Sol: {photo.sol}

// NO PHOTOS AVAILABLE message not working...