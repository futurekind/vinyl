import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setDetailDialogOpen, setActiveDetail, fetchTracklistForAlbum, deleteAlbum} from '../redux/actions';
import {getAlbumById} from '../redux/root.reducer';

import {Dialog, Icon} from '../presentation';

import style from './detail-dialog.scss';

class DetailDialog extends Component {

    componentDidUpdate(oldProps) {
        const {open, album, onFetchTracklist} = this.props;

        if(oldProps.open !== open) {
            if(open && !album.tracklist) {
                onFetchTracklist(album.id)
            }
        }
    }

    render() {
        const {open, onSetDetailDialogOpen, album} = this.props;

        return (
            <Dialog open={open} onDismiss={this.handleDismiss.bind(this)}>

                <div className={style.header}>
                    <div className={style.header__cover}>
                        <img src={album.cover} />
                    </div>
                    <div className={style.header__title}>
                        <span className={style.title}>{album.title}</span>
                        <span className={style.artist}>{album.artist}</span>
                    </div>
                </div>

                <div className={style.heading}>Tracklist</div>
                <div className={style.tracklist}>
                    {this.renderTracklist(album)}
                </div>
                <div className={style.footer}>
                    <div className={style.footer__left}></div>
                    <div className={style.footer__right}>
                        <Icon onClick={this.handleDeleteAlbum.bind(this)}>
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                        </Icon>
                    </div>
                </div>
            </Dialog>
        )
    }

    renderTracklist(album) {
        if(!album.tracklist || album.tracklist.length === 0) {
            return 'Loading...'
        }

        if(album.tracklist.length === 0) {
            return 'No tracks loaded.'
        }

        return album.tracklist.map((track, i) => {
            return (
                <div className={style.track} key={i}>
                    <span className={style.track__number}>{i + 1}</span>
                    <span className={style.track__title}>{track}</span>
                </div>
            )
        })
    }

    handleDismiss() {
        const {onSetDetailDialogOpen, onSetActiveDetail} = this.props;

        onSetDetailDialogOpen(false)
        onSetActiveDetail(-1)
    }

    handleDeleteAlbum() {
        const {onDeleteAlbum, album} = this.props;

        if(confirm('Delete this album?')) {
            onDeleteAlbum(album.id)
            this.handleDismiss()
        }
    }
}

const mapState = state => ({
    open: state.detailDialog.isOpen,
    detailId: state.app.activeDetail,
    album: getAlbumById(state, state.app.activeDetail) || {}
})

const mapDispatch = dispatch => ({
    onSetDetailDialogOpen(open) {
        dispatch(setDetailDialogOpen(open))
    },

    onSetActiveDetail(id) {
        dispatch(setActiveDetail(id))
    },

    onFetchTracklist(albumId) {
        dispatch(fetchTracklistForAlbum(albumId))
    },

    onDeleteAlbum(id) {
        dispatch(deleteAlbum(id))
    }

})

export default connect(mapState, mapDispatch)(DetailDialog)
