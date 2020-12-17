import React from "react";
import { Link } from "react-router-dom";
import logotest from "../screens/index/img/logo_test.png";
import bocongthuong from "../screens/index/img/footer/bocongthuong.png";
import dadangky from "../screens/index/img/footer/20150827110756-dadangky.png";
import medpro_white from "../screens/index/img/footer/medpro-white.svg";
import appstore from "../screens/index/img/homepage/app-store.svg";
import googleplay from "../screens/index/img/homepage/googleplay-btn.svg";

function Footer() {
  return (
    <div>
      <div class="inner_footer">
        <div class="footer-top">
          <div class="footer_main row">
            <div class="col-md-5 column-1">
              <img src={logotest} alt="logo" />
              <span>
                <h6>
                  BỆNH VIỆN ĐẠI HỌC Y DƯỢC TP.HCM<sup>®</sup>
                </h6>
                <Link to="#">215 Hồng Bàng, P.11, Q.5, HCM</Link>
                <br />
                <Link to="#">ĐT: (028) 3855 4269</Link>
                <br />
                <p>www.bvdaihoc.com.vn</p>
              </span>
            </div>
            <div class="col-md-3 column-2">
              <ul>
                <li>
                  <Link to="#">Liên hệ</Link>
                </li>
                <li>
                  <Link to="#">Hỏi đáp</Link>
                </li>
                <li>
                  <Link to="#">Điều khoản dịch vụ</Link>
                </li>
                <li>
                  <Link to="#">Chính sách bảo mật</Link>
                </li>
                <li>
                  <Link to="#">Quy định sử dụng</Link>
                </li>
              </ul>
            </div>
            <div class="col-md-4 column-3">
              <Link to="#">
                <img src={bocongthuong } alt="bocongthuong" />
              </Link>
              <Link to="#">
                <img
                  src={dadangky}
                  alt="20150827110756-dadangky"
                />
              </Link>
              <Link to="#" class="in-row">
                <img src={medpro_white} alt="medpro-white" />
              </Link>
              <Link to="#">
                <img src={appstore} alt="app-store" />
              </Link>
              <Link to="#">
                <img
                  src={googleplay}
                  alt="googleplay-btn"
                />
              </Link>
            </div>
          </div>

          <div class="row footer_licence">
            © 2018 - Bản quyền thuộc Công Ty Cổ Phần Ứng Dụng PKH <br />
            Giấy CNĐKDN số 0314886357, do Sở Kế Hoạch và Đầu Tư Tp Hồ Chí Minh -
            cấp ngày 21/01/2019. <br />
            Trụ sở: 97 Trần Quang Diệu, phường 14, quận 3, Tp Hồ Chí Minh.
            <br />
            Điện thoại: (028) 710 78098
          </div>
        </div>

        <div class="footer_aside">
          <div class="">
            <nav>
              <ul>
                <li>
                  <Link to="/">TRANG CHỦ</Link>
                </li>
                <li>
                  <Link to="gioithieu">GIỚI THIỆU</Link>
                </li>
                <li>
                  <Link to="quytrinh">QUY TRÌNH</Link>
                </li>
                <li>
                  <Link to="thacmac">THẮC MẮC</Link>
                </li>
                <li>
                  <Link to="lienhe">LIÊN HỆ</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
