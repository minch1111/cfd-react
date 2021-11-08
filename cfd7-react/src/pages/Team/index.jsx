import React, { useContext } from 'react'
import Student from '../../components/Students'
import Teacher from '../../components/Teachers'

function Team() {
    var people =[{
        name:"Trần Nghĩa",
        position:"teacher",
        positionDetail:"Founder & Creative Front-End Developer"
    },
    {
        name:"Đặng Thuyền Vương",
        position:"teacher",
        positionDetail:"Co-Founder & Fullstack Developer"
    },
    {
        name:"Đặng Thuyền Quân",
        position:"teacher",
        positionDetail:"Co-Founder & Fullstack Developer"
    },
    {
        name:"Nguyễn Đức Huy",
        position:"teacher",
        positionDetail:"Co-Founder & Fullstack Developer"
    },
    {
        name:"Diệp Anh Thy",
        position:"student",
        positionDetail:"CFD1-Offline"
    },
    {
        name:"Huỳnh Tiến Tài",
        position:"student",
        positionDetail:"CFD1-Offline"
    },  
    {
        name:"Ngô Thành Long",
        position:"student",
        positionDetail:"CFD1-Offline"
    },
    {
        name:"Trần Anh Tuấn",
        position:"student",
        positionDetail:"CFD1-Offline"
    },
    {
        name:"Nguyễn Thành Tùng",
        position:"student",
        positionDetail:"CFD1-Offline"
    },
    {
        name:"Phạm Thành Trung",
        position:"student",
        positionDetail:"CFD1-Offline"
    },
    
]

    return (
        <main className="team" id="main">
        <section>
          <div className="container">
            <div className="top">
              <h2 className="main-title">cfd team</h2>
              <p className="top-des">Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt
                elementum
                sem non luctus
              </p>
            </div>
            <div className="list row">
                {
                    people.filter(person => person.position ==="teacher").map(value =>(
                        <Teacher 
                        name ={value.name}
                        positionDetail = {value.positionDetail}
                        />
                    ))
                }
                {
                    people.filter(person => person.position ==="student").map(value =>(
                        <Student 
                        name ={value.name}
                        positionDetail = {value.positionDetail}
                        />
                    ))
                }
              
              
            </div>
          </div>
        </section>
      </main>
    )
}

export default Team
