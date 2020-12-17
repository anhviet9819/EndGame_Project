import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/media.css";
import "./css/style.css";
import Header from "../../components/Header";
import logo1 from "./img/screen_slide/1529906632.jpg";
import logo2 from "./img/screen_slide/1530088265.jpg";
import logo3 from "./img/screen_slide/1530088286.jpg";
import logo4 from "./img/screen_slide/1530088303.jpg";
import logo5 from "./img/screen_slide/1530088322.jpg";
import logoAppIOS from "./img/homepage/app-store.svg";
import logoAppAndroid from "./img/homepage/googleplay-btn.svg";
import logoCalendar from "./img/homepage/calendar.svg";
import logoAddEvent from "./img/homepage/add-event.svg";
import logoMedicine from "./img/homepage/medicine.svg";
import logo6 from "./img/slide/bg-slide-mobile.png";
import logo7 from "./img/slide/mobile_home/01.png";
import logo8 from "./img/slide/mobile_home/02.png";
import logo9 from "./img/slide/mobile_home/03.png";
import logo10 from "./img/slide/mobile_home/04.png";
import logo11 from "./img/slide/mobile_home/05.png";
import logoOrganic from "./img/homepage/organic.svg";
import logoPay from "./img/homepage/pay.svg";
import logoCare from "./img/homepage/care.svg";
import Footer from "../../components/Footer";

