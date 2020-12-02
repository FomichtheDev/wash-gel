const menuStatusReducer = (state = false, action) => {
    switch (action.type) {
        default:
            return state;
        case 'TOGGLE_MENU':
            return !state
    }
};

export default menuStatusReducer;