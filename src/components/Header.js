import React from "react";
import { Link } from "react-router-dom";
import logoMedical from "../screens/index/img/logo_test.png";

function Header() {
  return (
    <div className="header">
      <nav class="nav_top">
        <ul class="support">
          <li>
            <Link to="/dangnhap">
              <i className="fas fa-phone-volume"></i> Hỗ trợ chuyên môn: 1900-7178
            </Link>
          </li>
          <li>
            <Link to="/dangnhap">
              <i className="fas fa-phone-volume"></i> Hỗ trợ kỹ thuật: 1900-2267
            </Link>
          </li>
          <li>
            <Link to="/dangnhap">
              <i className="fas fa-sign-in-alt"></i> Đăng nhập
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/" className="navbar-brand">
          <img
            src={logoMedical}
            alt="logo.png"
            style={{ height: 55, marginLeft: 185, marginTop: "-30px" }}
          />
          <div className="dhyd_logo">
            <span className="style_1">
              BỆNH VIỆN ĐẠI HỌC Y DƯỢC TP.HCM<sup>®</sup>
            </span>
            <span className="style_2">UNIVERSITY MEDICAL CENTER HCMC</span>
            <span className="style_3">
              Tiên phong - Thấu hiểu - Chuẩn mực - An toàn
            </span>
          </div>
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navb"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navb">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                TRANG CHỦ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gioithieu">
                GIỚI THIỆU
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quytrinh">
                QUY TRÌNH
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/huongdansudung">
                HƯỚNG DẪN SỬ DỤNG
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/thacmac">
                THẮC MẮC
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lienhe">
                LIÊN HỆ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/datlich">
                ĐẶT LỊCH
              </Link>
            </li>
            {/* <li className="select_service nav-item">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  CHỌN DỊCH VỤ
                  <span className="caret" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">ĐẶT LỊCH THEO BÁC SĨ</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#">ĐẶT LỊCH THEO NGÀY</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#">LỊCH TÁI KHÁM</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#">THANH TOÁN VIỆN PHÍ NỘI TRÚ</a>
                  </li>
                </ul>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
