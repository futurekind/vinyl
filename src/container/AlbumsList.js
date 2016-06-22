import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

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
    albums: state.albums.sort((a, b) => {
        if(moment(a).isAfter(moment(b))) {
            return -1
        } else {
            return 1
        }
    })
})

export default connect(mapState)(AlbumsList);
