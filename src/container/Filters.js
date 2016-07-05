import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setFilterSettingsOpen} from '../redux/actions';

import style from './filters.scss';

class Filters extends Component {
    render() {
        const {open, onSetFilterSettingsOpen, activeFilter} = this.props;

        return (
            <div className={`${style.view} ${open ? style['is-open'] : ''}`} onClick={() => onSetFilterSettingsOpen(false)}>
                <ul className={style.menu}>
                    <li className={`${activeFilter === 0 ? style.active : ''}`}>Show All</li>
                    <li className={`${activeFilter === 1 ? style.active : ''}`}>Show Listen</li>
                    <li className={`${activeFilter === 2 ? style.active : ''}`}>Show Buy</li>
                </ul>
            </div>
        )
    }
}

const mapState = state => ({
    open: state.filters.open,
    activeFilter: state.filters.activeFilter
})

const mapDispatch= dispatch => ({
    onSetFilterSettingsOpen(open) {
        dispatch(setFilterSettingsOpen(open))
    }
})

export default connect(mapState, mapDispatch)(Filters);
