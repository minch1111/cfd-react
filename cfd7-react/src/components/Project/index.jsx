import React from 'react'
import ProjItem from './ProjItem.jsx'

function Project(props) {
    return (
        <section className="section-3">
          <div className="container">
            <div className="textbox">
              <h3 className="sub-title">{props.subtitle}</h3>
              <h2 className="main-title">{props.maintitle}</h2>
            </div>
            <div className="list row">
              {
                  props.data.map((value,key)=>(
                    <ProjItem 
                        name = {value.name}
                        description ={value.description}
                        teacher = {value.teacher}    
                        img={value.img}
                        slug={value.slug}
                    />
                  ))
              }
            </div>
          </div>
        </section>
    )
}

export default Project
