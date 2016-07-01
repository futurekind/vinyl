import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setAddDialogOpen, searchApi, addAlbum} from '../redux/actions';
import {Dialog, Searchfield, Loader, Icon} from '../presentation'

import styles from './add-dialog.scss'

class AddDialog extends Component {
    render() {
        const {open, setOpen, searching, results, onSearch} = this.props;

        return (
            <Dialog open={open} onDismiss={() => setOpen(false)}>

                <Searchfield
                    onSearch={term => onSearch(term)}
                    placeholder="Search for Artist or Album"
                />

                <div className={`${styles.results} ${results.length > 0 ? styles['is-active'] : ''}`}>
                    {results.map(result => {
                        return this.renderResultSet(result)
                    })}
                </div>

                <Loader active={searching} />

            </Dialog>
        )
    }

    renderResultSet(result) {
        const hasBeenAdded = this.props.listOfAlbumIds.indexOf(result.collectionId) > -1;

        return (
            <div ref={result.collectionId} key={result.collectionId} className={`${styles.result} ${hasBeenAdded ? styles['is-added'] : ''}`} onClick={this.handleResultClick.bind(this, result, hasBeenAdded)}>
                <div className={styles.cover}>
                    <img src={result.artworkUrl60} alt="" />
                </div>
                <div className={styles.titles}>
                    <div className={styles.artist}>{result.artistName}</div>
                    <div className={styles.album}>{result.collectionName}</div>
                </div>
                <div className={styles.addedmsg}>
                    <Icon>
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </Icon>
                </div>
            </div>
        )
    }

    handleResultClick(result, alreadyAdded) {
        if(alreadyAdded) return;

        const {onAddAlbum} = this.props
        onAddAlbum(result)
    }
}

const mapState = state => ({
    open: state.addDialog.isOpen,
    searching: state.addDialog.isSearching,
    results: state.addDialog.results,
    listOfAlbumIds: state.albums.map(album => album.id)
})

const mapDispatch = dispatch =>({
    setOpen(open) {
        dispatch(setAddDialogOpen(open))
    },

    onSearch(searchterm) {
        dispatch(searchApi(searchterm))
    },

    onAddAlbum(data) {
        dispatch(addAlbum(data))
    }
})

export default connect(mapState, mapDispatch)(AddDialog);
