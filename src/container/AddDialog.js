import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setAddDialogOpen, searchApi} from '../redux/actions';
import {Dialog, Searchfield, Loader} from '../presentation'

import styles from './add-dialog.scss'

class AddDialog extends Component {
    render() {
        const {open, setOpen, searching, results} = this.props;

        return (
            <Dialog open={open} onDismiss={() => setOpen(false)}>

                <Searchfield
                    onSearch={this.handleSearch.bind(this)}
                    placeholder="Search for Artist or Album"
                />

                <div className={`${styles.results} ${results.length > 0 ? styles['is-active'] : ''}`}>
                    {results.map(result => {
                        return (
                            <div key={result.collectionId} className={styles.result}>
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

    handleSearch(e) {
        e.preventDefault();

        const {onSearch} = this.props;
        const target = e.target;
        const searchterm = target.querySelector('[name="search"]').value

        onSearch(searchterm);
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
