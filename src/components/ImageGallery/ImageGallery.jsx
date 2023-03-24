import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import React, { Component } from 'react'
import css from './ImageGallery.module.css'
import { PropTypes } from 'prop-types'


export default class ImageGallery extends Component {
    openImage = (event) => {
        if (event.target.tagName === 'IMG') {
            const largeImgUrl = event.target.dataset.img;
            this.props.openModal(largeImgUrl);
        };

    }

    render() {
        const {gallery} = this.props;
        
        return (
            <ul className={css.gallery} onClick={(e) => this.openImage(e)}>
                {gallery.map(({id, webformatURL, largeImageURL}) => 
                    <ImageGalleryItem img={webformatURL} key={id} largeImg={largeImageURL}></ImageGalleryItem>
                )}
            </ul>
        )
    }
}

ImageGallery.propTypes = {
    gallery: PropTypes.array.isRequired,
}