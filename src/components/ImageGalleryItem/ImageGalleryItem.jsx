import React from 'react'
import css from './ImageGalleryItem.module.css'
import { PropTypes } from 'prop-types'

export default function ImageGalleryItem({ img, largeImg }) {
    return (
        <li className={css.galleryItem}>
            <img src={img} alt="" data-img={largeImg} className={css.ImageGalleryItemImage} />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    img: PropTypes.string.isRequired,
    largeImg: PropTypes.string.isRequired,
}
