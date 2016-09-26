import { createSelector } from 'reselect';
import moment from 'moment';

const albumsSelector = state => state.albums.sort((a, b) => {
    const aAddedtAt = moment(a.addedAt);
    const bAddedtAt = moment(b.addedAt);

    if(aAddedtAt.isAfter(bAddedtAt)) {
        return -1
    }

    if(aAddedtAt.isBefore(bAddedtAt)) {
        return 1
    }

    return 0;
});

const activeFilterSelector = state => state.filters.activeFilter;
const activeDetailId = state => state.app.activeDetail

export const getAllAlbums = createSelector(
    albumsSelector,
    activeFilterSelector,

    (albums, activeFilter) => {
        
        if(activeFilter === 0) return albums;

        return albums.filter(album => album.category === activeFilter)
    }
)

export const getAlbumById = createSelector(
    albumsSelector,
    activeDetailId,
    (albums, id) => albums.find(album => album.id === id)
)