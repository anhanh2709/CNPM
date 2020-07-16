import { theaterService } from "../../Services/TheaterService/TheaterService";
import { createAction } from "./createAction";
import { FETCH_THEATERS } from "../Types/TheaterType";

export const fetchTheaters = () => {
    return (dispatch) => {
        theaterService
            .fetchTheaterList()
            .then((res) => {
                dispatch(createAction(FETCH_THEATERS, res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};