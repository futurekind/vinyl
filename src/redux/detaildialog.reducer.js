const initialState = {
    isOpen: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'SET_DIALOG_DETAIL_OPEN':
            return Object.assign({}, state, {
                isOpen: action.isOpen
            })
            break;

        default:
            return state;
    }
}
