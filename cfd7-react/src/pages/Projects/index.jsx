import React from 'react'
import ProFinish from '../../components/ProFinish'

function Projects() {

var proFinish =[
    {
        name:"Furnitown",
        img:"img/project/project (1).jpg",
        finisher:"Trần Nghĩa"
    },
    {
        name:"Kymco",
        img:"img/project/project (2).jpg",
        finisher:"Huỳnh Tiến Tài"
    },
    {
        name:"GBoxMB",
        img:"img/project/project (3).jpg",
        finisher:"Nguyễn Văn Tuấn"
    },
    {
        name:"Wooder",
        img:"img/project/project (4).jpg",
        finisher:"Nguyễn Đức Huy"
    },
    {
        name:"GBoxMB",
        img:"img/project/project (5).jpg",
        finisher:"Nguyễn Văn Tuấn"
    },
    {
        name:"Wooder",
        img:"img/project/project (6).jpg",
        finisher:"Nguyễn Đức Huy"
    },
    {
        name:"GBoxMB",
        img:"img/project/project (1).jpg",
        finisher:"Nguyễn Văn Tuấn"
    },
    {
        name:"Wooder",
        img:"img/project/project (2).jpg",
        finisher:"Nguyễn Đức Huy"
    },


]
    return (
        <main className="projectpage" id="main">
        <section className="section-1">
          <div className="container">
            <h2 className="main-title">dự án</h2>
            <p className="top-des">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non
              luctus
            </p>
            <div className="list row">
                {
                    proFinish.map((value,key)=>(
                        <ProFinish 
                        name={value.name}
                        img ={value.img}
                        finisher ={value.finisher}
                        />
                    ))
                }
              
            </div>
            <div className="bottom">
              <div className="btn overlay round btn-more">
                tải thêm
              </div>
            </div>
          </div>
        </section>
      </main>
    )
}

export default Projects
