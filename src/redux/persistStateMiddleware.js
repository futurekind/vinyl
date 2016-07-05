const LOCALSTORAGE_KEY = 'vinylStore';

export const getDataFromLocalStorage = () => localStorage.getItem(LOCALSTORAGE_KEY);

export default store => next => action => {
    const result = next(action);

    switch (action.type) {
        case 'ADD_ALBUM':
        case 'SET_TRACKLIST':
        case 'DELETE_ALBUM':
            const state = JSON.stringify(store.getState().albums);
            localStorage.setItem(LOCALSTORAGE_KEY, state);
            break;
    }

    return result;
}
