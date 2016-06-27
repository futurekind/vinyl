import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {setAddDialogOpen} from '../redux/actions';

import styles from './albums-list.scss';

import {Album, Btn} from '../presentation';

class AlbumsList extends Component {
    render() {
        const {albums, onOpenDialog} = this.props;

        if(albums.length === 0) {
            return (
                <div className={styles.empty}>
                    <span>You have no albums in your list.</span>
                    <Btn label="Go, add some albums" onClick={() => onOpenDialog()} />
                </div>
            )
        }

        return (
            <div className={styles['albums-list']}>
                {albums.map(album => {
                    return <Album key={album.id} {...album} />
                })}
            </div>
        )
    }
}

const mapState = state => ({
    albums: state.albums.sort((a, b) => {
        if(moment(a).isAfter(moment(b))) {
            return -1
        } else {
            return 1
        }
    })
})

const mapDispatch = dispatch => ({
    onOpenDialog() {
        dispatch(setAddDialogOpen(true))
    }
})

export default connect(mapState, mapDispatch)(AlbumsList);
