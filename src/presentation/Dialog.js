import React, {PropTypes as pt} from 'react';

import {Icon} from './';

import styles from './dialog.scss';

const Dialog = (props) => {
    return (
        <div className={`${styles.view} ${props.open ? styles['is-open'] : ''}`}>
            <div className={styles.backdrop}></div>
            <div className={styles.content}>
                <div className={styles.close}>
                    <Icon onClick={props.onDismiss} className={styles.closeicon}>
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </Icon>
                </div>
                {props.children}
            </div>
        </div>
    )
}

Dialog.defaultProps = {
    open: false,
    onDismiss: () => {}
}

Dialog.propTypes = {
    open: pt.bool,
    onDismiss: pt.func
}

export default Dialog;
