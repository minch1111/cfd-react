import React from 'react'
import Project from "../../components/Project/index.jsx"

function Courses() {
  var courseOnline = [
    {
      name:"Front-end căn bản",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"img/img1.png"
    },
    {
      name:"React JS",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Vương Đặng",
      img:"img/img.png"
    },
    {
      name:"Animation",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"img/img2.png"
    },
    {
      name:"Scss, Grunt JS và Boostrap 4",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"img/img3.png"
    },
    {
      name:"UX/ UI Design",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"img/img4.png"
    },
    {
      name:"Web Responsive",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"img/img5.png"
    },
  ]

  var courseOffline =[
    {
      name:"Front-end căn bản",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"img/img6.png"
    },
    {
      name:"Front-end nâng cao",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"img/img7.png"
    },
    {
      name:"Laravel framework",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"img/img8.png"
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
