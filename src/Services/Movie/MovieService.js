import { domain, groupID } from "../../Config/Setting";
import Axios from "axios";

export class MovieService {
    fetchMovieList = () => {
        return Axios({
            method: "GET",
            url: `${domain}/quanlyphim/laydanhsachphim?manhom=${groupID}`,
        });
    };
    fetchMovieDetail = (maPhim) => {
        return Axios({
            method: "GET",
            url: `${domain}/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`,
        });
    };
}

export const movieService = new MovieService();