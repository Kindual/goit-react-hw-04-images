import React, { useEffect } from 'react'
import css from './Modal.module.css'
import { PropTypes } from 'prop-types'

export default function Modal({ largeImg, openModal }) {
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.code === "Escape" ) {
                openModal();
            }

        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [openModal]);

    return (
        <div className={css.Overlay} >
            <div className={css.Modal}>
                <img src={largeImg} alt="" />
            </div>
        </div>
    )

}


Modal.propTypes = {
    largeImg: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
}