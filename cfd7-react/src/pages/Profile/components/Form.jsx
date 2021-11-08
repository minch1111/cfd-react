import React, { useState } from 'react'
import useForm from '../../../hooks/useForm'
import { useLocalStorage } from '../../../hooks/useLocalStorage'
import authServices from '../../../services/authServices'

function Form() {
    let [user,setUser] = useLocalStorage('login') 
    // console.log(`user`, JSON.parse(user))
    const { form, error,register, handleSubmit } = useForm(JSON.parse(user))
    const  submit = async()=>{
        console.log('form',form)
        let res = await authServices.updateUser(form);
        localStorage.setItem('login',JSON.stringify(res.data))
        alert('Update success')
    }
    return (
        <div className="tab1">
            <form onSubmit={handleSubmit(submit)}>
                <label>
                    <p>Họ và tên<span>*</span></p>
                    <input type="text" {...register('name',{required:true})} placeholder="Nguyễn Văn A" />
                </label>
                {
                    error.name && <label className="error">{error.name}</label>
                }
                <label>
                    <p>Số điện thoại<span>*</span></p>
                    <input type="text" {...register('phone',{required:true, pattern:'phone'})} placeholder="0949******" />
                </label>
                {
                    error.phone && <label className="error">{error.phone}</label>
                }
                <label>
                    <p>Email<span>*</span></p>
                    <input {...register('email',{required:true,pattern:'email'})} disabled type="text" />
                </label>
                {
                    error.email && <label className="error">{error.email}</label>
                }
                <label>
                    <p>Facebook<span>*</span></p>
                    <input type="text" {...register('urlFb',{required:true,pattern:'url'})} placeholder="Facebook url" />
                </label>
                {
                    error.urlFb && <label className="error">{error.urlFb}</label>
                }
                <label>
                    <p>Skype<span>*</span></p>
                    <input type="text" {...register('urlSk',{required:true,pattern:'url'})} placeholder="Skype url" />
                </label>
                {
                    error.urlSk && <label className="error">{error.urlSk}</label>
                }
                <button type="submit" className="btn main rect" >LƯU LẠI</button>
            </form>
        </div>
    )
}

export default Form
