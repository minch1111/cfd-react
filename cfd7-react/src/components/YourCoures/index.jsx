import React from 'react'

function YourCourses({name,date,time,videos,students,img,process,status}) {
    return (
        <div className="item">
                    <div className="cover">
                      <img src={img} alt="" />
                    </div>
                    <div className="info">
                      <a href="#" className="name">
                        {name}
                      </a>
                      <div className="date">Khai giảng ngày {date}</div>
                      <div className="row">
                        <div className>
                          <img src="img/clock.svg" alt="" className="icon" />{time} giờ
                        </div>
                        <div className>
                          <img src="img/play.svg" alt="" className="icon" />{videos} video
                        </div>
                        <div className>
                          <img src="img/user.svg" alt="" className="icon" />{students} học viên
                        </div>
                      </div>
                      <div className="process">
                        <div className="line">
                          <div className="rate" style={{width:{process}}} />
                        </div>
                        {process}
                      </div>
                      <div className="btn overlay round btn-continue">
                        {status}
                      </div>
                    </div>
                  </div>
    )
}

export default YourCourses
