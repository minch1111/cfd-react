import React from 'react'

function Teacher({name,positionDetail}) {
    return (
        <div className="item col-md-6 col-sm-6">
                <div className="wrap">
                  <div className="cover">
                    <img src="img/thumb-member.jpg" alt="" />
                  </div>
                  <div className="info">
                    <div className="name">
                     {name}
                    </div>
                    <p className="title">{positionDetail}</p>
                  </div>
                </div>
              </div>
    )
}

export default Teacher
