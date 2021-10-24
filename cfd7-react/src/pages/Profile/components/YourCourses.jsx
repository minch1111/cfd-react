import React from 'react'
import YourCourses from '../../../components/YourCoures'

function YourCourse(props) {
    return (
        <div className="tab2">
                {
                  props.urCourses.map((value) => (
                    <YourCourses
                      name={value.name}
                      date={value.date}
                      time={value.time}
                      videos={value.videos}
                      students={value.students}
                      img={value.img}
                      process={value.process}
                      status={value.status}
                    />
                  ))
                }
              </div>
    )
}

export default YourCourse
