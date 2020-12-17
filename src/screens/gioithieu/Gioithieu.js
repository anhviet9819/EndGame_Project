import React from 'react'
import "./Gioithieu.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';

function Gioithieu() {   
    return (
        <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Medpro - Đăng ký khám bệnh online</title>
        <link rel="shortcut icon" href=" img/logo_test.png" type="image/x-icon" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/responsive.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        <div className="page-wrap">
          <Header />
        </div>
        <div className="midmid">
          <div id="khung3">
            <div id="top">
            </div>
            <div id="mid1">
              <p>
                <b><Link to="#" title="Trang chủ">TRANG CHỦ </Link>&gt;<font color="#307be7"> GIỚI THIỆU</font></b> 
              </p>
            </div>
            <div id="mid2">
              <p>
                <br />
                Chào mừng bạn đến với <b>phần mềm đăng ký khám bệnh theo hẹn – trước ngày khám</b> tại <b>Bệnh viện Đại học Y Dược TPHCM,</b> phần mềm này được phát triển nhằm giúp
                bệnh nhân có thể:<br />
                <br />
                + Đăng ký khám bệnh.<br />
                + Thanh toán tiền khám.<br />
                + Nhận phiếu khám bệnh.<br />
                + Tạo hồ sơ bệnh nhân.<br />
                + Quản lý hồ sơ bệnh nhân.<br />
                + Quản lý phiếu khám bệnh.<br />
                + Quản lý lịch hẹn tái khám, ..v..v..<br />
                <br />
                Hoàn toàn trực tuyến ở mọi lúc mọi nơi mà không cần phải đến bệnh viện để xếp hàng và chờ đợi.<br />
                <br />
                Thông qua phần mềm, chúng tôi luôn hy vọng đã tạo nên một phương thức giúp bệnh nhân có thể tiếp cận với các dịch vụ y tế (nói chung), và dịch vụ khám chữa bệnh (nói riêng) một cách dễ dàng, nhanh chóng và thuận lợi.<br />
                <br />
                Từ đó làm tăng thêm sự hài lòng của bệnh nhân, nâng cao chất lượng dịch vụ của bệnh viện, và góp phần phát triển bệnh viện ngày càng trở nên thông minh hiện đại đáp ứng với sự kỳ vọng và tin tưởng của quý bệnh nhân trong và ngoài nước.<br />
                <br />
                Trân trọng!
              </p>
            </div>
          </div>
        </div>
        <footer className="footer">
            <Footer/>
        </footer>
        </div>
    )
}

export default Gioithieu
