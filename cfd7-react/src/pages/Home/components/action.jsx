import React from 'react'
import { Link } from 'react-router-dom'

function Action() {
    return (
        <section className="section-action">
          <div className="container">
            <h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?</h3>
            <Link to="/khoa-hoc" className="btn main round bg-white">Đăng ký</Link>
          </div>
        </section>
    )
}

export default Action
