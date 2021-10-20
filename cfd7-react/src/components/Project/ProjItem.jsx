import React from 'react'

function ProjItem({name,description,teacher,img}) {
    return (
        <div className="col-md-4 course">
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
                        <img src="img/avt.png" alt="" />
                      </div>
                      <div className="name">{teacher}</div>
                    </div>
                    <div className="register-btn">Đăng Ký</div>
                  </div>
                </div>
              </div>
    )
}

export default ProjItem
