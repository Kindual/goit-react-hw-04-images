import React, { Component } from 'react'
import { FallingLines } from 'react-loader-spinner'
import css from './Loader.module.css'
import { PropTypes } from 'prop-types'


export default class Loader extends Component {
  render() {
    const {visibleLoader} = this.props;
    return (
      <div className={css.loading}>
        <FallingLines
          color="#4fa94d"
          width="100"
          visible={visibleLoader}
          ariaLabel='falling-lines-loading'
        />
      </div>
    )
  }
}

Loader.propTypes = {
  visibleLoader: PropTypes.bool.isRequired,
}