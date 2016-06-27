import React, {Component, PropTypes as pt} from 'react';

import styles from './album.scss';

class Album extends Component {

    constructor() {
        super();

        this.state = {
            isloaded: false
        }
    }

    render() {
        const {cover, title, artist, onClick} = this.props;
        const {isLoaded} = this.state;

        return (
            <div className={styles.album} onClick={onClick} ref="album">
                <img src={cover} onLoad={() => this.setState({isLoaded: true})} className={styles.album__loadinghelper} />
                <div className={styles.album__cover}>
                    <div className={`${styles.album__img} ${isLoaded ?  styles['is-loaded'] : ''}`} style={{backgroundImage: `url('${cover}')`}} />
                </div>
            </div>
        )
    }


}

Album.defaultProps = {
    onClick: () => {},
    isActive: false
}

Album.propTypes = {
    cover: pt.string,
    title: pt.string,
    artist: pt.string,
    onClick: pt.func,
    isActive: pt.bool
}

export default Album;
