import React from 'react'
import Form from './components/form.jsx'
import NameRegis from './components/nameRegis.jsx'

function Register() {
    return (
        <main className="register-course" id="main">
        <section>
          <div className="container">
            <div className="wrap container">
              <NameRegis 
              name ="Thực Chiến Front-end Căn Bản"
              date ="15/11/2020"
              time ="18"
              fee ="6.000.000"
              />
              <Form />
            </div>
          </div>
        </section>
        {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
      </main>
    )
}

export default Register
