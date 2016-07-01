import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setDetailDialogOpen} from '../redux/actions';

import {Dialog} from '../presentation';

class DetailDialog extends Component {

    render() {
        const {open, onSetDetailDialogOpen} = this.props;

        return (
            <Dialog open={open} onDismiss={() => onSetDetailDialogOpen(false)}>

            </Dialog>
        )
    }
}

const mapState = state => ({
    open: state.detailDialog.isOpen,
    detailId: state.app.activeDetail
})

const mapDispatch = dispatch => ({
    onSetDetailDialogOpen(open) {
        dispatch(setDetailDialogOpen(open))
    }
})

export default connect(mapState, mapDispatch)(DetailDialog)
