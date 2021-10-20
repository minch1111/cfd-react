import React from 'react';
import CourseItem from './courseItem';

function Courses(props) {
    
    return (
        <section className="section-courseoffline">
          <div className="container">
            {
                  props.description &&
                  <p className="top-des">
                      {props.description}
                  </p>
            }
           
            <div className="textbox">
              <h2 className="main-title">{props.name}</h2>
            </div>
            <div className="list row">
              {
                  props.data.map((value,key)=>(
                      <CourseItem 
                      name ={value.name}
                      description={value.description}
                      teacher = {value.teacher}
                      status ={value.status}
                      students={value.students}
                      likes ={value.likes}
                      />
                  ))
              }
            </div>
          </div>
        </section>
    )
}

export default Courses
