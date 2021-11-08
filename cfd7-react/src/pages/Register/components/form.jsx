import React, { useState } from 'react'
import { useParams } from 'react-router';
import useForm from '../../../hooks/useForm'
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import courseService from '../../../services/courseServices';

function Form() {
  let [state,setState]=useLocalStorage();
  let {slug} = useParams();
  // const [form,setForm]=useState({});
  // const [error,setError]=useState({});

  // const handleChange =(ev)=>{
  //   let name = ev.currentTarget.name
  //   let value = ev.currentTarget.value

  //   setForm(
  //      {...form,
  //     [name]:value}
  //   )
  // }

  // const submit=()=>{
  //   let errorObject ={}
  //   if(!form.name)
  //   {
  //     errorObject.name ="Name, please!"
  //   }
  //   if(!form.phone){
  //     errorObject.phone ="Phone, please"
  //   }
  //   else if(!phonePattern.test(form.phone))
  //   {
  //     errorObject.phone ="Check your phone format, please!"
  //   }

  //   if(!form.email){
  //     errorObject.email ="Email, please"
  //   }
  //   else if(!emailPattern.test(form.email))
  //   {
  //     errorObject.email ="Check your email format, please!"
  //   }

  //   if(!form.url){
  //     errorObject.url ="Url, please"
  //   }
  //   else if(!urlPattern.test(form.url))
  //   {
  //     errorObject.url ="Check your url format, please!"
  //   }

  //   setError(errorObject)
  //   if(Object.keys(errorObject).length ===0){
  //     // alert("Success")
  //     console.log(form)
  //   }
  // }

  let {form,error,handleSubmit,register} = useForm();
  const  submit = async ()=>{
    // console.log(`form`, form)
    // console.log(`slug`, slug)
    let res= await courseService.register(slug,form); 
    alert("Đã đăng ký thành công !")
  }

    return (
        <form onSubmit={handleSubmit(submit)} className="form">
                <label>
                  <p>Họ và tên<span>*</span></p>
                  <input type="text" {...register('name',{required:true})} placeholder="Họ và tên bạn" />                  
                </label>
                  {
                    error.name&&<label className="error">{error.name}</label>
                  }
                <label>
                  <p>Số điện thoại<span>*</span></p>
                  <input type="text"{...register('phone',{required:true,pattern:'phone'})} placeholder="Số điện thoại" />
                </label>
                {
                    error.phone&&<label className="error">{error.phone}</label>
                  }
                <label>
                  <p>Email<span>*</span></p>
                  <input type="text" {...register('email',{required:true,pattern:'email'})} placeholder="Email của bạn" />                
                </label>
                {
                    error.email&&<label className="error">{error.email}</label>
                  }
                <label>
                  <p>URL Facebook<span>*</span></p>
                  <input type="text" {...register('fb',{required:true,pattern:'url'})} placeholder="https://facebook.com" />                 
                </label>
                {
                    error.fb&&<label className="error">{error.fb}</label>
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
                <button type="submit" className="btn main rect">đăng ký</button>
              </form>
    )
}

export default Form
