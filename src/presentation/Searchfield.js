import React, {PropTypes as pt} from 'react'

import styles from './searchfield.scss';

const Searchfield = (props) => (
    <form className={styles.view} onSubmit={props.onSearch}>
        <input type="text" name="search" className={styles.field} placeholder={props.placeholder} />
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
