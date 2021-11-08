import React from 'react'
import ProjItem from './ProjItem.jsx'

function Project({data,subtitle,maintitle}) {
    return (
        <section className="section-3">
          <div className="container">
            <div className="textbox">
              <h3 className="sub-title">{subtitle}</h3>
              <h2 className="main-title">{maintitle}</h2>
            </div>
            <div className="list row">
              {
                  data.map((value,key)=>(
                    <ProjItem 
                        key={key}
                        name = {value?.title}
                        description ={value?.short_description}
                        teacher = {value?.teacher?.title}    
                        img={value?.thumbnail?.link}
                        slug={value?.slug}
                    />
                  ))
              }
            </div>
          </div>
        </section>
    )
}

export default Project
