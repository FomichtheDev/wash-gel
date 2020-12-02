const initialState = {
    universal: true,
    color: true,
    for_kids: true,
    black: true,
    white: true,
};

const sortParamsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case 'SET_SORT_PARAMS':
            return {
                ...state,
                [action.payload]: !state[action.payload],
            };
    }
};

export default sortParamsReducer;