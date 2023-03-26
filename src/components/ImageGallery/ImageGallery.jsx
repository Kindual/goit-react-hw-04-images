import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import React from 'react'
import css from './ImageGallery.module.css'
import { PropTypes } from 'prop-types'

export default function ImageGallery({ gallery, openModal }) {
    const openImage = (event) => {
        if (event.target.tagName === 'IMG') {
            const largeImgUrl = event.target.dataset.img;
            openModal(largeImgUrl);
        };

    }

    return (
        <ul className={css.gallery} onClick={(e) => openImage(e)}>
            {gallery.map(({ id, webformatURL, largeImageURL }) =>
                <ImageGalleryItem img={webformatURL} key={id} largeImg={largeImageURL}></ImageGalleryItem>
            )}
        </ul>
    )
}


ImageGallery.propTypes = {
    gallery: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired
}