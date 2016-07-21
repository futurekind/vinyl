import React, {PropTypes as pt} from 'react';

import styles from './loader.scss'

const Loader = ({active}) => {
    return (
        <div className={`${styles.loader} ${active ? styles['is-active'] : ''}`}>
            <div className={styles.loader__spinner}></div>
            {/*<div className={styles.loader__glance} />*/}
        </div>
    )
}

Loader.propTypes = {
    active: pt.bool
}

Loader.defaultProps = {
    active: false
}

export default Loader;
