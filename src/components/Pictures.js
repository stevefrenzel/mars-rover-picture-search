import React from 'react';
import { log } from 'util';

export default class Pictures extends React.Component {
    render() {
        console.log(this.props);
        
        if (!this.props.photos) {
            return null;
        }

        if (!this.props.photos.length) {
            return (
                <React.Fragment>
                    <h1>NO PHOTOS AVAILABLE!</h1>
                </React.Fragment>
            )
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