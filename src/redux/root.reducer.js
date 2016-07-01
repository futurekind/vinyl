import {combineReducers} from 'redux';

import app from './app.reducer'
import albums, * as fromAlbums from './albums.reducer'
import addDialog from './adddialog.reducer'
import detailDialog from './detaildialog.reducer'

export default combineReducers({
    app,
    albums,
    addDialog,
    detailDialog
})

export const sortAlbumsByAddedAt = (state) => fromAlbums.sortByAddedAt(state.albums)
export const getAlbumById = (state, id) => fromAlbums.getAlbumById(state.albums, id)
