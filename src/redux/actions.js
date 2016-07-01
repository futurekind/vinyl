import jsonp from 'jsonp';

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

    jsonp(`https://itunes.apple.com/search?term=${searchterm}&media=music&entity=album`, (error, data) => {
        dispatch(setIsSearching(false))
        dispatch(setSearchResults(data.results))
    })
}

export const setActiveDetail = (detailId = '') => ({
    type: 'SET_ACTIVE_DETAIL',
    detailId
})

export const addAlbum = (data) => ({
    type: 'ADD_ALBUM',
    data
})

export const setDetailDialogOpen = (isOpen) => ({
    type: 'SET_DIALOG_DETAIL_OPEN',
    isOpen
})

const setSearchResults = (results = []) => ({
    type: 'SET_SEARCHRESULTS',
    results
})