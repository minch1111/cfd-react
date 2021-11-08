import { Switch } from "react-router";
import { NavLink } from "react-router-dom";

export function Nav() {
  const showNav = () => {

    document.querySelector("body").classList.toggle("menu-is-show")

  }

  return (
    <>
      <nav className="nav">
        <ul>
          <li className="li_login">
            <a href="#">Đăng nhập</a>
            <a href="#">Đăng ký</a>
          </li>

          <li>
            <NavLink to="/" exact onClick={showNav}>Trang chủ</NavLink>
          </li>
          <li>
            <NavLink to="/team" onClick={showNav}>CFD Team</NavLink>
          </li>
          <li>
            <NavLink to="/khoa-hoc" onClick={showNav}>Khóa Học</NavLink>
          </li>
          <li>
            <NavLink to="/du-an" onClick={showNav}>Dự Án</NavLink>
          </li>
          <li>
            <NavLink to="/hop-tac" onClick={showNav}>Liên hệ</NavLink>
          </li>


        </ul>
      </nav>
      <div className="overlay_nav" />
    </>

  )
}


