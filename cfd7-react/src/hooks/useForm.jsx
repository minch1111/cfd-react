import React, { useState } from 'react'
const phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const urlPattern = /(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/

export default function useForm(initValue = {}) {
    const [form, setForm] = useState(initValue)
    const [error, setError] = useState({})
    const rules = {}

    const handleChange = (event) => {
        let name = event.currentTarget.name
        let value = event.currentTarget.value

        setForm({
            ...form,
            [name]: value
        })
    }



    const validator = () => {
        let errorObj = {};
        for (let i in rules) {
            let r = rules[i]
            if (r.required && !form[i]) {
                errorObj[i] = "Không được bỏ trống"
            }
            else if (r.pattern) {
                let pattern = r.pattern
                if (r.pattern === "phone") pattern = phonePattern
                if (r.pattern === "email") pattern = emailPattern
                if (r.pattern === "url") pattern = urlPattern

                if (!pattern.test(form[i])) {
                    errorObj[i] = "Bạn chưa nhập đúng định dạng yêu cầu"
                }
            }

            if(r.min && (typeof form[i] ==='undefined' || form[i].length<6))
            {
                errorObj[i]=`Bạn cần nhập tối thiểu ${r.min} kí tự`
            }
            if(r.max && ( form[i]?.length>32))
            {
                errorObj[i]=`Bạn chỉ được nhập tối đa ${r.max} kí tự`
            }
        }
        return errorObj
    }

    function register(name, rule) {
        if (rule) {
            rules[name] = rule;
        }
        return {
            name: name,
            onChange: handleChange,
            value: form[name]
        }
    }

    const handleSubmit = (callback) => {
        return (ev) => {
            ev.preventDefault();
            let error = validator();
            if (Object.keys(error).length === 0) {
                callback(form)
            }
            setError(error)
        }
    }


    return {
        form,
        error,
        register,
        handleSubmit
    }
}