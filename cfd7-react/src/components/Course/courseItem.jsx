import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom';
import courseService from '../../services/courseServices';

function courseItem({name,teacher,status,description,img,slug}) {

  
    // let checkStatus=(status)=>{
    //     if(status==="Đã kết thúc")
    // {
    //     return "badge b1";
    // }
    // else if(status==="Đang diễn ra")
    // {
    //     return "badge b2";
    // }
    // else if (status ==="Sắp khai giảng")
    // {
    //     return "badge b3";
    // }   
    // else{
    //     return "";
    // }
    // }
    let checkStatus =status=="sap-khai-gian"?"badge b3":status==="dang-dien-ra"?"badge b2":"badge b1";
    return (
        <div className="col-md-4 course">
                <div className="wrap">
                  <Link className="cover" to={`/khoa-hoc/${slug}`}>
                    <img src={img} alt="" />
                    <span className={checkStatus}>{status=="sap-khai-gian"?"Sắp khai giảng":status==="dang-dien-ra"?"Đang diễn ra":"Đã kết thúc"}</span>
                    <div className="hover">
                      <div className="top">
                        <div className="user">
                          <img src="/img/icon-user-white.svg" alt="" />
                          20</div>
                        <div className="heart">
                          <img src="/img/icon-heart.svg" alt="" /> 12
                        </div>
                      </div>
                      <div className="share">
                        <img src="/img/icon-viewmore.svg" alt="" />
                      </div>
                    </div>
                  </Link>
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
                    <Link to={`dang-ki/${slug}`} className="register-btn">Đăng Ký</Link>
                  </div>
                </div>
              </div>
    )
}

export default courseItem
