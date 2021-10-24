// import React from 'react'

import { Link, NavLink } from "react-router-dom"

export function Header() {

  const showNav = () => {

    document.querySelector("body").classList.toggle("menu-is-show")

  }
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
          <div className="have-login">
            <div className="account">
              <Link to="/thong-tin-ca-nhan" className="info">
                <div className="name">Trần Lê Trọng Nghĩa</div>
                <div className="avatar">
                  <img src="/img/avt.png" alt="" />
                </div>
              </Link>
            </div>
            <div className="hamberger">
            </div>
            <div className="sub">
              <NavLink to="/thong-tin-ca-nhan/khoa-hoc-cua-ban">Khóa học của tôi</NavLink>
              <NavLink to="/thong-tin-ca-nhan">Thông tin tài khoản</NavLink>
              <NavLink to="/">Đăng xuất</NavLink>
            </div>
          </div>
          {/* <div class="not-login bg-none">
                    <a href="#" class="btn-register">Đăng nhập</a>
                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                </div> */}
        </div>
      </div>
    </header>
  )
}
