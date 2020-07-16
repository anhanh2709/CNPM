import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { fetchLogin } from "../Redux/Actions/UserAction";
import { connect } from "react-redux";

class Login extends Component {
  renderForm = () => {
    return (
      <Formik
        // giá trị ban đầu
        initialValues={{
          taiKhoan: "",
          matKhau: "",
        }}
        // submit
        onSubmit={(values) => {
          this.props.dispatch(fetchLogin(values));
        }}
        // render
        render={({ handleChange }) => (
          <section className="loginMovie">
            <div className="loginMovie__content">
              <Form className="formLogin" action method="POST">
                <div className="formLogin__logo d-flex justify-content-center align-items-center">
                  <i className="fa fa-theater-masks" />
                </div>
                <h2>Log in</h2>
                <div className="formLogin__username">
                  <i className="fa fa-user" />
                  <Field
                    className="username"
                    type="text"
                    name="taiKhoan"
                    placeholder="Tài khoản"
                    onChange={handleChange}
                  />
                </div>
                <div className="formLogin__password">
                  <i className="fa fa-lock" />
                  <Field
                    className="password"
                    type="password"
                    name="matKhau"
                    placeholder="Mật khẩu"
                    onChange={handleChange}
                  />
                </div>
                <div className="formLogin__rememberMe">
                  <input className="checkbox" type="checkbox" name="remember" />
                  <span>Remember me</span>
                </div>
                <button type="submit" className="btnLogin">
                  Login
                </button>
                <div className="forgotPass">
                  <a href="#">Forgot Password?</a>
                </div>
              </Form>
            </div>
          </section>
        )}
      />
    );
  };
  render() {
    return <div>{this.renderForm()}</div>;
  }
}

export default connect()(Login);
