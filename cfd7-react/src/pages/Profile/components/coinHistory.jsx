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
      <div className="tab5 cointab" style={{display: 'block'}}>
      <div className="coininfo">
        <div className="coininfo__box">
          <h3><strong>Thông tin COIN</strong></h3>
          <div className="coininfo__box-ct">
            <div>
              <img src="img/cfd-coin.png" alt="" />
              <p>Bạn có <strong>300</strong> COIN</p>
            </div>
          </div>
        </div>
        <div className="coininfo__box">
          <h3><strong>Đổi COIN</strong></h3>
          <div className="coininfo__box-ct">
            <label className="checkcontainer">
              Voucher Tiki 100k
              <input type="radio" name="radio" />
              <span className="checkmarkradio" />
            </label>
            <label className="checkcontainer">
              Voucher Tiki 200k
              <input type="radio" name="radio" />
              <span className="checkmarkradio" />
            </label>
            <label className="checkcontainer">
              Voucher Tiki 500k
              <input type="radio" name="radio" />
              <span className="checkmarkradio" />
            </label>
            <label className="checkcontainer">
              Thẻ nạp điện thoại 100k
              <input type="radio" name="radio" />
              <span className="checkmarkradio" />
            </label>
            <label className="checkcontainer">
              Thẻ nạp điện thoại 200k
              <input type="radio" name="radio" />
              <span className="checkmarkradio" />
            </label>
            <label className="checkcontainer">
              Thẻ nạp điện thoại 500k
              <input type="radio" name="radio" />
              <span className="checkmarkradio" />
            </label>
            <small><i>*Bạn có thể đổi COIN 1 lần</i></small>
          </div>
          <a href="javascript:void(0)" className="btn main">Đổi COIN</a>
        </div>
      </div>
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
    </div>



      
      
    )
}

export default CoinHistory
