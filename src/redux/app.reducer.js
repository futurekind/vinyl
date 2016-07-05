const initialState = {
    isFetching: false,
    dialogAddOpen: false,
    filterSettingsOpen: false,
    activeDetail: ''
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'SET_IS_FETCHING':
            return Object.assign({}, state, {
                isFetching: action.isFetching
            })
            break;

        case 'SET_ACTIVE_DETAIL':
            return Object.assign({}, state, {
                activeDetail: action.detailId
            })
            break;

        case 'SET_FILTER_SETTINGS_OPEN':
            return Object.assign({}, state, {
                filterSettingsOpen: action.isOpen
            })
            break;

        default:
            return state
    }
}
