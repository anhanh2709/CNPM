import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  renderHeader = () => {
    return (
      <>
        {/* header */}
        <header className="header">
          <nav className="navbar navbar-expand-sm">
            <div className="header-left col-xl-3 col-lg-2 col-md-2 col-sm-6 col-6">
              <NavLink
                className="navbar-brand"
                to="/"
                exact
                activeStyle={{ color: "warning" }}
              >
                <img src="./img/web-logo.png" alt="logo" />
              </NavLink>
            </div>
            <button
              className="navbar-toggler hidden-sm-up col-6"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img src="./img/button-header.png" alt="button-header" />
            </button>
            <div
              className="header-center col-xl-6 col-lg-6 col-md-7"
              id="navbarSupportedContent"
            >
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#showTimes">
                      Lịch chiếu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#movieTheater">
                      Cụm rạp
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#news">
                      Tin Tức
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#appMobile">
                      Ứng dụng
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-right col-xl-3 col-lg-4 col-md-5 col-sm-6 px-0">
              {this.props.credentials ? (
                <>
                  <span>
                    Hi
                    {this.props.credentials.hoTen}
                  </span>
                  <button
                    onClick={() => {
                      this.logout();
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <div className="avatar">
                    <NavLink
                      exact
                      activeStyle={{ color: "warning" }}
                      to="/login"
                    >
                      <img src="./img/avatar.png" alt="avatar" />
                      <span>Đăng Nhập</span>
                    </NavLink>
                  </div>
                  <div className="location">
                    <img src="./img/location-header.png" alt="location" />
                    <select name="location" id="location">
                      <option>Hồ Chí Minh</option>
                      <option value="HaNoi">Hà Nội</option>
                      <option value="DaNang">Đà Nẵng</option>
                      <option value="HaiPhong">Hải Phòng</option>
                      <option value="BienHoa">Biên Hòa</option>
                      <option value="NhaTrang">Nha Trang</option>
                      <option value="BinhDuong">Bình Dương</option>
                      <option value="PhanThiet">Phan Thiết</option>
                    </select>
                  </div>
                </>
              )}
            </div>
          </nav>
        </header>
      </>
    );
  };
  render() {
    return <>{this.renderHeader()}</>;
  }
  logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
}

const mapStateToProps = (state) => {
  return {
    credentials: state.UserReducer.credentials,
  };
};

export default connect(mapStateToProps)(Header);
