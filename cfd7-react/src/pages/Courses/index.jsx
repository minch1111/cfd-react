import React from 'react'
import Project from "../../components/Project/index.jsx"

function Courses() {
  var courseOnline = [
    {
      name:"Front-end căn bản",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"/img/img1.png",
      slug:"font-end-can-ban"
    },
    {
      name:"React JS",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Vương Đặng",
      img:"/img/img.png",
      slug:"react-js"
    },
    {
      name:"Animation",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"/img/img2.png",
      slug:"animation"
    },
    {
      name:"Scss, Grunt JS và Boostrap 4",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"/img/img3.png",
      slug:"scss-grunt-js-boostrap-4"
    },
    {
      name:"UX/ UI Design",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"/img/img4.png",
      slug:"ux-ui-design"
    },
    {
      name:"Web Responsive",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"/img/img5.png",
      slug:"web-responsive"
    },
  ]

  var courseOffline =[
    {
      name:"Front-end căn bản",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"/img/img6.png",
      slug:"front-end-can-ban"
    },
    {
      name:"Front-end nâng cao",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"/img/img7.png",
      slug:"front-end-nang-cao"
    },
    {
      name:"Laravel framework",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"/img/img8.png",
      slug:"laravel-framework"
    },
  ]
    return (
        <main className="homepage" id="main">
        <section className="section-1">
          <div className="container">
            <h2 className="main-title">KHÓA HỌC CFD</h2>
            <p className="top-des">
              The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
              has
              a more-or-less normal
            </p>   
             <Project 
             data ={courseOnline}
             subtitle="KHOÁ HỌC"
             maintitle="ONLINE"
             />
            
          </div>
        </section>
          <Project 
          data ={courseOffline}
          subtitle="KHÓA HỌC"
          maintitle="OFFLINE"
          />

        
      </main>
    )
}

export default Courses
