const initialState = {
    isFetching: false,
    dialogAddOpen: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'SET_IS_FETCHING':
            return Object.assign({}, state, {
                isFetching: action.isFetching
            })
            break;

        case 'SET_DIALOG_ADD_OPEN':
            return Object.assign({}, state, {
                dialogAddOpen: action.isOpen
            })
            break;

        default:
            return state
    }
}
