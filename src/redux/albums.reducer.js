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

        default:
            return state
    }
}

export const sortByAddedAt = (state) => {
    return state.sort((a, b) => {
        const aAddedtAt = moment(a.addedAt);
        const bAddedtAt = moment(b.addedAt);

        return bAddedtAt.isAfter(aAddedtAt)
    });
}
