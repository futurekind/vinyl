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
                    url: action.data.collectionViewUrl,
                    addedAt: new Date().toISOString()
                }
            ];
            break;

        case 'SET_TRACKLIST':
            const indexForTracklist = state.findIndex(album => album.id === action.albumId);
            return [
                ...state.slice(0, indexForTracklist),
                Object.assign({}, state[indexForTracklist], {
                    tracklist: action.tracklist
                }),
                ...state.slice(indexForTracklist + 1)
            ];
            break;

        case 'DELETE_ALBUM':
            const indexToDelete = state.findIndex(album => album.id === action.id);

            return [
                ...state.slice(0, indexToDelete),
                ...state.slice(indexToDelete + 1),
            ];

            break;

        case 'SET_ALBUM_CATEGORY':
            const indexForCategory = state.findIndex(album => album.id === action.id);

            return [
                ...state.slice(0, indexForCategory),
                Object.assign({}, state[indexForCategory], {
                    category: action.category
                }),
                ...state.slice(indexForCategory + 1)
            ];

            break;

        default:
            return state
    }
}

const sortByAddedAt = (state) => {
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

export const getAlbumsByCategoryFilter = (state, filter) => {
    if(filter > 0) {
        return sortByAddedAt(state.filter(album => album.category === filter))
    }

    return sortByAddedAt(state);
}
