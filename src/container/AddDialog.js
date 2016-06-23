import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setAddDialogOpen} from '../redux/actions';
import {Dialog} from '../presentation'

class AddDialog extends Component {
    render() {
        const {open, setOpen} = this.props;

        return (
            <Dialog open={open} onDismiss={() => setOpen(false)}>
                <div style={{color: '#fff'}}>-hallo</div>
            </Dialog>
        )
    }
}

const mapState = state => ({
    open: state.app.dialogAddOpen
})

const mapDispatch = dispatch =>({
    setOpen(open) {
        dispatch(setAddDialogOpen(open))
    }
})

export default connect(mapState, mapDispatch)(AddDialog);
