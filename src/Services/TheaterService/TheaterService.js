import { domain, groupID } from "../../Config/Setting";
import Axios from "axios";

export class TheaterService {
    fetchTheaterList = () => {
        return Axios({
            method: "GET",
            url: `${domain}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=BHDStar`,
        });
    };
}

export const theaterService = new TheaterService();