function index() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Medpro - Đăng ký khám bệnh online</title>
      <link rel="shortcut icon" href=" img/logo_test.png" type="image/x-icon" />
      {/* CSS Bootstrap only */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      />
      {/* font awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
      />
      {/*       Script     */}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
      <script src="https://use.fontawesome.com/f354a345da.js"></script>
      <div id="page">
        <div className="inner_page">
          <div className>
            <Header />
            <div className="main">
              <div className="inner_main">
                <div className=" main_top">
                  <div className=" alert alert-dismissible ">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                    >
                      ×
                    </button>
                    <p>
                      <strong style={{ fontSize: 18, color: "#004085" }}>
                        Thông báo !
                      </strong>
                    </p>
                    <hr />
                    <p style={{ fontSize: 14 }}>
                      Từ ngày{" "}
                      <strong style={{ color: "#004085" }}>1/6/2019</strong>,
                      Người bệnh không BHYT sau khi đặt khám thành công trên
                      Web/App sẽ đến trực tiếp phòng khám trước giờ hẹn 15-30
                      phút để khám bệnh mà không cần phải in phiếu giấy tại kios
                      hoặc quầy tiếp nhận !
                    </p>
                  </div>
                  <section className="section_1 screen_slide">
                    <div
                      id="myCarousel"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img className="d-block w-100" src={logo1} alt={1} />
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100" src={logo2} alt={2} />
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100" src={logo3} alt={3} />
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100" src={logo4} alt={4} />
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100" src={logo5} alt={5} />
                        </div>
                      </div>
                    </div>
                    <div className="list_dv">
                      <ul>
                        <li>
                          <a href="#">KHÁM THEO BÁC SĨ</a>
                        </li>
                        <li>
                          <a href="#">KHÁM THEO NGÀY</a>
                        </li>
                        <li>
                          <a href="#">LỊCH TÁI KHÁM</a>
                        </li>
                        <li>
                          <a href="#">THANH TOÁN VIỆN PHÍ NỘI TRÚ</a>
                        </li>
                      </ul>
                    </div>
                  </section>
                  <section className="section_2 Q_A ">
                    <div className="row">
                      <div className="search_info col-md-6">
                        <a href="#">
                          <h3>TRA CỨU THÔNG TIN</h3>
                          <p>
                            Tra cứu thông tin đặt chỗ, thông tin bệnh nhân, lịch
                            khám
                          </p>
                        </a>
                        <button type="button" className="btn  pos_right">
                          Tra cứu
                        </button>
                      </div>
                      <div className="trouble col-md-6">
                        <a href="#">
                          <h3>NHỮNG VẤN ĐỀ THƯỜNG GẶP</h3>
                          <ul className="trouble_list">
                            Tìm hiểu những vấn đề thường gặp, trong quá trình
                            khám &amp; tái khám
                            <li className="trouble_1">
                              Quản lý thông tin bệnh nhân
                            </li>
                            <li className="trouble_2">
                              Quy trình khám bệnh &amp; nhận phiếu khám bệnh
                            </li>
                            <li className="trouble_3">Hoàn tất thanh toán</li>
                          </ul>
                          <p className="pos_right">Xem thêm</p>
                        </a>
                      </div>
                    </div>
                  </section>
                  <section className=" section_3 app_mobile_download">
                    <div className="container">
                      <div className="mg-lg-auto app_title">
                        <p>
                          TẢI ỨNG DỤNG <strong>UMC</strong>
                        </p>
                      </div>
                      <div className="row app_method">
                        <div className="col-6 app_ios">
                          <a href="#">
                            <img src={logoAppIOS} alt="app_ios" />
                          </a>
                        </div>
                        <div className="col-6 app_android">
                          <a href="#">
                            <img src={logoAppAndroid} alt="app_android" />
                          </a>
                        </div>
                      </div>
                      <div className="app_content">
                        <ul className="row ">
                          <li className="col-4 list_one">
                            <div>
                              <span>
                                Chủ động đặt lịch khám trong vòng 1 phút
                              </span>
                              <img src={logoCalendar} alt="calendar" />
                            </div>
                            <div>
                              <span>
                                Thay đổi &amp; cập nhật lịch khám bệnh
                              </span>
                              <img src={logoAddEvent} alt="add-event" />
                            </div>
                            <div>
                              <span>Đặt lịch nhắc nhở uống thuốc</span>
                              <img src={logoMedicine} alt="medicine" />
                            </div>
                          </li>
                          <li className="col-4 list_two">
                            <img src={logo6} alt="bg-slide-mobile" />
                            <div
                              id="myCarousel"
                              className="carousel slide"
                              data-ride="carousel"
                            >
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <img className="d-block " src={logo7} alt />
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block " src={logo8} alt />
                                </div>
                                <div className="carousel-item">
                                  <img
                                    className="d-block"
                                    src={logo9}
                                    alt="k"
                                  />
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block " src={logo10} alt />
                                </div>
                                <div className="carousel-item">
                                  <img
                                    className="d-block "
                                    src={logo11}
                                    alt
                                    w
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="col-4 list_three">
                            <div className="group">
                              <img src={logoOrganic} alt />
                              <span>Giao diện thân thiện dễ sử dụng</span>
                            </div>
                            <div className="group">
                              <img src={logoPay} alt="pay" />
                              <span>Thanh toán nhanh chóng và tiện lợi</span>
                            </div>
                            <div className="group">
                              <img src={logoCare} alt="care" />
                              <span>
                                Lưu trữ và theo dõi hồ sơ sức khỏe của bạn
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
                <div
                  style={{
                    maxWidth: "100%",
                    borderTop: "5px solid #e9ecef",
                    marginBottom: 150,
                  }}
                ></div>
                <div className="main_bottom">
                  <section className="section_4">
                    <div className="method-support">
                      <span>Hỗ trợ</span>
                      <h2>Các hình thức hỗ trợ từ UCM đặt khám</h2>
                      <p>Bệnh nhân chọn các hình thức bên dưới</p>
                    </div>
                    <div className="row">
                      <div className="col-md">
                        <a href="#">
                          <img
                            src=" img/suport_tab/hospital.svg"
                            alt="hospital"
                          />
                          <p className="style_text">Hỗ trợ chuyên môn</p>
                          <p className="style_number">1900-7178</p>
                        </a>
                      </div>
                      <div className="col-md">
                        <a href="#">
                          <img
                            src=" img/suport_tab/phone-receiver.svg"
                            alt="phone-receiver"
                          />
                          <p className="style_text">Hỗ trợ kỹ thuật</p>
                          <p className="style_number">1900-2267</p>
                        </a>
                      </div>
                      <div className="col-md">
                        <a href="#">
                          <img
                            src=" img/suport_tab/facebook-circular.svg"
                            alt="ffacebook"
                          />
                          <p className="style_text">Fanpage Facebook</p>
                          <p className="style_number">Bấm vào đây</p>
                        </a>
                      </div>
                      <div className="col-md">
                        <a href>
                          <img src=" img/suport_tab/zalo.umc.jpg" alt="umc" />
                          <p className="style_text">Hỗ trợ Zalo</p>
                          <p className="style_number">Bấm vào đây</p>
                        </a>
                      </div>
                      <div className="col-md">
                        <a href="#">
                          <img
                            src=" img/suport_tab/umc_mess_fb.png"
                            alt="zalo"
                          />
                          <p className="style_text">Chat Facebook</p>
                          <p className="style_number">Bấm vào đây</p>
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
                <aside className="contact-info scroll">
                  <div className="collapse">
                    <a className="up-to-top" href="#">
                      <i className="fas fa-arrow-circle-up" />
                    </a>
                    <a className="mailbox" href="#">
                      <i className="fas fa-envelope" />
                    </a>
                    <a className="phone-contact" href="#">
                      <div>
                        <i className="fas fa-phone-square" />
                        <span>Hotline</span>
                        <span className="phonenumber">19002267</span>
                      </div>
                    </a>
                  </div>
                  <a className="btn-navigation js_click">
                    <i className="fas fa-angle-double-right" />
                  </a>
                </aside>
              </div>
            </div>
            <footer className="footer">
              <Footer/>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;

{
  /* hiển thị khi co nhỏ màn hình */
}
{
  /* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navb">
                      <span class="navbar-toggler-icon"></span>
                  </button> */
}
