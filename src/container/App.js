import React, {Component} from 'react';
import {connect} from 'react-redux';

import AlbumsList from './AlbumsList';
import AddDialog from './AddDialog';
import DetailDialog from './DetailDialog';
import Main from './Main';
import Filters from './Filters';
import {Header, Loader, Icon} from '../presentation';
import {setAddDialogOpen, setFilterSettingsOpen, fetchData} from '../redux/actions';

import styles from './app.scss';

class App extends Component {

    componentDidMount() {
        const {onFetchData} = this.props;
        onFetchData();
    }

    render() {
        const {isFetching, dialogAddOpen, setAddDialogOpen, activeDetailId, filterSettingsOpen, onSetFilterSettingsOpen} = this.props;

        const rightIcon = (
            <Icon>
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/>
            </Icon>
        )

        const leftIcon = (
            <Icon>
                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
            </Icon>
        )

        return (
            <div className={styles.app}>

                <div className={`${styles.main} ${filterSettingsOpen ? styles['main--open'] : ''}`}>
                    <Header
                        title="Recordman"
                        rightAction={rightIcon}
                        onRightActionClick={() => setAddDialogOpen(true)}
                        leftAction={leftIcon}
                        onLeftActionClick={() => onSetFilterSettingsOpen(!filterSettingsOpen)}
                    />

                    <Main>
                        <Loader active={isFetching} />
                        <AlbumsList />
                    </Main>
                </div>

                <Filters />
                <AddDialog />
                <DetailDialog />

            </div>
        );
    }
}

const mapState = state => ({
    isFetching: state.app.isFetching,
    activeDetailId: state.app.activeDetail,
    filterSettingsOpen: state.filters.open
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
    },

    onFetchData() {
        dispatch(fetchData())
    }
})

export default connect(mapState, mapDispatch)(App);
