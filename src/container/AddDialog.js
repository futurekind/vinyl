import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setAddDialogOpen} from '../redux/actions';
import {Dialog, Searchfield, Loader} from '../presentation'

class AddDialog extends Component {
    render() {
        const {open, setOpen} = this.props;

        return (
            <Dialog open={open} onDismiss={() => setOpen(false)}>
                <Searchfield
                    onSearch={this.handleSearch.bind(this)}
                    placeholder="Search for Artist or Album"
                />
                <Loader active={false} />
            </Dialog>
        )
    }

    handleSearch(e) {
        e.preventDefault();
        const target = e.target;
        const searchterm = target.querySelector('[name="search"]').value

        console.log(searchterm);
    }
}

const mapState = state => ({
    open: state.addDialog.isOpen
})

const mapDispatch = dispatch =>({
    setOpen(open) {
        dispatch(setAddDialogOpen(open))
    }
})

export default connect(mapState, mapDispatch)(AddDialog);
