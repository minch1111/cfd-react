import React from 'react'

function ProFinish({name,img,finisher}) {
    return (
        <a href="#" className="item col-md-6">
        <div className="wrap">
          <div className="cover">
            <img src={img} alt="" />
          </div>
          <div className="info">
            <div className="name">{name}</div>
            <div className="makeby">Hoàn thành với {finisher} </div>
          </div>
        </div>
      </a>
    )
}

export default ProFinish
