import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";
import UserReducer from "./UserReducer";
import TheaterReducer from "./TheaterReducer";
import ModalTrailerReducer from "./ModalTrailerReducer";

const RootReducer = combineReducers({
    MovieReducer: MovieReducer,
    UserReducer: UserReducer,
    TheaterReducer: TheaterReducer,
    ModalTrailerReducer: ModalTrailerReducer,
});

export default RootReducer;