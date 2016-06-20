import React, {PropTypes as pt} from 'react';

import styles from './header.scss'

const HeaderRightAction = props => {

    if(typeof props.action === 'function') {
        return (
            <props.action />
        )
    }

    return (
        <span className={styles.header__action} onClick={props.onClick}>{props.action}</span>
    )
}

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.header__col}></div>
            <div className={`${styles.header__col}  ${styles['header__col--title']}`}>
                <h1 className={styles.header__title}>{props.title}</h1>
            </div>
            <div className={`${styles.header__col}  ${styles['is-right']}`}>
                <HeaderRightAction
                    action={props.rightAction}
                    onClick={props.onRightActionClick}
                />
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: '',
    rightAction: '',
    onRightActionClick: () => {}
}

Header.propTypes = {
    title: pt.string,
    rightAction: pt.any,
    onRightActionClick: pt.func
}

export default Header;
