import React from 'react'
import Header from '../../components/Header'
import Footer from "../../components/Footer";
import banner from "./lib/img/blur_02.jpg"
import "./lib/css/header1.css"
function Quytrinh() {
    return (
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Medpro - Đăng ký khám bệnh online</title>
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/responsive.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        <div className="page-wrap">
          <Header />
          <section className="main">
            <div className="inform">
              <div className="container">
                <div className="banner">
                  <img src={banner} />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="main">
        <div>
          <section>
            <div className="parallax-section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-">
                    <div className="parallax-contact parallax-procedure-content">
                      <div className="contact-title text-center">
                        <h3>QUY TRÌNH ĐĂNG KÝ KHÁM BỆNH THEO HẸN</h3>
                        <i className="fas fa-tasks" />
                      </div>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div id="navigation-bar" className="bg-white">
            <div className="container">
              <a href className="nav-bar-homepage">TRANG CHỦ</a>
              <i className="fas fa-angle-right" />
              <a href className="active">QUY TRÌNH ĐĂNG KÝ KHÁM BỆNH THEO HẸN</a>
              <hr className="my-0" />
            </div>
          </div>
          <div className="procedure-content bg-white">
            <div className="container">
              <div className="row">
                <div className="col-md-12 procedure-title text-center">
                  <h2>QUY TRÌNH ĐĂNG KÝ KHÁM BỆNH THEO HẸN</h2>
                </div>
                <div className="col-md-12 m-auto">
                  <ul className="timeline">
                    <li>
                      <p className="timeline-date">BƯỚC 1</p>
                      <div className="timeline-content">
                        <h3>ĐẶT LỊCH KHÁM</h3>
                        <div className="content-inside">
                          <span><i className="fas fa-angle-right" />Đăng nhập phần mềm trên web hoặc ứng dụng di động.</span>
                          <span><i className="fas fa-angle-right" />Chọn hình thức đặt khám: Theo ngày hoặc theo bác sĩ.</span>
                          <span><i className="fas fa-angle-right" />Nhập thông tin bệnh nhân: Bằng số hồ sơ tạo mới.</span>
                          <span><i className="fas fa-angle-right" />Chọn thông tin khám: Chuyên khoa, bác sĩ, ngày khám, giờ khám và có BHYT hay không.</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p className="timeline-date">BƯỚC 2</p>
                      <div className="timeline-content">
                        <h3>THANH TOÁN TIỀN KHÁM</h3>
                        <div className="content-inside">
                          <span><i className="fas fa-angle-right" />Chọn loại thẻ thanh toán: Thẻ khám bệnh của bệnh viện Đại Học Y Dược TPHCM, thẻ thanh toán quốc tế hoặc thẻ ATM nội địa.</span>
                          <span><i className="fas fa-angle-right" />Kiểm tra tiền khám, các loại phí và tổng tiền thanh toán.</span>
                          <span><i className="fas fa-angle-right" />Nhập thông tin thẻ để tiến hành thanh toán.</span>
                          <div className="bd-callout bd-callout-info">
                            <strong>Lưu ý:</strong>
                            <span className="font-italic">Thanh toán bằng thẻ khám bệnh của Bệnh viện Đại học Y Dược TPHCM, phí tiện ích sẽ có mức thấp nhất.</span>
                            <span className="font-italic">Đối với thẻ khám Bệnh viện Đại học Y Dược TPHCM, vui lòng đăng ký chức năng thanh toán trực tuyến tại các chi nhánh Vietinbank trong cả nước, trước khi sử dụng.</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p className="timeline-date">BƯỚC 3</p>
                      <div className="timeline-content">
                        <h3>XÁC NHẬN NGƯỜI BỆNH ĐẾN KHÁM THEO HẸN</h3>
                        <div className="content-inside">
                          <span><i className="fas fa-angle-right" />Sau khi đặt khám thành công phiếu khám điện tử sẽ được gửi ngay qua email, tin nhắn sms và trên phần mềm.</span>
                          <span><strong><i className="fas fa-angle-right" />Đến ngày khám</strong></span>
                          <span className="ml-4"><i className="fas fa-angle-right" />Người bệnh không BHYT sẽ đến trực tiếp phòng khám trước giờ hẹn 15-30 phút để khám bệnh .</span>
                          <span className="ml-4"><i className="fas fa-angle-right" />Người bệnh khám BHYT vui lòng đến quầy 12,13,14 khu A trước giờ hẹn 15-30 phút để xác nhận bảo hiểm trước khi vào phòng khám .</span>
                        </div>
                      </div> 
                    </li>
                    <li>
                      <p className="timeline-date">BƯỚC 4</p>
                      <div className="timeline-content">
                        <h3>KHÁM VÀ THỰC HIỆN CẬN LÂM SÀNG</h3>
                        <div className="content-inside">
                          <span><i className="fas fa-angle-right" />Người bệnh khám tại các phòng khám chuyên khoa theo thông tin khám đã đặt.</span>
                          <span><i className="fas fa-angle-right" />Thực hiện cận lâm sàng (nếu có) và đóng phí tại các quầy thu ngân hoặc trừ vào tài khoản thẻ khám bệnh (nếu có).</span>
                          <span><i className="fas fa-angle-right" />Khi đủ kết quả cận lâm sàng, người bệnh quay lại phòng khám gặp Bác sĩ nhận toa thuốc.</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p className="timeline-date">BƯỚC 5</p>
                      <div className="timeline-content">
                        <h3>NHẬN THUỐC</h3>
                        <div className="content-inside">
                          <span><strong><i className="fas fa-angle-right" />Người bệnh có BHYT:</strong> Thực hiện kết toán BHYT tại quầy 17,18,19,20 tầng trệt khu A và nhận thuốc tại nhà thuốc khu B.</span>
                          <span><strong><i className="fas fa-angle-right" />Người bệnh không có BHYT:</strong> Đến nhà thuốc khu A hoặc khu B mua thuốc, thanh toán tiền thuốc tại quầy hoặc trừ vào tài khoản thẻ khám bệnh (nếu có).</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p className="timeline-date">BƯỚC 6</p>
                      <div className="timeline-content">                                                
                        <h3>ĐẶT LỊCH TÁI KHÁM</h3>
                        <div className="content-inside">
                          <span><i className="fas fa-angle-right" />Sử dụng phần mềm đặt hẹn tái khám như BƯỚC 1 và BƯỚC 2 để nhận phiếu khám điện tử.</span>
                          <div className="bd-callout bd-callout-info">
                            <strong>Lưu ý:</strong>
                            <br />
                            <span className="font-italic">Chọn bác sĩ khám và ngày tái khám theo thông tin trên toa thuốc.</span>
                            <span className="font-italic">Nhập thông tin người bệnh bằng số hồ sơ trên toa thuốc (không được tạo mới).</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="help-call" style={{display: 'none', right: '5px', opacity: '0.999753'}}>
            <a className="icon-top" href><i className="fas fa-arrow-circle-up" /></a>
            <a className="icon-email" href><i className="fas fa-envelope" /></a>
            <a href>
              <i className="fas fa-phone-square" />
              <span className="text-hot">Hotline</span>
              <span className="text-phone">19002267</span>
            </a>
            <a href title="right" className="arrow-change">
              <i className="fas fa-angle-double-right" />
            </a>
            <a className="arrow-change open" href>
              <i className="fas fa-angle-double-left" />
            </a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
    )
}

export default Quytrinh
