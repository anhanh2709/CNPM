let initialState = {
    movie: [],
};

const ModalTrailerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEE_TRAILER":
            {
                return {...state };
            }
        default:
            return state;
    }
};

export default ModalTrailerReducer;