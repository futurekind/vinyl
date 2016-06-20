import React, {PropTypes as pt} from 'react';

import './header.scss'

const Header = ({title}) => (
    <header className="header">
        <div className="header__col"></div>
        <div className="header__col  header__col--title">
            <h1 className="header__title">{title}</h1>
        </div>
        <div className="header__col"></div>
    </header>
)

Header.defaultProps = {
    title: 'Foo'
}

Header.propTypes = {
    title: pt.string
}

export default Header;
