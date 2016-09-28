import 'whatwg-fetch';
import {API} from './actions';

const exportStateToStorage = (state) => {
    return fetch(API, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: state
    })
}

export default store => next => action => {
    const result = next(action);

    switch (action.type) {
        case 'ADD_ALBUM':
        case 'SET_TRACKLIST':
        case 'DELETE_ALBUM':
        case 'SET_ALBUM_CATEGORY':
        case 'SET_ALBUM_URL':
        case 'SET_ALBUM_RELEASE_DATE':
            const state = JSON.stringify(store.getState().albums);
            exportStateToStorage(state)
            break;
    }

    return result;
}
