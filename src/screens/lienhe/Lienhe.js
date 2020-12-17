import React from 'react'
import "./Lienhe.css"
import Header from '../../components/Header'
import Footer from "../../components/Footer";
import banner from "./img/capture.PNG"
function Lienhe() {
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
        <div id="navigation-bar" className="bg-white">
            <div className="container">
              <a href className="nav-bar-homepage">TRANG CHỦ</a>
              <i className="fas fa-angle-right" />
              <a href className="active">QUY TRÌNH ĐĂNG KÝ KHÁM BỆNH THEO HẸN</a>
              <hr className="my-0" />
            </div>
        </div>
        <div>
        <center>
        <h1>GIẢI ĐÁP THẮC MẮC, GÓP Ý VỀ DỊCH VỤ</h1>
        <form>
        <table>
        <tr>
        <td><label htmlFor="name" class="text-center">Họ tên</label><br /></td>
        <td><input type="text" id="name" name="name" defaultValue="" /><br /></td>
        </tr>
        <tr>  
        <td><label htmlFor="email">Email</label><br /></td>
        <td><input type="email" id="email" name="email" defaultValue="" /><br /></td>
        </tr>
        <tr>  
        <td><label htmlFor="phone">SĐT</label><br /></td>
        <td><input type="tel" id="phone" name="phone" defaultValue="" /><br /></td>
        </tr>
        <tr>
        <td><label htmlFor="vande">Vấn đề</label> <br /></td>
            <select name="choose" id="choose">
              <option value="Nhấn để chọn">Nhấn để chọn</option>
              <option value="Vấn đề chuyên môn">Vấn dề chuyên môn</option>
              <option value="Vấn đề kỹ thuật">Vấn đề kỹ thuật</option>
              <option value="Vấn đề khác">Vấn đề khác</option>
            </select><br />
        </tr>
        <tr>
        <td><label htmlFor="note">Nội dung</label><br /></td>
        <td><textarea name="note" defaultValue={""} /><br /></td>
        </tr>
            <input type="submit" defaultValue="submit" />
        </table>
        </form>
        </center>
        </div>
        <footer className="footer">
        <Footer/>
      </footer>
    </div>
    )
}

export default Lienhe