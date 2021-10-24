import React, { useState } from 'react'

const phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const urlPattern = /(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/

function Form() {

    const [form, setForm] = useState({})
    const [error, setError] = useState({})

    const handleChange = (event) => {
        let name = event.currentTarget.name
        let value = event.currentTarget.value

        setForm({
            ...form,
            [name]: value
        })
    }

    

    const submit = () => {
        let errorObj = {};
        if (!form.name) {
            errorObj.name = "Name, please!"
        }

        if (!form.phone) {
            errorObj.phone = "Phone, please!"
        }
        else if(!phonePattern.test(form.phone)){
            errorObj.phone="Check your phone's format, please"
        }

        if (!form.email) {
            errorObj.email = "Email, please!"
        }
        else if(!emailPattern.test(form.email)){
            errorObj.email="Check your email's format, please"
        }

        if (!form.urlFb) {
            errorObj.urlFb = "Facebook's Url, Please"
        }
        else if(!urlPattern.test(form.urlFb)){
            errorObj.urlFb="Check your facebook's format, please"
        }
        if (!form.urlSk) {
            errorObj.urlSk = "Skype, please!"
        }

        setError(errorObj)
    }


    return (
        <div className="tab1">
            <label>
                <p>Họ và tên<span>*</span></p>
                <input type="text" onChange={handleChange} name="name" placeholder="Nguyễn Văn A" />
            </label>
            {
                error.name && <label><p className="error">{error.name}</p></label>
            }
            <label>
                <p>Số điện thoại<span>*</span></p>
                <input type="text" onChange={handleChange} name="phone" placeholder="0949******" />
            </label>
            {
                error.phone && <label><p className="error">{error.phone}</p></label>
            }
            <label>
                <p>Email<span>*</span></p>
                <input defaultValue="vuong.dang@dna.vn" type="text" onChange={handleChange} name="email" />
            </label>
            {
                error.email && <label><p className="error">{error.email}</p></label>
            }
            <label>
                <p>Facebook<span>*</span></p>
                <input type="text" onChange={handleChange} name="urlFb" placeholder="Facebook url" />
            </label>
            {
                error.urlFb && <label><p className="error">{error.urlFb}</p></label>
            }
            <label>
                <p>Skype<span>*</span></p>
                <input type="text" onChange={handleChange} name="urlSk" placeholder="Skype url" />
            </label>
            {
                error.urlSk && <label><p className="error">{error.urlSk}</p></label>
            }
            <div className="btn main rect" onClick={submit}>LƯU LẠI</div>
        </div>
    )
}

export default Form
