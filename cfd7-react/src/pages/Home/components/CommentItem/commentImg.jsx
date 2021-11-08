import React from 'react'

function CommentImg({idCom,name,ava,content,date,fb}) {
    return (
        <div className="carousel-cell">
                    <div className="img">
                      <picture>
                        <source media="(max-width: 767px)" srcSet="/img/Intersect.png" />
                        <img data-flickity-lazyload={ava} alt="" />
                      </picture>
                    </div>
                    <div className="ct_m">
                      <div className="info">
                        <div className="name">
                          <h4>{name}</h4>
                          <p>Thành viên CFD</p>
                        </div>
                        <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                      </div>
                      <div className="content">
                        {content}
                      </div>
                      <div className="bottom">
                        <a href={fb} target="_blank"><img src="/img/facebook.svg" alt="" /></a>
                        <span>{date}</span>
                      </div>
                    </div>
                  </div>
    )
}

export default CommentImg
