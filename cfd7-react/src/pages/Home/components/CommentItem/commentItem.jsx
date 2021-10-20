import React from 'react'

function CommentItem({idCom,name,course,content,date}) {
   let showComment =(idCom)=>{
       if(idCom===1) return "ct ct-1 active"
       else if(idCom===2) return "ct ct-2"
       else return "ct ct-3"

   }

    return (
        <div className={showComment(idCom)}>
                      <div className="info">
                        <div className="name">
                          <h4>{name}</h4>
                          <p>{course}</p>
                        </div>
                        <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                      </div>
                      <div className="content">
                        {content}
                      </div>
                      <div className="bottom">
                        <a href="#" target="_blank"><img src="/img/facebook.svg" alt="" /></a>
                        <span>{date}</span>
                      </div>
                    </div>
    )
}

export default CommentItem
