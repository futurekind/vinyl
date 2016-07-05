import React, {Component} from 'react';
import {connect} from 'react-redux';

import AlbumsList from './AlbumsList';
import AddDialog from './AddDialog';
import DetailDialog from './DetailDialog';
import Main from './Main';
import {Header, Loader} from '../presentation';
import {setAddDialogOpen, setFilterSettingsOpen} from '../redux/actions';

import styles from './app.scss';

class App extends Component {

    render() {
        const {isFetching, dialogAddOpen, setAddDialogOpen, activeDetailId, filterSettingsOpen, onSetFilterSettingsOpen} = this.props;

        return (
            <div className={styles.app}>

                <div className={`${styles.main} ${filterSettingsOpen ? styles['main--open'] : ''}`}>
                    <Header
                        title="Recordman"
                        rightAction="Add"
                        onRightActionClick={() => setAddDialogOpen(true)}
                        leftAction="Filter"
                        onLeftActionClick={() => onSetFilterSettingsOpen(!filterSettingsOpen)}
                    />

                    <Main>
                        <Loader active={isFetching} />
                        <AlbumsList />
                    </Main>
                </div>

                <AddDialog />
                <DetailDialog />

            </div>
        );
    }
}

const mapState = state => ({
    isFetching: state.app.isFetching,
    activeDetailId: state.app.activeDetail,
    filterSettingsOpen: state.app.filterSettingsOpen
})

const mapDispatch = dispatch => ({
    fetchData() {
        dispatch(fetchData())
    },

    setAddDialogOpen(open) {
        dispatch(setAddDialogOpen(open))
    },

    onSetFilterSettingsOpen(open) {
        dispatch(setFilterSettingsOpen(open))
    }
})

export default connect(mapState, mapDispatch)(App);
