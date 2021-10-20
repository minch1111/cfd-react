import React from 'react'

function NameRegis(props) {
    return (
        <>
         <div className="main-sub-title">ĐĂNG KÝ</div>
              <h1 className="main-title">{props.name} </h1>
              <div className="main-info">
                <div className="date"><strong>Khai giảng:</strong> {props.date}</div>
                <div className="time"><strong>Thời lượng:</strong> {props.time} buổi</div>
                <div className="time"><strong>Học phí:</strong> {props.fee} VND</div>
              </div>   
        </>
    )
}

export default NameRegis
