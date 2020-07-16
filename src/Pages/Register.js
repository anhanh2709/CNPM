import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userService, signUpSchema } from "../Services/User/UserService";

class Register extends Component {
  handleSubmit = (values) => {
    console.log(values);
    userService
      .register(values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  renderForm = () => {
    return (
      <Formik
        // giá trị ban đầu nhận vào
        initialValues={{
          taiKhoan: "",
          matKhau: "",
          email: "",
          soDt: "",
          hoTen: "",
          maNhom: "GP01",
          maLoaiNguoiDung: "KhachHang",
        }}
        // validation
        validationSchema={signUpSchema}
        // submit
        onSubmit={this.handleSubmit}
        // render
        render={(formikProps) => (
          <Form>
            <div className="container border border-secondary mt-5">
              <h2 className="display-4 text-center">Register</h2>

              <div className="form-group">
                <label>Tài khoản</label>
                <Field
                  onChange={formikProps.handleChange}
                  type="type"
                  className="form-control"
                  name="taiKhoan"
                  placeholder="Tài khoản"
                />
                <ErrorMessage name="taiKhoan">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Mật Khẩu</label>
                <Field
                  onChange={formikProps.handleChange}
                  type="password"
                  className="form-control"
                  name="matKhau"
                  placeholder="Mật Khẩu"
                />
                <ErrorMessage name="matKhau">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Họ tên</label>
                <Field
                  onChange={formikProps.handleChange}
                  type="type"
                  className="form-control"
                  name="hoTen"
                  placeholder="Họ tên"
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <Field
                  onChange={formikProps.handleChange}
                  type="type"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                />
              </div>

              <div className="form-group">
                <label>Số điện thoại</label>
                <Field
                  onChange={formikProps.handleChange}
                  type="type"
                  className="form-control"
                  name="soDt"
                  placeholder="Số điện thoai"
                />
              </div>

              <div className="form-group">
                <label>Mã nhóm</label>
                <Field
                  className="ml-2"
                  name="maNhom"
                  onChange={formikProps.handleChange}
                  component="select"
                >
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                  <option>GP04</option>
                  <option>GP05</option>
                  <option>GP06</option>
                  <option>GP07</option>
                  <option>GP08</option>
                  <option>GP09</option>
                  <option>GP10</option>
                </Field>
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-success px-3">
                  Submit
                </button>
              </div>
            </div>
          </Form>
        )}
      />
    );
  };
  render() {
    return <div>{this.renderForm()}</div>;
  }
}

export default Register;
