import jsonp from 'jsonp';
import 'whatwg-fetch';

export const API = 'https://api.myjson.com/bins/4r6zz'

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

export const fetchData = () => dispatch => {
    dispatch(setIsFetching(true));

    fetch(API)
        .then(resp => resp.json())
        .then(data => {
            dispatch(setIsFetching(false));
            dispatch({
                type: 'SET_ALBUMS',
                data: data
            })
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

export const fetchTracklistForAlbum = (albumId) => dispatch => {
    jsonp(`https://itunes.apple.com/lookup?id=${albumId}&entity=song`, (error, data) => {
        const tracklist = data.results.slice(1).map(track => track.trackName);

        dispatch({
            type: 'SET_TRACKLIST',
            albumId,
            tracklist
        })
    })
}

export const fetchItunesUrl = (albumId) => dispatch => {
    jsonp(`https://itunes.apple.com/lookup?id=${albumId}`, (error, data) => {
        dispatch({
            type: 'SET_ALBUM_URL',
            albumId,
            url: data.results[0].collectionViewUrl
        })
    })
}

export const fetchReleaseDate = (albumId) => dispatch => {
    jsonp(`https://itunes.apple.com/lookup?id=${albumId}`, (error, data) => {
        console.log(data.results[0]);

        dispatch({
            type: 'SET_ALBUM_RELEASE_DATE',
            albumId,
            releaseDate: data.results[0].releaseDate
        })
    })
}


export const deleteAlbum = id => ({
    type: 'DELETE_ALBUM',
    id
})

export const setAlbumCategory = (id, category) => ({
    type: 'SET_ALBUM_CATEGORY',
    id,
    category
})

export const setFilterSettingsOpen = (isOpen) => ({
    type: 'SET_FILTER_SETTINGS_OPEN',
    isOpen
})

export const setActiveFilter = filter => ({
    type: 'SET_ACTIVE_FILTER',
    filter
})

export const setActiveSort = sort => ({
    type: 'SET_ACTIVE_SORT',
    sort
})

const setSearchResults = (results = []) => ({
    type: 'SET_SEARCHRESULTS',
    results
})
