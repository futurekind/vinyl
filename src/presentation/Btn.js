import React, {PropTypes as pt} from 'react';

import style from './btn.scss';

const Btn = ({onClick, label}) => (
    <button className={style.btn} onClick={onClick}>{label}</button>
)

Btn.defaultProps = {
    label: 'Button',
    onClick: () => {}
}

Btn.propTypes = {
    label: pt.string,
    onClick: pt.func
}

export default Btn;
