import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setFilterSettingsOpen, setActiveFilter} from '../redux/actions';

import style from './filters.scss';

class Filters extends Component {
    render() {
        const {open, onSetFilterSettingsOpen, activeFilter} = this.props;

        return (
            <div className={`${style.view} ${open ? style['is-open'] : ''}`} >

                <div className={style.backdrop} onClick={() => onSetFilterSettingsOpen(false)} />

                <ul className={style.menu}>
                    <li onClick={this.handleSetActiveFilter.bind(this, 0)} className={`${activeFilter === 0 ? style.active : ''}`}>Show All</li>
                    <li onClick={this.handleSetActiveFilter.bind(this, 1)} className={`${activeFilter === 1 ? style.active : ''}`}>Show Listen</li>
                    <li onClick={this.handleSetActiveFilter.bind(this, 2)} className={`${activeFilter === 2 ? style.active : ''}`}>Show Buy</li>
                </ul>
            </div>
        )
    }

    handleSetActiveFilter(filter) {
        const {onSetActiveFilter, onSetFilterSettingsOpen} = this.props;

        onSetActiveFilter(filter)

        setTimeout(() => {
            onSetFilterSettingsOpen(false);
        }, 100)
    }
}

const mapState = state => ({
    open: state.filters.open,
    activeFilter: state.filters.activeFilter
})

const mapDispatch= dispatch => ({
    onSetFilterSettingsOpen(open) {
        dispatch(setFilterSettingsOpen(open))
    },

    onSetActiveFilter(filter) {
        dispatch(setActiveFilter(filter))
    }
})

export default connect(mapState, mapDispatch)(Filters);
