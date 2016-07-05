import {combineReducers} from 'redux';

import app from './app.reducer'
import albums, * as fromAlbums from './albums.reducer'
import addDialog from './adddialog.reducer'
import detailDialog from './detaildialog.reducer'
import filters from './filters.reducer'

export default combineReducers({
    app,
    albums,
    addDialog,
    detailDialog,
    filters
})

export const sortAlbumsByAddedAt = (state) => fromAlbums.sortByAddedAt(state.albums)
export const getAlbumById = (state, id) => fromAlbums.getAlbumById(state.albums, id)
