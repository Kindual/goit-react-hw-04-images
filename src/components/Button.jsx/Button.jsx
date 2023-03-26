import React from 'react'
import css from './Button.module.css'
import { PropTypes } from 'prop-types'


export default function Button({ onClick }) {
  return (
    <div className={css.btnDiv}>
      <button className={css.button} type='button' onClick={onClick}>Load More</button>
    </div>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}