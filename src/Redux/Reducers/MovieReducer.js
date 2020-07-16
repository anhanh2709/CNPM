let initialState = {
    movies: [],
    movieDetail: null,
};

const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_MOVIES":
            {
                state.movies = action.payLoad;
                return {...state };
            }
        case "FETCH_MOVIE_DETAIL":
            {
                state.movieDetail = action.payLoad;
                return {...state };
            }
        default:
            return state;
    }
};

export default MovieReducer;