import React, { Component } from 'react'
import css from './Modal.module.css'
import { PropTypes } from 'prop-types'


export default class Modal extends Component {

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.code === "Escape") {
            this.props.openModal();
        }
    }

    closeModal = (event) => {
        if (event.target === event.currentTarget) {
            this.props.openModal();
        }
    } 

    render() {
        const { largeImg} = this.props;
        return (
            <div className={css.Overlay} onClick={this.closeModal}>
                <div className={css.Modal}>
                    <img src={largeImg} alt="" />
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    largeImg: PropTypes.string.isRequired,
}