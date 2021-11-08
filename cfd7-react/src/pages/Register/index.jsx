import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import Loading from '../../components/Loading/index.jsx';
import courseService from '../../services/courseServices.js';
import Form from './components/form.jsx'
import NameRegis from './components/nameRegis.jsx'

function Register() {
  let [data,setData]=useState();
  let {slug}= useParams();
  useEffect(async () => {
    let data = await courseService.courseDetail(slug);
    setData(data);
  }, [slug])
  if(!data) return <Loading/>
  console.log(`data`, data)
    return (
        <main className="register-course" id="main">
        <section>
          <div className="container">
            <div className="wrap container">
              <NameRegis 
              register = {data.data}
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
