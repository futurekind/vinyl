import {combineReducers} from 'redux';

import app from './app.reducer'
import albums from './albums.reducer'

export default combineReducers({
    app,
    albums
})
