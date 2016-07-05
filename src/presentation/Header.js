import React, {PropTypes as pt} from 'react';

import styles from './header.scss'

const HeaderAction = props => {

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
            <div className={styles.header__col}>
                <HeaderAction
                    action={props.leftAction}
                    onClick={props.onLeftActionClick}
                />
            </div>

            <div className={`${styles.header__col}  ${styles['header__col--title']}`}>
                <h1 className={styles.header__title}>{props.title}</h1>
            </div>

            <div className={`${styles.header__col}  ${styles['is-right']}`}>
                <HeaderAction
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
    leftAction: '',
    onRightActionClick: () => {},
    onLeftActionClick: () => {}
}

Header.propTypes = {
    title: pt.string,
    rightAction: pt.any,
    leftAction: pt.any,
    onRightActionClick: pt.func,
    onLeftActionClick: pt.func
}

export default Header;
