import { createSelector } from 'reselect';
import moment from 'moment';

const sortAlbumsByAddedAt = albums => albums.sort((a, b) => {
    const aAddedtAt = moment(a.addedAt);
    const bAddedtAt = moment(b.addedAt);

    if(aAddedtAt.isAfter(bAddedtAt)) {
        return -1
    }

    if(aAddedtAt.isBefore(bAddedtAt)) {
        return 1
    }

    return 0;
})

const sortAlbumsByArtist = albums => albums.sort((a, b) => {
    if(a.artist < b.artist) return -1;
    return 1;
})

const sortAlbumsByTitle = albums => albums.sort((a, b) => {
    if(a.title < b.title) return -1;
    return 1
})

const albumsSelector = state => state.albums;
const activeFilterSelector = state => state.filters.activeFilter;
const activeDetailId = state => state.app.activeDetail
const activeSortSelector = state => state.filters.activeSort;

export const getAllAlbums = createSelector(
    albumsSelector,
    activeFilterSelector,
    activeSortSelector,

    (albums, activeFilter, activeSort) => {
        let sorted;

        switch(activeSort) {
            case 1:
                sorted = [...sortAlbumsByArtist(albums)];
                break;
            case 2:
                sorted = [...sortAlbumsByTitle(albums)];
                break;
            default: 
                sorted = [...sortAlbumsByAddedAt(albums)]
        }

        if(activeFilter === 0) return sorted;

        return sorted
                .filter(album => album.category === activeFilter)
    }
)

export const getAlbumById = createSelector(
    albumsSelector,
    activeDetailId,
    (albums, id) => albums.find(album => album.id === id)
)