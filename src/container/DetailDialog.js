import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setDetailDialogOpen, setActiveDetail, fetchTracklistForAlbum, deleteAlbum, setAlbumCategory} from '../redux/actions';
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
                    <div className={style.footer__left}>
                        <div className={`${style.btn} ${album.category === 1 ? style.active : ''}`}  onClick={this.handleSetCategory.bind(this, 1)}>
                            <Icon><path d="M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z"/></Icon>
                            <span>Listen</span>
                        </div>

                        <div className={`${style.btn} ${album.category === 2 ? style.active : ''}`} onClick={this.handleSetCategory.bind(this, 2)}>
                            <Icon><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></Icon>
                            <span>Buy</span>
                        </div>
                    </div>

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

    handleSetCategory(category) {
        const {album, onSetAlbumCategory} = this.props;

        onSetAlbumCategory(album.id, category);
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
    },

    onSetAlbumCategory(id, category) {
        dispatch(setAlbumCategory(id, category))
    }

})

export default connect(mapState, mapDispatch)(DetailDialog)
