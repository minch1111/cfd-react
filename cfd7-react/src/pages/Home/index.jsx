import React from 'react'
import Courses from '../../components/Course/index.jsx'
import Action from './components/action.jsx'
import Banner from './components/banner'
import Comments from './components/comments'
import Differents from './components/differents'
import Gallery from './components/gallery'

function Home() {
  var objOffline = [
    {
        name:"Front-end căn bản",
        description:"One of the best corporate fashion brands in Sydney",
        teacher:"Trần Nghĩa",
        status:"Đã kết thúc",
        likes :100,
        students:12
    },
    {
        name:"ReactJS",
        description:"One of the best corporate fashion brands in Sydney",
        teacher:"Vương Đặng",
        status:"Đang diễn ra",
        likes :100,
        students:12
    },
    {
        name:"Animation",
        description:"One of the best corporate fashion brands in Sydney",
        teacher:"Trần Nghĩa",
        status:"Sắp khai giảng",
        likes :100,
        students:12
    },
    {
        name:"Scss, Grunt JS và Boostrap 4",
        description:"One of the best corporate fashion brands in Sydney",
        teacher:"Trần Nghĩa",
        status:"",
        likes :100,
        students:12
    },
    {
        name:"UX/UI Design",
        description:"One of the best corporate fashion brands in Sydney",
        teacher:"Trần Nghĩa",
        status:"",
        likes :100,
        students:12
    },
    {
        name:"Web Responsive",
        description:"One of the best corporate fashion brands in Sydney",
        teacher:"Trần Nghĩa",
        status:"",
        likes :100,
        students:12
    }
    ]
var objOnline=[
{
    name:"Front-end căn bản",
    description:"One of the best corporate fashion brands in Sydney",
    teacher:"Trần Nghĩa",
    status:"",
    likes :100,
    students:12
},
{
    name:"Front-end nâng cao",
    description:"One of the best corporate fashion brands in Sydney",
    teacher:"Trần Nghĩa",
    status:"",
    likes :100,
    students:12
},
{
    name:"Laravel framework",
    description:"One of the best corporate fashion brands in Sydney",
    teacher:"Trần Nghĩa",
    status:"",
    likes :100,
    students:12
}
]

var objCom =[
  {
      id:1,
      name : "Tiến Tài",
      course :"Thành viên CFD1",
      content:"Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình front-end qua khóa học. Like cho 4 mentor.",
      date:"09/10/2020"
  },
  {
      id:2,
      name : "Phạm Thành Trung",
      course :"Thành viên CFD1",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin libero id magna finibus, in maximus urna tincidunt. Nam at leo lacinia, interdum dolor in, molestie lectus. Aenean porttitor purus at purus euismod tristique",
      date:"09/10/2020"
  },
  {
      id:3,
      name : "Nguyễn Văn Tuấn",
      course :"Thành viên CFD1",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin libero id magna finibus, in maximus urna tincidunt. Nam at leo lacinia, interdum dolor in, molestie lectus. Aenean porttitor purus at purus euismod tristique",
      date:"09/10/2020"
  }
]
    return (
        <main className="homepage" id="main">
        <Banner/>
        <Courses name="Khoá học offline" 
                description="The readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it
                  has a more-or-less normal"
                data ={objOffline}

        />
        <Courses name="Khoá học online"
                 data={objOnline}       
        />
        <Differents />
        {/* <section class="section-3">
            <div class="container">
                <div class="video">
                    <iframe id="video-intro"
                        src="https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen allowscriptaccess="always"></iframe>

                    <div class="video-src" data-src="video/CFD-video-intro.mp4"></div>
                    <div class="play-btn btn-video-intro">
                        <img src="/img/play-video-btn.png" alt="">
                    </div>
                </div>
            </div>
        </section> */}
        <Comments 
        data = {objCom}/>
       
        <Gallery />
        <Action />
      </main>
    )
}

export default Home
