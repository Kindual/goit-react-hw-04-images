import React, { Component } from 'react'
import css from './searchbar.module.css'
import { PropTypes } from 'prop-types'

export default class Searchbar extends Component {
    state = {
        name: ''
    }

    onSubmit = (ev ) => {
        ev.preventDefault();

        if (this.state.name.trim().length < 1){
            return alert('пустий єЗапит')
        }
        this.props.updateName(this.state.name.trim())
    }
    render() {
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.onSubmit}>
                    <button type="submit" className={css.SearchFormButton}>
                        <span className={css.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={css.SearchFormInput}
                        type="text"
                        name='name'
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"

                        value={this.state.name}
                        onChange={ev => this.setState({name:ev.target.value})}
                    />
                </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
    updateName: PropTypes.func.isRequired,
}