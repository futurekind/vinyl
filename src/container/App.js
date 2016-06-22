import React, {Component} from 'react';
import {connect} from 'react-redux';

import AlbumsList from './AlbumsList';
import Main from './Main';
import {Header, Loader} from '../presentation';
import {fetchData} from '../redux/actions';

import styles from './app.scss';

class App extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const {isFetching} = this.props;

        return (
            <div className={styles.app}>

                <Header
                    title="Vinyl"
                    rightAction="Add"
                    onRightActionClick={() => {console.log('Header Click')}}
                />

                <Main>
                    <Loader active={isFetching} />
                    <AlbumsList />
                </Main>

            </div>
        );
    }
}

const mapState = state => ({
    isFetching: state.app.isFetching
})

const mapDispatch = dispatch => ({
    fetchData() {
        dispatch(fetchData())
    }
})

export default connect(mapState, mapDispatch)(App);
