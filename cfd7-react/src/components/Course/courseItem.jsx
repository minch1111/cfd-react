import React from 'react'

function courseItem({name,teacher,status,description,likes,students}) {
    let checkStatus=(status)=>{
        if(status==="Đã kết thúc")
    {
        return "badge b1";
    }
    else if(status==="Đang diễn ra")
    {
        return "badge b2";
    }
    else if (status ==="Sắp khai giảng")
    {
        return "badge b3";
    }   
    else{
        return "";
    }
    }
    return (
        <div className="col-md-4 course">
                <div className="wrap">
                  <a className="cover" href="#">
                    <img src="/img/img1.png" alt="" />
                    <span className={checkStatus(status)}>{status}</span>
                    <div className="hover">
                      <div className="top">
                        <div className="user">
                          <img src="/img/icon-user-white.svg" alt="" />
                          {students}</div>
                        <div className="heart">
                          <img src="/img/icon-heart.svg" alt="" /> {likes}
                        </div>
                      </div>
                      <div className="share">
                        <img src="/img/icon-viewmore.svg" alt="" />
                      </div>
                    </div>
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
                    <div className="register-btn">Đăng Ký</div>
                  </div>
                </div>
              </div>
    )
}

export default courseItem
