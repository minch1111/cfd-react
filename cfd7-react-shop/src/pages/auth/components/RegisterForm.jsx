import React from 'react'
import { useForm } from '../../../core'
import authServices from '../../../service/authServices'

export default function RegisterForm() {

    let {form,error,register,handleSubmit}= useForm()
    const submit =async ()=>{
        let res = await authServices.register(form)
        console.log(`res`, res)
        alert('Đã đăng ký thành công')
    }    
    return (
        <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card card-lg">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">New Customer</h6>
                    {/* Form */}
                    <form onSubmit={handleSubmit(submit)}>
                        <div className="row">
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerFirstName">
                                        First Name *
                                    </label>
                                    <input {...register('firstName',{required:true})} className="form-control form-control-sm" id="registerFirstName" type="text" placeholder="First Name *"/>
                                    {
                                        error.firstName&& <small className="form-text text-danger"> {error.firstName} </small>
                                    }
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerLastName">
                                        Last Name *
                                    </label>
                                    <input {...register('lastName',{required:true})} className="form-control form-control-sm" id="registerLastName" type="text" placeholder="Last Name *"  />
                                    {
                                        error.lastName&& <small className="form-text text-danger"> {error.lastName} </small>
                                    }
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerEmail">
                                        Email Address *
                                    </label>
                                    <input {...register('username',{required:true,pattern:'email'})} className="form-control form-control-sm" id="registerEmail" type="email" placeholder="Email Address *"  />
                                    {
                                        error.username&& <small className="form-text text-danger"> {error.username} </small>
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* Password */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerPassword">
                                        Password *
                                    </label>
                                    <input {...register('password',{required:true,min:6,max:32})} className="form-control form-control-sm" id="registerPassword" type="password" placeholder="Password *" />
                                    {
                                        error.password&& <small className="form-text text-danger"> {error.password} </small>
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* Password */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerPasswordConfirm">
                                        Confirm Password *
                                    </label>
                                    <input {...register('confirmPassword',{required :true,confirm:true})} className="form-control form-control-sm" id="registerPasswordConfirm" type="password" placeholder="Confrm Password *" />
                                    {
                                        error.confirmPassword&& <small className="form-text text-danger"> {error.confirmPassword} </small>
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md-auto">
                                {/* Link */}
                                <div className="form-group font-size-sm text-muted">
                                    By registering your details, you agree with our Terms &amp; Conditions,
                                    and Privacy and Cookie Policy.
                                </div>
                            </div>
                            <div className="col-12 col-md">
                                {/* Newsletter */}
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="registerNewsletter" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="registerNewsletter">
                                            Sign me up for the Newsletter!
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Button */}
                                <button className="btn btn-sm btn-dark" type="submit">
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
