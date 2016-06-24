import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setAddDialogOpen, searchApi} from '../redux/actions';
import {Dialog, Searchfield, Loader} from '../presentation'

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
                        return (
                            <div ref={result.collectionId} key={result.collectionId} className={styles.result} onClick={this.handleResultClick.bind(this, result)} onTransitionEnd={this.handleOutTransitionEnd.bind(this)}>
                                <div className={styles.cover}>
                                    <img src={result.artworkUrl60} alt="" />
                                </div>
                                <div className={styles.titles}>
                                    <div className={styles.artist}>{result.artistName}</div>
                                    <div className={styles.album}>{result.collectionName}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <Loader active={searching} />

            </Dialog>
        )
    }

    handleResultClick(result) {
        console.log(result);
        const element = this.refs[result.collectionId];
        element.classList.add(styles.out)
    }

    handleOutTransitionEnd(e) {
        e.target.classList.add(styles.scale)
    }
}

const mapState = state => ({
    open: state.addDialog.isOpen,
    searching: state.addDialog.isSearching,
    results: state.addDialog.results
})

const mapDispatch = dispatch =>({
    setOpen(open) {
        dispatch(setAddDialogOpen(open))
    },

    onSearch(searchterm) {
        dispatch(searchApi(searchterm))
    }
})

export default connect(mapState, mapDispatch)(AddDialog);
