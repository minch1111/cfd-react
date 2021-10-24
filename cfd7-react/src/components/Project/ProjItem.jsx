import React from 'react'
import{Link} from"react-router-dom"

function ProjItem({name,description,teacher,img,slug}) {
    return (
        <Link to={`/khoa-hoc/${slug}`} className="col-md-4 course">
                <div className="wrap">
                  <a href="#" className="cover">
                    <img src={img} alt="" />
                  </a>
                  <div className="info">
                    <a className="name" href="#">
                     {name}
                    </a>
                    <p className="des">
                      {description}
                    </p>
                  </div>
                  <div className="bottom">
                    <div className="teacher">
                      <div className="avatar">
                        <img src="/img/avt.png" alt="" />
                      </div>
                      <div className="name">{teacher}</div>
                    </div>
                    <Link to="/dang-ki" className="register-btn">Đăng Ký</Link>
                  </div>
                </div>
              </Link>
    )
}

export default ProjItem
