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
