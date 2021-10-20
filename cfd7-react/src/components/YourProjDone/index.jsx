import React from 'react'

function ProjDone({name,description,teacher}) {
    return (
        <div className="col-md-6 course">
                      <div className="wrap">
                        <a href="#" className="cover">
                          <img src="img/img8.png" alt="" />
                        </a>
                        <div className="info">
                          <a href="#" className="name">
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
                          <div className="register-btn">Website</div>
                        </div>
                      </div>
                    </div>
    )
}

export default ProjDone
