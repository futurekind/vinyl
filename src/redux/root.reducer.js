import {combineReducers} from 'redux';

import app from './app.reducer'
import albums from './albums.reducer'
import addDialog from './adddialog.reducer'

export default combineReducers({
    app,
    albums,
    addDialog
})
