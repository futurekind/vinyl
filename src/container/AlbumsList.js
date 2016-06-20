import React, {Component} from 'react';
import {connect} from 'react-redux';

import styles from './albums-list.scss';

class AlbumsList extends Component {
    render() {
        const {albums} = this.props;

        if(albums.length === 0) return null;

        return (
            <div className={styles['albums-list']}>
            </div>
        )
    }
}

const mapState = state => ({
    albums: state.albums
})

export default connect(mapState)(AlbumsList);
