import React, { useState } from 'react'
import css from './searchbar.module.css'
import { PropTypes } from 'prop-types'

export default function Searchbar({ updateName }) {
    const [name, setName] = useState('');

    const onSubmit = (ev) => {
        ev.preventDefault();

        if (name.trim().length < 1) {
            return alert('пустий єЗапит')
        }
        updateName(name.trim())
    }

    return (
        <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={onSubmit}>
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

                    value={name}
                    onChange={ev => setName(ev.target.value)}
                />
            </form>
        </header>
    )
}


Searchbar.propTypes = {
    updateName: PropTypes.func.isRequired,
}