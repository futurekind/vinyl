import 'whatwg-fetch';

import mockAlbums from '../data/albums.json';

export const fetchData = () => dispatch => {
    dispatch(setIsFetching(true));

    setTimeout(() => {
        dispatch({
            type: 'SET_ALBUMS',
            albums: mockAlbums
        })

        dispatch(setIsFetching(false))

    }, 1500)
}

export const setIsFetching = isFetching => ({
    type: 'SET_IS_FETCHING',
    isFetching
})

export const setAddDialogOpen = (isOpen = false) => ({
    type: 'SET_DIALOG_ADD_OPEN',
    isOpen
})

export const setIsSearching = (isSearching) => ({
    type: 'SET_IS_SEARCHING',
    isSearching
})

export const searchApi = (searchterm) => dispatch => {
    dispatch(setIsSearching(true))
    dispatch(setSearchResults([]))

    fetch(`https://itunes.apple.com/search?term=${searchterm}&media=music&entity=album`)
        .then(resp => resp.json())
        .then(data => {
            dispatch(setIsSearching(false))
            dispatch(setSearchResults(data.results))
        })
        .catch(error => {
            dispatch(setIsSearching(false))
            console.error(error)
        })
}

const setSearchResults = (results = []) => ({
    type: 'SET_SEARCHRESULTS',
    results
})
