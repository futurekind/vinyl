import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';

import {setAddDialogOpen, setActiveDetail, setDetailDialogOpen} from '../redux/actions';
import {getAlbumsByCategoryFilter} from '../redux/root.reducer';

import styles from './albums-list.scss';

import {Album, Btn} from '../presentation';

class AlbumsList extends Component {

    render() {
        const {albums, onOpenDialog, activeDetailId} = this.props;

        if(albums.length === 0) {
            return (
                <div className={styles.empty}>
                    <span>You have no albums in your list.</span>
                    <Btn label="Go, add some albums" onClick={() => onOpenDialog()} />
                </div>
            )
        }

        return (
            <div className={styles['albums-list']} ref="container">
                {albums.map(album => {
                    return <Album
                        ref={album.id}
                        key={album.id}
                        isActive={activeDetailId === album.id}
                        {...album}
                        onClick={this.handleAlbumClick.bind(this, album.id)}
                    />
                })}
            </div>
        )
    }

    handleAlbumClick(id) {
        const {onSetActiveDetail, onSetDetailDialogOpen} = this.props;

        onSetActiveDetail(id);
        onSetDetailDialogOpen(true);
        // this.moveAlbum(id)
    }

    moveAlbum(id) {
        const albumNode = findDOMNode(this.refs[id]);

        const containerBCR = this.refs.container.getBoundingClientRect()
        const albumBCR = albumNode.getBoundingClientRect()

        const left = containerBCR.left - albumBCR.left
        const top = containerBCR.top - albumBCR.top

        albumNode.style.willChange = `transform`
        albumNode.style.transform = `translate(${left}px, ${top}px)`
        // albumNode.style.position = 'relative'
        albumNode.style.zIndex = 100
    }
}

const mapState = state => {
    return {
        albums: getAlbumsByCategoryFilter(state),
        activeDetailId: state.app.activeDetail
    }
}

const mapDispatch = dispatch => ({
    onOpenDialog() {
        dispatch(setAddDialogOpen(true))
    },

    onSetActiveDetail(id) {
        dispatch(setActiveDetail(id))
    },

    onSetDetailDialogOpen(open) {
        dispatch(setDetailDialogOpen(open))
    }
})

export default connect(mapState, mapDispatch)(AlbumsList);
