import moment from 'moment';
const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {

        case 'SET_ALBUMS':
            return action.albums
            break;

        case 'ADD_ALBUM':
            return [
                ...state,
                {
                    id: action.data.collectionId,
                    title: action.data.collectionName,
                    artist: action.data.artistName,
                    cover: action.data.artworkUrl100,
                    addedAt: new Date().toISOString()
                }
            ];
            break;

        case 'SET_TRACKLIST':
            let index = state.findIndex(album => album.id === action.albumId);
            return [
                ...state.slice(0, index),
                Object.assign({}, state[index], {
                    tracklist: action.tracklist
                }),
                ...state.slice(index + 1)
            ];
            break;

        default:
            return state
    }
}

export const sortByAddedAt = (state) => {
    return state.sort((a, b) => {
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
}

export const getAlbumById = (state, id) => {
    return state.filter(album => album.id === id)[0]
}
