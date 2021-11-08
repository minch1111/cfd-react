import React,{useState,useEffect} from 'react'
import Detail from './components/detail'
import Banner from './components/banner'
import "./index.css"
import Loading from "../../components/Loading"
import Project from '../../components/Project'
import { useRouteMatch,useParams } from 'react-router'
import courseService from '../../services/courseServices'

function CourseDetail() {

  var proMember = [
    {
      name:"React JS",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Vương Đặng",
      img:"/img/img.png"
    },
    {
      name:"Animation",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"/img/img2.png"
    },
    {
      name:"Scss, Grunt JS và Boostrap 4",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"/img/img3.png"
    },
  ]

  var courseFl = [
    {
      name:"Front-end căn bản",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Vương Đặng",
      img:"/img/img.png"
    },
    {
      name:"Fron-end nâng cao",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"/img/img2.png"
    },
    {
      name:"Laravel framework",
      description : "One of the best corporate fashion brands in Sydney",
      teacher:"Trần Nghĩa",
      img:"/img/img3.png"
    },
  ]
  let { slug } = useParams()
    let [detail, setDetail] = useState();
    console.log(`slug`, slug)
    useEffect(async () => {
        let data = await courseService.courseDetail(slug);
        setDetail(data)
    }, [slug])

    if(!detail) return <Loading />
    console.log(detail)
    return (
        <main className="course-detail" id="main">
         <Banner
         data = {detail.data}
         />
          <Detail
          data ={detail.data}
          />
          <Project 
           data = {proMember}
           subtitle = "DỰ ÁN"
           maintitle = "THÀNH VIÊN"
           />
          <Project 
          data ={courseFl}
          subtitle ="KHÓA HỌC"
          maintitle ="LIÊN QUAN"
          />
        </main>
    )
}

export default CourseDetail
