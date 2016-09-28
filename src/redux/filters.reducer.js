const initialState = {
    open: false,
    activeFilter: 0,
    activeSort: 0
}

export default (state = initialState, action) => {

    switch (action.type) {
        case 'SET_FILTER_SETTINGS_OPEN':
            return Object.assign({}, state, {
                open: action.isOpen
            })
            break;

        case 'SET_ACTIVE_FILTER':
            return Object.assign({}, state, {
                activeFilter: action.filter
            })
            break;

        case 'SET_ACTIVE_SORT':
            return Object.assign({}, state, {
                activeSort: action.sort
            })
            break;

        default:
            return state
    }
}
