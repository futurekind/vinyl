import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setFilterSettingsOpen, setActiveFilter, setActiveSort} from '../redux/actions';

import style from './filters.scss';

class Filters extends Component {
    render() {
        const {open, onSetFilterSettingsOpen, activeFilter, activeSort} = this.props;

        return (
            <div className={`${style.view} ${open ? style['is-open'] : ''}`} >

                <div className={style.backdrop} onClick={() => onSetFilterSettingsOpen(false)} />

                <ul className={style.menu}>
                    <li onClick={this.handleSetActiveFilter.bind(this, 0)} className={`${activeFilter === 0 ? style.active : ''}`}>Show All</li>
                    <li onClick={this.handleSetActiveFilter.bind(this, 1)} className={`${activeFilter === 1 ? style.active : ''}`}>Show Listen</li>
                    <li onClick={this.handleSetActiveFilter.bind(this, 2)} className={`${activeFilter === 2 ? style.active : ''}`}>Show Buy</li>

                    <li className={style.sep} />

                    <li className={`${style.sort}  ${activeSort === 0 ? style.active : ''}`} onClick={this.handleSetActiveSort.bind(this, 0)}>Sort by Added At</li>
                    <li className={`${style.sort}  ${activeSort === 1 ? style.active : ''}`} onClick={this.handleSetActiveSort.bind(this, 1)}>Sort by Artist</li>
                    <li className={`${style.sort}  ${activeSort === 2 ? style.active : ''}`} onClick={this.handleSetActiveSort.bind(this, 2)}>Sort by Album Title</li>
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

    handleSetActiveSort(sort) {
        const { onSetActiveSort } = this.props;

        onSetActiveSort(sort)
    }
}

const mapState = state => ({
    open: state.filters.open,
    activeFilter: state.filters.activeFilter,
    activeSort: state.filters.activeSort,
})

const mapDispatch= dispatch => ({
    onSetFilterSettingsOpen(open) {
        dispatch(setFilterSettingsOpen(open))
    },

    onSetActiveFilter(filter) {
        dispatch(setActiveFilter(filter))
    },

    onSetActiveSort(sort) {
        dispatch(setActiveSort(sort))
    }
})

export default connect(mapState, mapDispatch)(Filters);
