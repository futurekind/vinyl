import {combineReducers} from 'redux';

import app from './app.reducer'
import albums, * as fromAlbums from './albums.reducer'
import addDialog from './adddialog.reducer'

export default combineReducers({
    app,
    albums,
    addDialog
})

export const sortAlbumsByAddedAt = (state) => fromAlbums.sortByAddedAt(state.albums)
