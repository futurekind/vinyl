import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Dialog} from '../presentation';

class DetailDialog extends Component {

    render() {
        return (
            <Dialog open={false} onDismiss={() => {}}>

            </Dialog>
        )
    }
}

const mapState = state => ({
    detailId: state.app.activeDetail
})

export default connect(mapState)(DetailDialog)
