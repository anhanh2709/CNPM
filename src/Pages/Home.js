import React, { Component } from "react";
import { connect } from "react-redux";
import ".././App.scss";
import MovieList from "./MovieList";
import ModalTrailer from "./ModalTrailer";
import { fetchMovies } from "../Redux/Actions/MovieAction";


class Home extends Component {
  renderABC = () => {
    return (
      <>
        {/* movieTheater */}
        <section className="movieTheater" id="movieTheater">
          <div className="movieTheater__background" />
          <div className="movieTheater__content">
            <div
              className="nav nav-pills flex-column"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-item nav-link active"
                id="nav-cgv-tab"
                data-toggle="tab"
                href="#CGV"
                role="tab"
                aria-controls="CGV"
                aria-selected="true"
              >
                <img src="img/cgv.png" alt="CGV" />
              </a>
              <a
                className="nav-item nav-link"
                id="nav-bhd-tab"
                data-toggle="tab"
                href="#BHD"
                role="tab"
                aria-controls="BHD"
                aria-selected="false"
              >
                <img src="img/bhd.png" alt="BHD" />
              </a>
              <a
                className="nav-item nav-link"
                id="nav-galaxy-tab"
                data-toggle="tab"
                href="#GALAXY"
                role="tab"
                aria-controls="GALAXY"
                aria-selected="false"
              >
                <img src="img/galaxycine.png" alt="GALAXY" />
              </a>
              <a
                className="nav-item nav-link"
                id="nav-ddc-tab"
                data-toggle="tab"
                href="#DDC"
                role="tab"
                aria-controls="DDC"
                aria-selected="false"
              >
                <img src="img/dongdacinema.png" alt="DDC" />
              </a>
              <a
                className="nav-item nav-link"
                id="nav-megags-tab"
                data-toggle="tab"
                href="#MEGAGS"
                role="tab"
                aria-controls="MEGAGS"
                aria-selected="false"
              >
                <img src="img/megags.png" alt="MEGAGS" />
              </a>
              <a
                className="nav-item nav-link"
                id="nav-dcine-tab"
                data-toggle="tab"
                href="#DCINE"
                role="tab"
                aria-controls="DCINE"
                aria-selected="false"
              >
                <img src="img/dcine.png" alt="DCINE" />
              </a>
              <a
                className="nav-item nav-link"
                id="nav-lotte-tab"
                data-toggle="tab"
                href="#LOTTE"
                role="tab"
                aria-controls="LOTTE"
                aria-selected="false"
              >
                <img src="img/lottecinema.png" alt="LOTTE" />
              </a>
            </div>
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="CGV"
                role="tabpanel"
                aria-labelledby="nav-cgv-tab"
              >
                <div className="cinemaLocation active">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Saigonres Nguyễn Xí
                    </p>
                    <p>
                      Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P 26, Q Bình
                      Thạnh
                    </p>
                    <p>{/* <a>[chi tiết]</a> */}</p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Trường Sơn (CGV CT Plaza)
                    </p>
                    <p>
                      Tầng 10, Tòa nhà Vietjet Plaza, 60A Trường Sơn, P.2, Q.
                      Tân Bình, TP.HCM, Việt Nam
                    </p>
                    <p>{/* <a>[chi tiết]</a> */}</p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Vivo City
                    </p>
                    <p>
                      Lầu 5, Trung tâm thương mại SC VivoCity - 1058 Nguyễn Văn
                      Linh, Quận 7
                    </p>
                    <p>
                      <a href>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Sư Vạn Hạnh
                    </p>
                    <p>
                      Tầng 6, Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Phường 12, Quận 10
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Pandora City
                    </p>
                    <p>
                      Lầu 3, Pandora City 1/1 Trường Chinh Quận Tân Phú TP. Hồ
                      Chí Minh
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Pearl Plaza
                    </p>
                    <p>
                      Tầng 5, Pearl Plaza, 561A Điện Biên Phủ, P.25, Q.Bình
                      Thạnh, TP.HCM
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-cuchi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Satra Củ Chi
                    </p>
                    <p>
                      Tầng 3, TTTM Satra Củ Chi, Số 1239, Tỉnh Lộ 8, Ấp Thạnh
                      An, Xã Trung An, Huyện Củ Chi, TP.HCM
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Aeon Tân Phú
                    </p>
                    <p>
                      Lầu 3, Aeon Mall 30 Bờ Bao Tân Thắng, P. Sơn Kỳ Quận Tân
                      Phú TP. Hồ Chí Minh
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Parkson Đồng Khởi
                    </p>
                    <p>
                      Tầng 5, số 35 bis-45, đường Lê Thánh Tôn, Phường Bến Nghé,
                      Quận 1, Tp. Hồ Chí Minh, Việt Nam
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Vincom Gò Vấp
                    </p>
                    <p>
                      Tầng 5 TTTM Vincom Plaza Gò Vấp, 12 Phan Văn Trị, Phường
                      7, Quận Gò Vấp
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Vincom Center Landmark 81
                    </p>
                    <p>
                      Tầng B1 , TTTM Vincom Center Landmark 81, 772 Điện Biên
                      Phủ, P.22, Q. Bình Thạnh, HCM
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="BHD"
                role="tabpanel"
                aria-labelledby="nav-bhd-tab"
              >
                <div className="cinemaLocation active">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Saigonres Nguyễn Xí
                    </p>
                    <p>
                      Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P 26, Q Bình
                      Thạnh
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Trường Sơn (CGV CT Plaza)
                    </p>
                    <p>
                      Tầng 10, Tòa nhà Vietjet Plaza, 60A Trường Sơn, P.2, Q.
                      Tân Bình, TP.HCM, Việt Nam
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Vivo City
                    </p>
                    <p>
                      Lầu 5, Trung tâm thương mại SC VivoCity - 1058 Nguyễn Văn
                      Linh, Quận 7
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Sư Vạn Hạnh
                    </p>
                    <p>
                      Tầng 6, Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Phường 12, Quận 10
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Pandora City
                    </p>
                    <p>
                      Lầu 3, Pandora City 1/1 Trường Chinh Quận Tân Phú TP. Hồ
                      Chí Minh
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="GALAXY"
                role="tabpanel"
                aria-labelledby="nav-galaxy-tab"
              >
                <div className="cinemaLocation active">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Saigonres Nguyễn Xí
                    </p>
                    <p>
                      Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P 26, Q Bình
                      Thạnh
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="col-sm-3 px-0"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo col-sm-9 px-0">
                    <p>
                      <span>CGV</span> - Trường Sơn (CGV CT Plaza)
                    </p>
                    <p>
                      Tầng 10, Tòa nhà Vietjet Plaza, 60A Trường Sơn, P.2, Q.
                      Tân Bình, TP.HCM, Việt Nam
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Vivo City
                    </p>
                    <p>
                      Lầu 5, Trung tâm thương mại SC VivoCity - 1058 Nguyễn Văn
                      Linh, Quận 7
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Sư Vạn Hạnh
                    </p>
                    <p>
                      Tầng 6, Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Phường 12, Quận 10
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Pandora City
                    </p>
                    <p>
                      Lầu 3, Pandora City 1/1 Trường Chinh Quận Tân Phú TP. Hồ
                      Chí Minh
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Vivo City
                    </p>
                    <p>
                      Lầu 5, Trung tâm thương mại SC VivoCity - 1058 Nguyễn Văn
                      Linh, Quận 7
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Sư Vạn Hạnh
                    </p>
                    <p>
                      Tầng 6, Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Phường 12, Quận 10
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
                <div className="cinemaLocation">
                  <img
                    className="imgCinema"
                    src="img/movieTheater/cgv-saigonres-nguyen-xi.jpg"
                    alt="CGV"
                  />
                  <div className="cinemaInfo">
                    <p>
                      <span>CGV</span> - Pandora City
                    </p>
                    <p>
                      Lầu 3, Pandora City 1/1 Trường Chinh Quận Tân Phú TP. Hồ
                      Chí Minh
                    </p>
                    <p>
                      <a>[chi tiết]</a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="DDC"
                role="tabpanel"
                aria-labelledby="nav-ddc-tab"
              >
                DDC
              </div>
              <div
                className="tab-pane fade"
                id="MEGAGS"
                role="tabpanel"
                aria-labelledby="nav-megags-tab"
              >
                MEGAGS
              </div>
              <div
                className="tab-pane fade"
                id="DCINE"
                role="tabpanel"
                aria-labelledby="nav-dcine-tab"
              >
                DCINE
              </div>
              <div
                className="tab-pane fade"
                id="LOTTE"
                role="tabpanel"
                aria-labelledby="nav-lotte-tab"
              >
                LOTTE
              </div>
            </div>
            <div className="listMovie">
              <p>Không có suất chiếu</p>
            </div>
          </div>
        </section>
        {/* news */}
        <section className="news" id="news">
          <div className="news__nav">
            <ul className="nav nav-tabs" id="introduceabcTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Điện Ảnh 24h
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="review-tab"
                  data-toggle="tab"
                  href="#review"
                  role="tab"
                  aria-controls="review"
                  aria-selected="false"
                >
                  Review
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="promotion-tab"
                  data-toggle="tab"
                  href="#promotion"
                  role="tab"
                  aria-controls="promotion"
                  aria-selected="false"
                >
                  Khuyến Mãi
                </a>
              </li>
            </ul>
          </div>
          <div className="news__content">
            <div className="tab-content" id="introduceabcTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="introduce">
                  <div className="introduce__item">
                    <a>
                      <img
                        src="img/22-thuat-ngu-bo-tui-cho-fan-dien-anh.jpg"
                        alt={22}
                      />
                      <p>22 thuật ngữ 'bỏ túi' cho fan điện ảnh</p>
                    </a>
                    <p>
                      Điện ảnh ngày càng phổ biến qua Internert, những thuật ngữ
                      như "Easter Egg”, “Streaming”,… được đề cập càng nhiều
                      hơn.
                    </p>
                    <div className="item__icon">
                      <div className="like">
                        <img src="img/like.png" alt="like" />
                        <span>0</span>
                      </div>
                      <div className="comment">
                        <a>
                          <img src="img/comment.png" alt="comment" />
                          <span>0</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="introduce__item">
                    <a>
                      <img
                        src="img/cap-nhat-tinh-hinh-tam-ngung-hoat-dong.jpg"
                        alt={22}
                      />
                      <p>
                        [Cập nhật] Tình hình tạm ngưng hoạt động của các Rạp
                        Phim.
                      </p>
                    </a>
                    <p>
                      Điện ảnh ngày càng phổ biến qua Internert, những thuật ngữ
                      như "Easter Egg”, “Streaming”,… được đề cập càng nhiều
                      hơn.
                    </p>
                    <div className="item__icon">
                      <div className="like">
                        <img src="img/like.png" alt="like" />
                        <span>0</span>
                      </div>
                      <div className="comment">
                        <a>
                          <img src="img/comment.png" alt="comment" />
                          <span>0</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clear" />
                <div className="review">
                  <div className="review__item">
                    <a>
                      <img src="img/studio-ghibli.jpg" alt="studio-ghibli" />
                      <p>
                        Đâu là những nhân vật đáng nhớ xuất thân từ Studio
                        Ghibli?
                      </p>
                    </a>
                    <p>
                      Totoro, phi công mặt heo Porco Rosso, công chúa San, Vô
                      Diện,... là những biểu tượng mà Studio Ghibli từng đem đến
                      cho người hâm mộ trên toàn cầu.
                    </p>
                    <div className="item__icon">
                      <div className="like">
                        <img src="img/like.png" alt="like" />
                        <span>0</span>
                      </div>
                      <div className="comment">
                        <a>
                          <img src="img/comment.png" alt="comment" />
                          <span>0</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="review__item">
                    <a>
                      <img src="img/nav1.jpg" alt="so-do" />
                      <p>
                        Số Đỏ sẽ bước lên màn ảnh dưới sự chỉ đạo của Phan Gia
                        Nhật Linh
                      </p>
                    </a>
                    <p>
                      Khán giả Việt Nam sẽ được gặp Xuân Tóc Đỏ, Phó Đoan,...
                      trên màn bạc điện ảnh.
                    </p>
                    <div className="item__icon">
                      <div className="like">
                        <img src="img/like.png" alt="like" />
                        <span>0</span>
                      </div>
                      <div className="comment">
                        <a>
                          <img src="img/comment.png" alt="comment" />
                          <span>0</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="review__itemEnd">
                    <div className="endItem">
                      <a className="imgReview">
                        <img src="img/nav2.jpg" alt="cigarettes" />
                      </a>
                      <a>
                        <p className="introReview">
                          Cigarettes After Sex chợt thoáng xuất hiện trong
                          trailer phim tâm lý Promising Young Woman
                        </p>
                      </a>
                    </div>
                    <div className="clear" />
                    <div className="endItem">
                      <a className="imgReview">
                        <img src="img/nav3.jpg" alt="cigarettes" />
                      </a>
                      <a>
                        <p className="introReview">
                          Cigarettes After Sex chợt thoáng xuất hiện trong
                          trailer phim tâm lý Promising Young Woman
                        </p>
                      </a>
                    </div>
                    <div className="clear" />
                    <div className="endItem">
                      <a className="imgReview">
                        <img src="img/nav3.jpg" alt="cigarettes" />
                      </a>
                      <a>
                        <p className="introReview">
                          Cigarettes After Sex chợt thoáng xuất hiện trong
                          trailer phim tâm lý Promising Young Woman
                        </p>
                      </a>
                    </div>
                    <div className="clear" />
                    <div className="endItem">
                      <a className="imgReview">
                        <img src="img/nav4.jpg" alt="cigarettes" />
                      </a>
                      <a>
                        <p className="introReview">
                          Cigarettes After Sex chợt thoáng xuất hiện trong
                          trailer phim tâm lý Promising Young Woman
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="clear" />
                <div className="newsButton d-flex justify-content-center">
                  <button className="btn btn--white">Xem thêm</button>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="review"
                role="tabpanel"
                aria-labelledby="review-tab"
              >
                <div className="introduce">
                  <div className="introduce__item">
                    <a>
                      <img src="img/covid-19.jpg" alt="covid-19" />
                      <p>
                        COVID-19 là bản chính thức của MEV-1 phim contagion
                        (2011)
                      </p>
                    </a>
                    <p>
                      Là một bộ phim chính kịch được ra mắt vào năm 2011, với bộ
                      đôi đạo diễn và biên kịch là Steven Soderbergh và Scott Z.
                      Burns, cùng sự tham gia của dàn sao như Gwyneth Paltrow,
                      Matt Damon, Kate Winslet, Marion Cotillard, Laurence
                    </p>
                    <div className="item__icon">
                      <div className="like">
                        <img src="img/like.png" alt="like" />
                        <span>0</span>
                      </div>
                      <div className="comment">
                        <a>
                          <img src="img/comment.png" alt="comment" />
                          <span>0</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="introduce__item">
                    <a>
                      <img src="img/sieuvesisovo.jpg" alt="sieuvesisovo" />
                      <p>
                        [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao
                        giờ lầy lội và hài hước đến thế
                      </p>
                    </a>
                    <p>
                      Nhây vô đối, cười ngả nghiêng với phong cách cứu sếp sòng
                      đậm chất Thái.
                    </p>
                    <div className="item__icon">
                      <div className="like">
                        <img src="img/like.png" alt="like" />
                        <span>0</span>
                      </div>
                      <div className="comment">
                        <a>
                          <img src="img/comment.png" alt="comment" />
                          <span>0</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clear" />
                <div className="review">
                  <div className="review__item">
                    <a>
                      <img
                        src="img/bloodshot-review.jpg"
                        alt="bloodshot-review"
                      />
                      <p>
                        [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh
                        hùng Valiant
                      </p>
                    </a>
                    <p>
                      Với chất lượng hành động tốt, nội dung ở mức ổn, Bloodshot
                      đã hoàn thành xuất sắc vai trò mở màn cho một vũ trụ siêu
                      anh hùng mới của hãng Valiant.
                    </p>
                    <div className="item__icon">
                      <div className="like">
                        <img src="img/like.png" alt="like" />
                        <span>0</span>
                      </div>
                      <div className="comment">
                        <a>
                          <img src="img/comment.png" alt="comment" />
                          <span>0</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="review__item">
                    <a>
                      <img src="img/nang-3-review.jpg" alt="nang-3-review" />
                      <p>
                        [Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân
                        cảm động của Khả Như và Kiều Minh Tuấn
                      </p>
                    </a>
                    <p>
                      Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu
                      chuyện tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật
                      chính.
                    </p>
                    <div className="item__icon">
                      <div className="like">
                        <img src="img/like.png" alt="like" />
                        <span>0</span>
                      </div>
                      <div className="comment">
                        <a>
                          <img src="img/comment.png" alt="comment" />
                          <span>0</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="review__itemEnd">
                    <div className="endItem">
                      <a className="imgReview">
                        <img src="img/nav2.jpg" alt="cigarettes" />
                      </a>
                      <a>
                        <p className="introReview">
                          Cigarettes After Sex chợt thoáng xuất hiện trong
                          trailer phim tâm lý Promising Young Woman
                        </p>
                      </a>
                    </div>
                    <div className="clear" />
                    <div className="endItem">
                      <a className="imgReview">
                        <img src="img/nav3.jpg" alt="cigarettes" />
                      </a>
                      <a>
                        <p className="introReview">
                          Cigarettes After Sex chợt thoáng xuất hiện trong
                          trailer phim tâm lý Promising Young Woman
                        </p>
                      </a>
                    </div>
                    <div className="clear" />
                    <div className="endItem">
                      <a className="imgReview">
                        <img src="img/nav3.jpg" alt="cigarettes" />
                      </a>
                      <a>
                        <p className="introReview">
                          Cigarettes After Sex chợt thoáng xuất hiện trong
                          trailer phim tâm lý Promising Young Woman
                        </p>
                      </a>
                    </div>
                    <div className="clear" />
                    <div className="endItem">
                      <a className="imgReview">
                        <img src="img/nav4.jpg" alt="cigarettes" />
                      </a>
                      <a>
                        <p className="introReview">
                          Cigarettes After Sex chợt thoáng xuất hiện trong
                          trailer phim tâm lý Promising Young Woman
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="clear" />
                <div className="newsButton d-flex justify-content-center">
                  <button className="btn btn--white">Xem thêm</button>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="promotion"
                role="tabpanel"
                aria-labelledby="promotion-tab"
              >
                <div className="introduce">
                  <div className="introduce__item">
                    <a>
                      <img
                        src="img/cgv-bhd-star-mua-2-ve-tinh-tien-1.jpg"
                        alt="cgv-bhd-star-mua-2-ve-tinh-tien-1"
                      />
                      <p>
                        CGV &amp; BHD Star – Mua 2 vé tính tiền 1 khi thanh toán
                        qua ZaloPay
                      </p>
                    </a>
                    <p>
                      Áp dụng cho khách hàng mới của ZaloPay khi mua tại CGV
                      HOẶC BHD Star các suất chiếu Thứ 6, Thứ 7, Chủ Nhật.
                    </p>
                    <div className="item__icon">
                      <div className="like">
                        <img src="img/like.png" alt="like" />
                        <span>0</span>
                      </div>
                      <div className="comment">
                        <a>
                          <img src="img/comment.png" alt="comment" />
                          <span>0</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="introduce__item">
                    <a>
                      <img src="img/hoan-tien-20.jpg" alt="hoan-tien-20" />
                      <p>Mua vé phim BHD Star - Nhận ngay Hoàn Tiền 20%</p>
                    </a>
                    <p>
                      Mua vé BHD Star thả ga, nhận ngay hoàn tiền xả láng 20%
                      khi thanh toán qua ZaloPay.
                    </p>
                    <div className="item__icon">
                      <div className="like">
                        <img src="img/like.png" alt="like" />
                        <span>0</span>
                      </div>
                      <div className="comment">
                        <a>
                          <img src="img/comment.png" alt="comment" />
                          <span>0</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clear" />
                <div className="review">
                  <div className="review__item">
                    <a>
                      <img
                        src="img/mua-2-tinh-tien-1.png"
                        alt="mua-2-tinh-tien-1"
                      />
                      <p>Chào bạn mới - BHD Star Mua 2 Tính Tiền 1</p>
                    </a>
                    <p>
                      Ưu đãi cực chất: Mua 2 vé BHD Star chỉ cần trả tiền 1 vé
                      khi thanh toán qua ZaloPay.
                    </p>
                    <div className="item__icon">
                      <div className="like">
                        <img src="img/like.png" alt="like" />
                        <span>0</span>
                      </div>
                      <div className="comment">
                        <a>
                          <img src="img/comment.png" alt="comment" />
                          <span>0</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="review__item">
                    <a>
                      <img src="img/mua-1-tang-1.jpg" alt="mua-1-tang-1" />
                      <p>Vui Tết cùng ZaloPay - CGV Mua 1 Tặng 1</p>
                    </a>
                    <p>
                      Ưu đãi mua 1 tặng 1 vé xem phim tại CGV cho khách hàng mới
                      khi thanh toán bằng ZaloPay.
                    </p>
                    <div className="item__icon">
                      <div className="like">
                        <img src="img/like.png" alt="like" />
                        <span>0</span>
                      </div>
                      <div className="comment">
                        <a>
                          <img src="img/comment.png" alt="comment" />
                          <span>0</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="review__itemEnd">
                    <div className="endItem">
                      <a className="imgReview">
                        <img src="img/nav2.jpg" alt="cigarettes" />
                      </a>
                      <a>
                        <p className="introReview">
                          Cigarettes After Sex chợt thoáng xuất hiện trong
                          trailer phim tâm lý Promising Young Woman
                        </p>
                      </a>
                    </div>
                    <div className="clear" />
                    <div className="endItem">
                      <a className="imgReview">
                        <img src="img/nav3.jpg" alt="cigarettes" />
                      </a>
                      <a>
                        <p className="introReview">
                          Cigarettes After Sex chợt thoáng xuất hiện trong
                          trailer phim tâm lý Promising Young Woman
                        </p>
                      </a>
                    </div>
                    <div className="clear" />
                    <div className="endItem">
                      <a className="imgReview">
                        <img src="img/nav3.jpg" alt="cigarettes" />
                      </a>
                      <a>
                        <p className="introReview">
                          Cigarettes After Sex chợt thoáng xuất hiện trong
                          trailer phim tâm lý Promising Young Woman
                        </p>
                      </a>
                    </div>
                    <div className="clear" />
                    <div className="endItem">
                      <a className="imgReview">
                        <img src="img/nav4.jpg" alt="cigarettes" />
                      </a>
                      <a>
                        <p className="introReview">
                          Cigarettes After Sex chợt thoáng xuất hiện trong
                          trailer phim tâm lý Promising Young Woman
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="clear" />
                <div className="newsButton d-flex justify-content-center">
                  <button className="btn--white">Xem thêm</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  render() {
    return (
      <>
        <ModalTrailer modalTrailer={this.ModalTrailer} />
        <MovieList movieList={this.props.movieList} />
        {/* <TheaterList theaterList={this.props.theaterList} /> */}
      </>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.MovieReducer.movies,
    theaterList: state.TheaterReducer.theaters,
    modalTrailer: state.ModalTrailerReducer,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     seeTrailer: (movie) => {
//       const movieTrailer = {
//         trailer: movie.trailer,
//       };
//       const action = {
//         type: "SEE_TRAILER",
//         trailer: movieTrailer,
//       };
//       console.log(action);
//       dispatch(action);
//     },
//   };
// };

export default connect(mapStateToProps)(Home);
