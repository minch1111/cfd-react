// import React from 'react'
import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { Context } from "../../App"
import { closeLoginAction, logout, openLoginAction } from "../../store/action"


export function Header() {

  const showNav = () => {

    document.querySelector("body").classList.toggle("menu-is-show")

  }
  // let { user,logout,togglePopup } = useContext(Context)
   const {user,openLogin} = useSelector(store => store.auth)
   const dispatch = useDispatch()

  
  


  return (
    <header id="header">
      <div className="wrap">
        <div className="menu-hambeger" onClick={showNav}>
          <div className="button">
            <span />
            <span />
            <span />
          </div>
          <span className="text">menu</span>
        </div>
        <Link to="/" className="logo">
          <img src="/img/logo.svg" alt="" />
          <h1>CFD</h1>
        </Link>
        <div className="right">
          {
            user ? (
              <div className="have-login">
                <div className="account">
                  <Link to="/thong-tin-ca-nhan" className="info">
                    <div className="name">{user.title || user.name}</div>
                    <div className="avatar">
                      <img src={user?.avatar?.thumbnail?.['thumbnail-1'] || user?.avatar} alt="" />
                    </div>
                  </Link>
                </div>
                <div className="hamberger">
                </div>
                <div className="sub">
                  <NavLink to="/thong-tin-ca-nhan/khoa-hoc-cua-ban">Khóa học của tôi</NavLink>
                  <NavLink to="/thong-tin-ca-nhan">Thông tin tài khoản</NavLink>
                  <NavLink to="/" onClick={(ev)=>{ev.preventDefault();dispatch(logout())}}>Đăng xuất</NavLink>
                </div>
              </div>
            ) : (
              <div className="not-login bg-none">
                <a onClick={(ev)=>{ev.preventDefault();dispatch(openLoginAction()) }}href='#' className="btn-register">Đăng nhập</a>
                <a href="#" className="btn main btn-open-login">Đăng ký</a>
              </div>
            )
          }

        </div>
      </div>
    </header>
  )
}
