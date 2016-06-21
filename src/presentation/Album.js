import React, {PropTypes as pt} from 'react';

import styles from './album.scss';

const Album = (props) => {

    return (
        <div className={styles.album}>
            <div className={styles.album__cover} style={{backgroundImage: `url('${props.cover}')`}} />
        </div>
    )
}

Album.propTypes = {
    cover: pt.string,
    title: pt.string,
    artist: pt.string
}

export default Album;
