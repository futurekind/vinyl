import moment from 'moment';
const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {

        case 'SET_ALBUMS':
            return action.data || state
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

        case 'SET_ALBUM_URL':
            const indexForUrl = state.findIndex(album => album.id === action.albumId);
            return [
                ...state.slice(0, indexForUrl),
                Object.assign({}, state[indexForUrl], {
                    url: action.url
                }),
                ...state.slice(indexForUrl + 1)
            ];
            break;

        case 'SET_ALBUM_RELEASE_DATE':
            const indexForReleaseDate = state.findIndex(album => album.id === action.albumId);
            return [
                ...state.slice(0, indexForReleaseDate),
                Object.assign({}, state[indexForReleaseDate], {
                    releaseDate: action.releaseDate
                }),
                ...state.slice(indexForReleaseDate + 1)
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