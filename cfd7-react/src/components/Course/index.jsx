import React from 'react';
import CourseItem from './courseItem';

function Courses(props) {
    
    return (
        <section className="section-courseoffline">
          <div className="container">
            {
                  props?.description &&
                  <p className="top-des">
                      {props.description}
                  </p>
            }
           
            <div className="textbox">
              <h2 className="main-title">{props.name}</h2>
            </div>
            <div className="list row">
              {

                  // props.data?{...Array[9]}.map(()=>(<CourseItem loading={true} />)):
                  props.data?.map((value,key)=>(
                      <CourseItem 
                      key={key}
                      name ={value?.title}
                      description={value?.short_description}
                      teacher = {value?.teacher.title}
                      status ={value?.course_status}
                      img={value?.thumbnail.link}
                      // students={value.students}
                      // likes ={value.likes}
                      slug={value?.slug}
                      />
                  ))
              }
            </div>
          </div>
        </section>
    )
}

export default Courses
