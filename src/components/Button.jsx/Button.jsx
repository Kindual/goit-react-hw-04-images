import React, { Component } from 'react'
import css from './Button.module.css'
import { PropTypes } from 'prop-types'


export default class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className={css.btnDiv}>
        <button className={css.button} type='button' onClick={onClick}>Load More</button>
      </div>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}