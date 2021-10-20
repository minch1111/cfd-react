import React from 'react'
import CoinHistoryItem from '../../../components/CoinHistoryItem'

function CoinHistory() {
  var coin=[{
    coin:"-300",
    date:"09/10/2020",
    content:"Giới thiệu khóa học cho học viên mới",
    status:"Đã chấp nhận"
  },
  {
    coin:"+300",
    date:"18/10/2020",
    content:"Dùng COIN để quy đổi sang Voucher Tiki",
    status:"Đã chấp nhận"
  },
  {
    coin:"-300",
    date:"18/10/2020",
    content:"Dùng COIN để đổi sang Thẻ nạp điện thoạiiới thiệu khóa học cho học viên mới",
    status:"Chờ duyệt"
  }
]
    return (
      <div className="coinhistory">
      <h3><strong>Lịch sử COIN</strong></h3>
      {/* <p>Chưa sử dụng COIN</p> */}
      <div className="itemhistory">
        <div className="td"><strong>COIN</strong></div>
        <div className="td"><strong>Thời gian</strong></div>
        <div className="td"><strong>Nội dung</strong></div>
        <div className="td"><strong>Trạng thái</strong></div>
      </div>
      {
          coin.map((value,key)=>(
            <CoinHistoryItem 
            coin={value.coin}
            date={value.date}
            content={value.content}
            status={value.status}
            />
          ))
        }
     
    </div>
    )
}

export default CoinHistory
