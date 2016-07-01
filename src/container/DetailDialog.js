import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setDetailDialogOpen, setActiveDetail} from '../redux/actions';
import {getAlbumById} from '../redux/root.reducer';

import {Dialog} from '../presentation';

import style from './detail-dialog.scss';

class DetailDialog extends Component {

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
            </Dialog>
        )
    }

    handleDismiss() {
        const {onSetDetailDialogOpen, onSetActiveDetail} = this.props;

        onSetDetailDialogOpen(false)
        onSetActiveDetail(-1)
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
    }

})

export default connect(mapState, mapDispatch)(DetailDialog)
