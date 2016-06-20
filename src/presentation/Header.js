import React, {PropTypes as pt} from 'react';

import './header.scss'

const HeaderRightAction = props => {

    if(typeof props.action === 'function') {
        return (
            <props.action />
        )
    }

    return (
        <span className="header__action" onClick={props.onClick}>{props.action}</span>
    )
}

const Header = (props) => {
    return (
        <header className="header">
            <div className="header__col"></div>
            <div className="header__col  header__col--title">
                <h1 className="header__title">{props.title}</h1>
            </div>
            <div className="header__col  is-right">
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
