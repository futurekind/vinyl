const initialState = {
    isFetching: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'SET_IS_FETCHING':
            return state
            break;

        default:
            return state
    }
}
