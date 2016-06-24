import React, {PropTypes as pt} from 'react'

import styles from './searchfield.scss';

const handleSubmit = (e, callback) => {
    e.preventDefault();

    const target = e.target;
    const searchterm = target.querySelector('[name="search"]').value

    callback(searchterm)
}

const Searchfield = (props) => (
    <form className={styles.view} onSubmit={e => handleSubmit(e, props.onSearch)}>
        <input type="text" name="search" autocomplete="off" className={styles.field} placeholder={props.placeholder} />
    </form>
)

Searchfield.propTypes = {
    onSearch: pt.func,
    placeholder: pt.string
}

Searchfield.defaultProps = {
    onSearch: () => {}
}

export default Searchfield;
