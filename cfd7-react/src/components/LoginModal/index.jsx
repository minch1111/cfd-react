import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Context } from '../../App';
import useForm from '../../hooks/useForm'
import authServices from '../../services/authServices';
import { closeLoginAction, fetchLogin } from '../../store/action';
import Modal from '../Modal'


function LoginModal() {

    
    let {register,handleSubmit,error,form} = useForm();
    let {loginError} =useContext(Context);
    const {user,openLogin} = useSelector(store=>store.auth)
    const distpatch = useDispatch()

    const submit= async (form)=>{
        // let res = await authServices.login(form);
        // distpatch({
        //     type:"LOGIN",
        //     payload:res.data
        // })
        distpatch(
            fetchLogin(form)
        )
        console.log(`user`, user)
        // console.log(`form`, form)
    }

    return (

        <Modal>
            <div className="popup-form popup-login" style={{ display: openLogin?'flex':'none' }} onClick={()=>distpatch(closeLoginAction())}>
                <div className="wrap" onClick={(ev)=>ev.stopPropagation()}>
                    {/* login-form */}
                    <form  onSubmit={handleSubmit(submit)} className="ct_login" style={{ display: 'block' }}>
                        <h2 className="title">Đăng nhập</h2>
                        {
                            loginError && <p className="error-login">{loginError}</p>
                        }
                        <input {...register('username',{required:true,pattern:'email'})}type="text" placeholder="Email" />
                        {
                            error.username&& <p className="error-login">{error.username}</p>
                        }
                        <input {...register('password',{min:6,max:32})} type="password" placeholder="Mật khẩu" />
                        {
                            error.password&&<p className="error-login">{error.password}</p>
                        }
                        <div className="remember">
                            <label className="btn-remember">
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <p>Nhớ mật khẩu</p>
                            </label>
                            <a href="#" className="forget">Quên mật khẩu?</a>
                        </div>
                        <button type="submit" className="btn rect main btn-login">đăng nhập</button>
                        {/* <div className="text-register" style={{}}>
                            <strong>hoặc đăng ký bằng</strong>
                        </div>
                        <div>
                            <div className="btn btn-icon rect white btn-google">
                                <img src="img/google.svg" alt="" />
                                Google
                            </div>
                        </div>
                        <div className="close">
                            <img src="img/close-icon.png" alt="" />
                        </div> */}
                    </form>
                    {/* email form */}
                    {/* <div className="ct_email">
                    <h2 className="title">Đặt lại mật khẩu</h2>
                    <input type="text" placeholder="Email" />
                    <div className="btn rect main btn-next">Tiếp theo</div>
                    <div className="back" />
                    <div className="close">
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div> */}
                </div>
            </div>
        </Modal>
    )
}

export default LoginModal
