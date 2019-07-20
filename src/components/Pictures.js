import React from 'react';

export default class Pictures extends React.Component {
    render() {
        if (!this.props.photos) {
            return null;
        }
        return (
            <React.Fragment>
                <div className='component' id='pictures_component'>
                    <h1>Pictures.js</h1>
                    { (this.props.rover, this.props.time, this.props.camera && (
                            <p>
                                Mars rover: {this.props.rover} • Martian Sol:{' '}
                                {this.props.time} • Camera: {this.props.camera}
                            </p>
                        ))
                    }
                    {this.props.photos.photos.map(photo => (<img src={photo.img_src} alt="enter dynamic context" key={photo.id} />))}
                </div>
            </React.Fragment>
        );
    }
}

// TO DO LIST

// show message if no photos are available
