const initialState = {
    isFetching: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'SET_IS_FETCHING':
            return Object.assign({}, state.isFetching, {
                isFetching: action.isFetching
            })
            break;

        default:
            return state
    }
}
