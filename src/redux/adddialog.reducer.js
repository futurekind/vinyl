const initialState = {
    isSearching: false,
    results: [],
    isOpen: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DIALOG_ADD_OPEN':
            return Object.assign({}, state, {
                isOpen: action.isOpen
            })
            break;

        case 'SET_IS_SEARCHING':
            return Object.assign({}, state, {
                isSearching: action.isSearching
            })
            break;

        case 'SET_SEARCHRESULTS':
            return Object.assign({}, state, {
                results: action.results
            })
            break;

        default:
            return state
    }
}
