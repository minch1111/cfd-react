import { React, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../../../components/Loading';
import courseService from '../../../services/courseServices';

function Banner({data}) {
    
    return (
        <section className="banner style2" >
            <div className="container">
                <div className="info">
                    <h1>Thực Chiến {data?.title}</h1>
                    <div className="row">
                        <div className="date"><strong>Khai giảng:</strong> {data?.opening_time}</div>
                        <div className="time"><strong>Thời lượng:</strong> {data?.count_video}</div>
                    </div>
                    <Link to="/dang-ki" className="btn white round">
                        đăng ký
                    </Link>
                </div>

                <div className="bottom">
                    <div className="container">
                        <div className="video">
                            <div className="icon">
                                <img src="/img/play-icon-white.png" alt="" />
                            </div>
                            <span>giới thiệu</span>
                        </div>
                        <div className="money">{data?.money} VNĐ</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
