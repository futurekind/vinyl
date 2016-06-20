import React, {Component} from 'react';
import {connect} from 'react-redux';

import styles from './albums-list.scss';

import {Album} from '../presentation';

class AlbumsList extends Component {
    render() {
        const {albums} = this.props;

        if(albums.length === 0) return null;

        return (
            <div className={styles['albums-list']}>
                {albums.map(album => {
                    return <Album key={album.id} {...album} />
                })}
            </div>
        )
    }
}

const mapState = state => ({
    albums: state.albums
})

export default connect(mapState)(AlbumsList);
