import React, {Component} from 'react';
import {connect} from 'react-redux';

import AlbumsList from './AlbumsList';
import AddDialog from './AddDialog';
import Main from './Main';
import {Header, Loader, Dialog} from '../presentation';
import {fetchData, setAddDialogOpen} from '../redux/actions';

import styles from './app.scss';

class App extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const {isFetching, dialogAddOpen, setAddDialogOpen, activeDetailId} = this.props;

        return (
            <div className={styles.app}>

                <Header
                    title="Vinyl"
                    rightAction="Add"
                    onRightActionClick={() => setAddDialogOpen(true)}
                />

                <Main>
                    <Loader active={isFetching} />
                    <AlbumsList />
                </Main>

                <AddDialog />

                <Dialog open={activeDetailId !== ''} />
            </div>
        );
    }
}

const mapState = state => ({
    isFetching: state.app.isFetching,
    activeDetailId: state.app.activeDetail
})

const mapDispatch = dispatch => ({
    fetchData() {
        dispatch(fetchData())
    },

    setAddDialogOpen(open) {
        dispatch(setAddDialogOpen(open))
    }
})

export default connect(mapState, mapDispatch)(App);
