import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setAddDialogOpen} from '../redux/actions';
import {sortAlbumsByAddedAt} from '../redux/root.reducer';

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
    albums: sortAlbumsByAddedAt(state)
})

const mapDispatch = dispatch => ({
    onOpenDialog() {
        dispatch(setAddDialogOpen(true))
    }
})

export default connect(mapState, mapDispatch)(AlbumsList);
