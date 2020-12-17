import React from 'react'
import "./Thacmac.css"
import Header from '../../components/Header'
import { Link } from "react-router-dom";
import banner from "./img/banner.png";
import logobot from "./img/logo22.png";
import thongbao from "./img/dathongbao.png";
import dangky from "./img/dadangky.png";
import medpro from "./img/medpro.png";
import ggplay from "./img/googleplay.png";
import apstore from "./img/apstore.png";
function Thacmac() {
    return (
      <div >
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Medpro - Đăng ký khám bệnh online</title>
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/responsive.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        <div className="page-wrap">
          <Header />
        </div> 
        <section className="main">
          <div className="inform">
            <div className="container">
              <div className="banner">
                <img src={banner} />
              </div>
            </div>
          </div>
        </section>
        <div id="menu_duoi">
          <Link to="#">TRANG CHỦ</Link>
          <b>THẮC MẮC</b>
        </div>
        <div id="main">
          <div id="left">
            <h6>TÌM NHANH CÂU HỎI</h6>
            <div className="input-group form-group">
              <input type="text" name="q" className="form-control ui-keyboard-input ui-widget-content ui-corner-all" placeholder="vd: cách thanh toán viện phí" aria-haspopup="true" role="textbox" />
              <button className="btn btn-search input-group-prepend" style={{height: '10px', width: '10px'}}>
                <i className="fas fa-search">  
                </i>
              </button>
            </div>
            <ul>
              <li className="fas fa-caret-right">
                <Link to="#"> Vấn đề tài khoản</Link>
              </li>
              <li className="fas fa-caret-right">
                <Link to="#"> Vấn đề về quy trình đặt khám</Link>
              </li>
              <li className="fas fa-caret-right">
                <Link to="#"> Vấn đề về thanh toán</Link>
              </li>
            </ul>
          </div>
          <div id="right">
            <ul>
              <b>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Đối tượng bệnh nhân nào có thể sử dụng phần mềm để đăng ký khám bệnh?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Đăng ký khám qua phần mềm có tốn phí không?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Các loại tiền và phí khi sử dụng phần mềm để đăng ký khám bệnh?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Tôi có thể bị bệnh viện từ chối khám bệnh, sau khi đã đăng ký khám qua phần mềm không?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Những lí do nào tôi có thể bị bệnh viện từ chối tiếp nhận khám chữa bệnh?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Tôi có thể dùng phần mềm để đăng ký và lấy số thứ tự khám, sau đó bán lại cho Bệnh nhân không?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Tôi có lợi gì khi đăng ký khám bệnh qua phần mềm?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Tôi đến bệnh viện trễ hơn so với giờ khám đã đăng ký, vậy tôi có được khám hay không?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Phần mềm có hỗ trợ đăng ký khám 24/7 không?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Tại sao sau khi đăng ký khám thành công tôi không nhận được phiếu khám bệnh gửi qua email?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Tôi không biết sử dụng điện thoại và máy tính, tôi có thể đăng ký qua điện thoại không?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Tôi có thẻ khám bệnh của bệnh viện ĐHYD, tôi không có đăng ký khám online nhưng thẻ của tôi bị trừ tiền?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Bác sĩ có hẹn lịch tái khám, nhưng vào phần mềm đăng ký không có, tôi phải làm sao để đăng ký tái khám?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Tôi có lịch hẹn tái khám của bác sĩ Lê Minh nhưng không đặt được?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Tôi điện thoại tổng đài 19007178 hoài không ai nghe máy?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Tôi đăng ký mà báo là quý khách chưa đăng ký dịch vụ hoặc dịch vụ không hoạt động?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Hiện đăng ký khám online có áp dụng cho tất cả các chi nhánh của bệnh viện ĐHYD không?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Tôi bị bệnh A, B, C,... tôi phải đăng ký khoa nào?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Tôi đăng ký trước nhưng mai tôi bận không đến khám được tôi muốn hủy phiếu làm sao?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Tôi nhập thông tin cho người nhà có nhập số CMND đã bấm lưu nhưng mở lại không có?</Link>
                </li>
                <li className="card">
                  <Link to="#" className="fas fa-caret-right"> Bên mình có hỗ trợ đăng ký khóa khám dịch vụ không?</Link>
                </li>
              </b>
            </ul>
          </div>
        </div>
        <div id="bot">
          <div id="bot_1">
            <div id="trai">
              <Link to="#"><img src={logobot} /></Link>
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
            <div id="phai">
              <Link to="#" title="đã thông báo bộ công thương"><img src={thongbao} /></Link>
              <Link to="#" title="đã đăng ký bộ công thương"><img src={dangky} /></Link><br />
              <Link to="#" title><img src={medpro}/></Link><br />
              <br />
              <Link to="#" title="tải ứng dụng Google Play"><img src={ggplay} /></Link>
              <Link to="#" title="tải ứng dụng iOS"><img src={apstore} /></Link>
            </div>
            <div id="mid">
              <ul>
                <li><Link to="#">Liên hệ</Link></li><br />
                <li><Link to="#">Hỏi đáp</Link></li><br />
                <li><Link to="#">Điều khoản dịch vụ</Link></li><br />
                <li><Link to="#">Chính sách bảo mật</Link></li><br />
                <li><Link to="#">Qui định sử dụng</Link></li>
              </ul>
            </div>
          </div>
          <div id="bot_2">
            <p>
            </p><center>© 2018 - Bản quyền thuộc Công Ty Cổ Phần Ứng Dụng PKH</center>
            <center>Giấy CNĐKDN số 0314886357, do Sở Kế Hoạch và Đầu Tư Tp Hồ Chí Minh - cấp ngày 21/01/2019.</center>
            <center>Trụ sở: 97 Trần Quang Diệu, phường 14, quận 3, Tp Hồ Chí Minh.</center>
            <center>Điện thoại: (028) 710 78098</center>
            <p />
          </div>
        </div>
        <div id="cuoi">
          <ul>
            <li>
              <Link to="lienhe">LIÊN HỆ</Link>
            </li>
            <li>
              <Link to="thacmac">THẮC MẮC</Link>
            </li>
            <li>
              <Link to="quytrinh">QUY TRÌNH</Link>
            </li>
            <li>
              <Link to="gioithieu">GIỚI THIỆU</Link>
            </li>
            <li>
              <Link to="/">TRANG CHỦ</Link>
            </li>
          </ul>    
        </div>
      </div>
    )
}

export default Thacmac
