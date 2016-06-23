import React, {PropTypes as pt} from 'react';

const Icon = (props) => (
    <svg onClick={props.onClick} fill={props.fill} className={props.className} style={props.style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {props.children}
    </svg>
)

Icon.defaultProps = {
    fill: 'currentColor',
    style: {
        width: 24,
        height: 24
    },
    onClick: () => {}
}

Icon.propsTypes = {
    fill: pt.string,
    className: pt.string,
    style: pt.object,
    onClick: pt.func
}

export default Icon;
