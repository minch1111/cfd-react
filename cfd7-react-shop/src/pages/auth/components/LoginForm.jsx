import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { HOME } from '../../../constants/path'
import { useForm } from '../../../core'
import authServices from '../../../service/authServices'
import { GET_WISH_LIST, LOGIN_SUCCESS } from '../../../store/type'
import Home from '../../home'

export default function LoginForm() {

    let { form, error, register, handleSubmit } = useForm()
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    let history = useHistory()
    const submit = async () => {

        let res = await authServices.login(form)


        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        let wish = await authServices.getWishList()
        dispatch({type:GET_WISH_LIST,wish})
        history.goBack();
    }



    // console.log(`user`, user)
    return (
        <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card card-lg mb-10 mb-md-0">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">Returning Customer</h6>
                    {/* Form */}
                    <form onSubmit={handleSubmit(submit)}>
                        <div className="row">
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="loginEmail">
                                        Email Address *
                                    </label>
                                    <input className="form-control form-control-sm" id="loginEmail" placeholder="Email Address *"  {...register('email', { required: true, pattern: 'email' })} />
                                    {
                                        error.email && <small id="emailHelp" className="form-text text-danger">{error.email}</small>
                                    }
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Password */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="loginPassword">
                                        Password *
                                    </label>
                                    <input {...register('password', { required: true, min: 6, max: 32 })} className="form-control form-control-sm" id="loginPassword" type="password" placeholder="Password *" />
                                    {
                                        error.password && <small className="form-text text-danger"> {error.password} </small>
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md">
                                {/* Remember */}
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="loginRemember" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="loginRemember">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-auto">
                                {/* Link */}
                                <div className="form-group">
                                    <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">Forgot
                                        Password?</a>
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Button */}
                                <button className="btn btn-sm btn-dark" type="submit">
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
