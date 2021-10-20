import React from 'react'

function CoinHistoryItem({coin,date,content,status}) {
    return (
        <div className="itemhistory">
        <div className="td">{ coin==="-300" ? <span className="coin red">-300</span> :<span className="coin">-300</span>}</div>
        <div className="td">{date}</div>
        <div className="td">{content}</div>
        <div className="td">{status}</div>
      </div>
    )
}

export default CoinHistoryItem
