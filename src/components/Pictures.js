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
                    {this.props.photos.photos.map(photo => (<img src={photo.img_src} alt="enter dynamic context" key={photo.id} />))}
                </div>
            </React.Fragment>
        );
    }
}