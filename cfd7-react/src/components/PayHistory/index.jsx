import React from 'react'

function PayHistory({name,date,cost}) {
    return (
        <div className="item itemhistory">
            <div className="name">{name}</div>
            <div className="date">{date}</div>
            <div className="money">{cost} VND</div>
        </div>
    )
}

export default PayHistory
