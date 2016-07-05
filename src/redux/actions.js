import jsonp from 'jsonp';

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

export const deleteAlbum = id => ({
    type: 'DELETE_ALBUM',
    id
})

export const setAlbumCategory = (id, category) => ({
    type: 'SET_ALBUM_CATEGORY',
    id,
    category
})

const setSearchResults = (results = []) => ({
    type: 'SET_SEARCHRESULTS',
    results
})
