import React, { useState } from 'react'

const phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const urlPattern = /(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/

function Form() {
  const [form,setForm]=useState({});
  const [error,setError]=useState({});

  const handleChange =(ev)=>{
    let name = ev.currentTarget.name
    let value = ev.currentTarget.value

    setForm(
       {...form,
      [name]:value}
    )
  }

  const submit=()=>{
    let errorObject ={}
    if(!form.name)
    {
      errorObject.name ="Name, please!"
    }
    if(!form.phone){
      errorObject.phone ="Phone, please"
    }
    else if(!phonePattern.test(form.phone))
    {
      errorObject.phone ="Check your phone format, please!"
    }

    if(!form.email){
      errorObject.email ="Email, please"
    }
    else if(!emailPattern.test(form.email))
    {
      errorObject.email ="Check your email format, please!"
    }

    if(!form.url){
      errorObject.url ="Url, please"
    }
    else if(!urlPattern.test(form.url))
    {
      errorObject.url ="Check your url format, please!"
    }

    setError(errorObject)
    if(Object.keys(errorObject).length ===0){
      // alert("Success")
      console.log(form)
    }
  }



    return (
        <div className="form">
                <label>
                  <p>Họ và tên<span>*</span></p>
                  <input type="text" onChange={handleChange} value={form.name}  name="name" placeholder="Họ và tên bạn" />                  
                </label>
                  {
                    error.name&&<label className="error">{error.name}</label>
                  }
                <label>
                  <p>Số điện thoại<span>*</span></p>
                  <input type="text" onChange={handleChange} value={form.phone} name="phone" placeholder="Số điện thoại" />
                </label>
                {
                    error.phone&&<label className="error">{error.phone}</label>
                  }
                <label>
                  <p>Email<span>*</span></p>
                  <input type="text" onChange={handleChange} value={form.email} name="email" placeholder="Email của bạn" />                
                </label>
                {
                    error.email&&<label className="error">{error.email}</label>
                  }
                <label>
                  <p>URL Facebook<span>*</span></p>
                  <input type="text" onChange={handleChange} value={form.url} name="url" placeholder="https://facebook.com" />                 
                </label>
                {
                    error.url&&<label className="error">{error.url}</label>
                  }
                <label className="disable">
                  <p>Sử dụng COIN</p>
                  <div className="checkcontainer">
                    Hiện có <strong>300 COIN</strong>
                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                    {/* Cần ít nhất 200 COIN để giảm giá */}
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </div>
                </label>
                <label>
                  <p>Hình thức thanh toán</p>
                  <div className="select">
                    <div className="head">Chọn hình thức thanh toán</div>
                    <div className="sub">
                      <a href="#">Chuyển khoản</a>
                      <a href="#">Thanh toán tiền mặt</a>
                    </div>
                  </div>
                </label>
                <label>
                  <p>Ý kiến cá nhân</p>
                  <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                </label>
                <div className="btn main rect" onClick={submit}>đăng ký</div>
              </div>
    )
}

export default Form
