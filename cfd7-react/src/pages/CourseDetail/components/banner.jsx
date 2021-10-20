import React from 'react'

function Banner() {
    return (
        <section className="banner style2" >
        <div className="container">
            <div className="info">
                <h1>Thực Chiến
                    front-end căn bản</h1>
                <div className="row">
                    <div className="date"><strong>Khai giảng:</strong> 12/10/2020</div>
                    <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                </div>
                <div className="btn white round">
                    đăng ký
                </div>
            </div>
        
        <div className="bottom">
            <div className="container">
                <div className="video">
                    <div className="icon">
                        <img src="img/play-icon-white.png" alt="" />
                    </div> 
                    <span>giới thiệu</span>
                </div>
                <div className="money">4.000.000 VND</div>
            </div>
        </div>  
        </div>
    </section>  
    )
}

export default Banner
