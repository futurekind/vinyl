import React from 'react';

import styles from './loader.scss'

const Loader = (props) => {
    return (
        <div className={styles.loader}>
            <div className={styles.loader__spinner} />
        </div>
    )
}

export default Loader;
