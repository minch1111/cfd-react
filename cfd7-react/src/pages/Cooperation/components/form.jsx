import React, { useState } from 'react'
import { Prompt } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import courseService from '../../../services/courseServices'
// const phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
// const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// const urlPattern = /(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/


function Form() {

  // const [form, setForm] = useState({})
  // const [error, setError] = useState({})

  // const handleChange = (event) => {
  //   let name = event.currentTarget.name
  //   let value = event.currentTarget.value

  //   setForm({
  //     ...form,
  //     [name]: value
  //   })
    

  // }
  // var check
  // const submit = () => {
  //   let errorObj = {}
  //   if (!form.name) {
  //     errorObj.name = "Vui lòng nhập tên"
  //   }

  //   if (!form.phone) {
  //     errorObj.phone = "Vui lòng nhập số điện thoại"
  //   }
  //   else if (!phonePattern.test(form.phone)) {
  //     errorObj.phone = "Vui lòng nhập đúng định dạng số điện thoại"
  //   }

  //   if (!form.email) {
  //     errorObj.email = "Vui lòng nhập email"
  //   }
  //   else if (!emailPattern.test(form.email)) {
  //     errorObj.email = "Vui lòng nhập đúng định dạng email"
  //   }

  //   if (!form.url) {
  //     errorObj.url = "Vui lòng nhập đường dẫn"
  //   }
  //   else if (!urlPattern.test(form.url)) {
  //     errorObj.url = "Vui lòng nhập đúng định dạng đường dẫn"
  //   }

  //   if (!form.contact) {
  //     errorObj.contact = "Vui lòng nhập tiêu đề liên hệ"
  //   }

  //   setError(errorObj)
   
     
  // }
  let {form,error,handleSubmit,register} = useForm()
  const submit = async()=>{
    let res = await courseService.contact(form);
    res? alert("Đã gửi thông tin liên hệ"):alert("Hiện không thể gửi thông tin")
  }
  return (

    <form onSubmit={handleSubmit(submit)} className="form">
      <Prompt
      
        message="Are u sure"
      />
      <label>
        <p>Họ và tên<span>*</span></p>
        <input type="text" {...register('name',{required:true})} placeholder="Họ và tên bạn" />
      </label>
      {
        error.name && <label className="error">{error.name}</label>
      }
      <label>
        <p>Số điện thoại</p>
        <input type="text" {...register('phone',{required:true,pattern:'phone'})} placeholder="Số điện thoại" />
      </label>
      {
        error.phone && <label className="error">{error.phone}</label>
      }
      <label>
        <p>Email<span>*</span></p>
        <input type="text" {...register('email',{required:true,pattern:'email'})} placeholder="Email của bạn" />
      </label>
      {
        error.email && <label className="error">{error.email}</label>
      }
      <label>
        <p>Website</p>
        <input type="text"{...register('url',{required:true,pattern:'url'})} placeholder="Đường dẫn website http://" />
      </label>
      {
        error.url && <label className="error">{error.url}</label>
      }
      <label>
        <p>Tiêu đề<span>*</span></p>
        <input type="text"{...register('content',{required:true})} placeholder="Tiêu đề liên hệ" />
      </label>
      {
        error.contact && <label className="error">{error.contact}</label>
      }
      <label>
        <p>Nội dung<span>*</span></p>
        <textarea name id cols={30} rows={10} defaultValue={""} />
      </label>
      <button type="submit" className="btn main rect" >đăng ký</button>
    </form>

  )
}

export default Form
