import React, { Component } from "react";

export default class Footer extends Component {
  renderFooter = () => {
    return (
      <>
        {/* footer */}
        <footer className="footer">
          <div className="footer__content">
            <div className="row footer-top">
              <div className="col-lg-4 col-sm-6 top-left">
                <p>TIX</p>
                <div className="row">
                  <div className="col-lg-6 left-item">
                    <a>FAQ</a>
                    <a>Brand Guidelines</a>
                  </div>
                  <div className="col-lg-6 left-item">
                    <a>Thỏa thuận sử dụng</a>
                    <a>Chính sách bảo mật</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 top-center">
                <p>ĐỐI TÁC</p>
                <div className="companyItem">
                  <a>
                    <img src="img/cgv.png" alt="cgv" />
                  </a>
                  <a>
                    <img src="img/bhd.png" alt="bhd" />
                  </a>
                  <a>
                    <img src="img/galaxycine.png" alt="galaxycine" />
                  </a>
                  <a>
                    <img src="img/cinestar.png" alt="cinestar" />
                  </a>
                  <a>
                    <img src="img/lottecinema.png" alt="lottecinema" />
                  </a>
                </div>
                <div className="companyItem">
                  <a>
                    <img src="img/megags.png" alt="megags" />
                  </a>
                  <a>
                    <img src="img/beta.jpg" alt="beta" />
                  </a>
                  <a>
                    <img src="img/dongdacinema.png" alt="dongdacinema" />
                  </a>
                  <a>
                    <img src="img/TOUCH.png" alt="touch" />
                  </a>
                  <a>
                    <img src="img/cinemax.jpg" alt="cinemax" />
                  </a>
                </div>
                <div className="companyItem">
                  <a>
                    <img src="img/STARLIGHT.png" alt="starlight" />
                  </a>
                  <a>
                    <img src="img/dcine.png" alt="dcine" />
                  </a>
                  <a>
                    <img src="img/zalopay_icon.png" alt="zalopay_icon" />
                  </a>
                  <a>
                    <img src="img/payoo.jpg" alt="payoo" />
                  </a>
                  <a>
                    <img src="img/VIETTINBANK.png" alt="viettinbank" />
                  </a>
                </div>
                <div className="companyItem">
                  <a>
                    <img src="img/AGRIBANK.png" alt="agribank" />
                  </a>
                  <a>
                    <img src="img/VIETTINBANK.png" alt="viettinbank" />
                  </a>
                  <a>
                    <img src="img/IVB.png" alt="ivb" />
                  </a>
                  <a>
                    <img src="img/123go.png" alt="123go" />
                  </a>
                  <a>
                    <img src="img/laban.png" alt="laban" />
                  </a>
                </div>
              </div>
              <div className="row col-lg-4 col-sm-6 top-right">
                <div className="col-lg-6 right-item">
                  <p>MOBILE APP</p>
                  <a title="Apple App">
                    <img src="img/apple-logo.png" alt="apple-logo" />
                  </a>
                  <a title="Android App">
                    <img src="img/android-logo.png" alt="android-logo" />
                  </a>
                </div>
                <div className="col-lg-6 right-item">
                  <p>SOCIAL</p>
                  <a title="Facebook social">
                    <img src="img/facebook-logo.png" alt="facebook-logo" />
                  </a>
                  <a title="Zalo social">
                    <img src="img/zalo-logo.png" alt="zalo-logo" />
                  </a>
                </div>
              </div>
            </div>
            <hr className="footer-hr" />
            <div className="row footer-bottom">
              <div className="col-lg-1 col-md-1 col-sm-12 bottom-left">
                <img src="img/zion-logo.jpg" alt="zion-logo" />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-12 bottom-center">
                <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                <p>
                  Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                  Hồ Chí Minh, Việt Nam.
                </p>
                <p>
                  Giấy chứng nhận đăng ký kinh doanh số: 0101659783, <br /> đăng
                  ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                  hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                </p>
                <p>Số Điện Thoại (Hotline): 1900 545 436</p>
                <p>
                  Email:
                  <a href="mailto:vantaibui92@gmail.com">support@tix.vn</a>
                </p>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 bottom-right">
                <a href="#" target="_blank">
                  <img src="img/notification.png" alt="notification" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  };
  render() {
    return <>{this.renderFooter()}</>;
  }
}
