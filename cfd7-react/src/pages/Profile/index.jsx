import React, { useContext } from 'react'
import CoinHistory from './components/CoinHistory'
import Payment from './components/Payment'
import Form from './components/Form'
import ProjectDone from './components/ProjectDone'
import YourCourse from './components/YourCourses'
import { Switch, Route, NavLink, useRouteMatch, Link } from 'react-router-dom'
import { Context } from '../../App'
import { useSelector } from 'react-redux'
import store from '../../store'

function Profile() {
  var urCourses = [{
    name: "Front-end căn bản",
    date: "09/09/2019",
    time: "54 giờ",
    videos: "25",
    students: "25",
    img: "/img/img3.png",
    process: 30,
    status: "Tiếp tục học"
  },
  {
    name: "Front-end nâng cao",
    date: "09/09/2019",
    time: "54 giờ",
    videos: "25",
    students: "25",
    img: "/img/img7.png",
    process: "30%",
    status: "Tiếp tục học"
  }
  ]

  var projDone = [
    {
      name: "Furnitown",
      description: "Dự án hoàn thành trong khóa CFD1 Offline của CFD Team.",
      teacher: "Trần Nghĩa"
    },
    {
      name: "GBox MB",
      description: "Dự án hoàn thành trong khóa CFD1 Offline của CFD Team.",
      teacher: "Trần Nghĩa"
    }
  ]
  var payHistory = [{
    name: "Khoá học CFD-Offline",
    date: "09/09/2020",
    cost: "1.500.000"
  },
  {
    name: "Khoá học CFD-Offline",
    date: "18/09/2020",
    cost: "1.500.000"
  },
  {
    name: "Khoá học CFD-Offline",
    date: "18/09/2020",
    cost: "1.500.000"
  },
  {
    name: "Khoá học CFD-Offline",
    date: "18/09/2020",
    cost: "1.500.000"
  }
  ]

  const { url } = useRouteMatch()

  let handleCLick = (ev) => {
    let href = ev.currentTarget.href
    console.log(href)
  }
  // console.log(`url`, url)

  const { user } = useSelector(store=> store.auth);
  // console.log(`avatar`, user.avatar)
  return (
    <main className="profile" id="main">
      <section>
        <div className="top-info">
          <div className="avatar">
            {/* <span class="text">H</span> */}
            <img src={ user?.avatar || user?.avatar?.link} alt="" />
            <div className="camera" />
          </div>
          <div className="name">{user.title || user?.name}</div>
          <p className="des">Thành viên của team CFD1-OFFLINE</p>
        </div>
        <div className="container">
          <div className="tab">
            <div className="tab-title">
              <NavLink to={`${url}`} onClick={handleCLick} exact>Thông tin tài khoản</NavLink>
              <NavLink to={`${url}/khoa-hoc-cua-ban`} onClick={handleCLick}>Khóa học của bạn</NavLink>
              <NavLink to={`${url}/du-an-da-lam`}>Dự án đã làm</NavLink>
              <NavLink to={`${url}/lich-su-thanh-toan`}>Lịch sử thanh toán</NavLink>
              <NavLink to={`${url}/quan-li-coin`}>Quản lý COIN của tôi</NavLink>
            </div>
            <div className="tab-content">
              <Switch>
                <Route exact path={`${url}`} component={Form} />

                <Route path={`${url}/khoa-hoc-cua-ban`} >
                  <YourCourse
                    urCourses={urCourses}
                  />
                </Route>
                <Route path={`${url}/du-an-da-lam`} >
                  <ProjectDone
                    projDone={projDone}
                  />
                </Route>
                <Route path={`${url}/lich-su-thanh-toan`} >
                  <Payment
                    payHistory={payHistory}
                  />
                </Route>
                <Route path={`${url}/quan-li-coin`} component={CoinHistory} />
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Profile
