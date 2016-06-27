import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';

import {setAddDialogOpen, setActiveDetail} from '../redux/actions';
import {sortAlbumsByAddedAt} from '../redux/root.reducer';

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
        const {onSetActiveDetail} = this.props;

        onSetActiveDetail(id);
        this.moveAlbum(id)
    }

    moveAlbum(id) {
        const {activeDetailId} = this.props;

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

const mapState = state => ({
    albums: sortAlbumsByAddedAt(state),
    activeDetailId: state.app.activeDetail
})

const mapDispatch = dispatch => ({
    onOpenDialog() {
        dispatch(setAddDialogOpen(true))
    },

    onSetActiveDetail(id) {
        dispatch(setActiveDetail(id))
    }
})

export default connect(mapState, mapDispatch)(AlbumsList);
