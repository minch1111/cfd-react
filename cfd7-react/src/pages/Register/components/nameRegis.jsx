import React from 'react'

function NameRegis({register}) {
    return (
        <>
         <div className="main-sub-title">ĐĂNG KÝ</div>
              <h1 className="main-title">{register.title} </h1>
              <div className="main-info">
                <div className="date"><strong>Khai giảng:</strong> {register.opening_time}</div>
                <div className="time"><strong>Thời lượng:</strong> {register.count_video} buổi</div>
                <div className="time"><strong>Học phí:</strong> {register.money} VND</div>
              </div>   
        </>
    )
}

export default NameRegis
