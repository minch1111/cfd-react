import React from 'react'

function CommentItem({idCom,name,ava,content,date,fb}) {
   let showClass =(idCom)=>{
       if(idCom===0) return `ct ct-${idCom+1} active`
       else  return `ct ct-${idCom+1}`

   }

    return (
        <div className={showClass(idCom)}>
                      <div className="info">
                        <div className="name">
                          <h4>{name}</h4>
                          <p>CFD</p>
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
    )
}

export default CommentItem
