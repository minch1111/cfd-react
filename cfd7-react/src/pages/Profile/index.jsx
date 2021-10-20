import React from 'react'
import PayHistory from '../../components/PayHistory'
import ProjDone from '../../components/YourProjDone'
import YourCourses from '../../components/YourCoures'
import CoinHistory from './components/coinHistory'
import Tabtitle from './components/tabtitle'

function Profile() {
    var urCourses=[{
        name:"Front-end căn bản",
        date:"09/09/2019",
        time:"54 giờ",
        videos:"25",
        students:"25",
        img:"img/img3.png",
        process:30,
        status:"Tiếp tục học"
    },
    {
        name:"Front-end nâng cao",
        date:"09/09/2019",
        time:"54 giờ",
        videos:"25",
        students:"25",
        img:"img/img7.png",
        process:"30%",
        status:"Tiếp tục học"
    }
]

var projDone =[
    {
        name:"Furnitown",
        description:"Dự án hoàn thành trong khóa CFD1 Offline của CFD Team.",
        teacher:"Trần Nghĩa"
    },
    {
        name:"GBox MB",
        description:"Dự án hoàn thành trong khóa CFD1 Offline của CFD Team.",
        teacher:"Trần Nghĩa"
    }
]
var payHistory=[{
    name:"Khoá học CFD-Offline",
    date:"09/09/2020",
    cost:"1.500.000"
    },
    {
    name:"Khoá học CFD-Offline",
    date:"18/09/2020",
    cost:"1.500.000"
    },
    {
        name:"Khoá học CFD-Offline",
        date:"18/09/2020",
        cost:"1.500.000"
    },
    {
        name:"Khoá học CFD-Offline",
        date:"18/09/2020",
        cost:"1.500.000"
    }
]
    return (
        <main className="profile" id="main">
        <section>
          <div className="top-info">
            <div className="avatar">
              {/* <span class="text">H</span> */}
              <img src="img/avatar-lg.png" alt="" />
              <div className="camera" />
            </div>
            <div className="name">trần nghĩa</div>
            <p className="des">Thành viên của team CFD1-OFFLINE</p>
          </div>
          <div className="container">
            <div className="tab">
              <Tabtitle />
              <div className="tab-content">
                <div className="tab1" style={{display: 'none'}}>
                  <label>
                    <p>Họ và tên<span>*</span></p>
                    <input type="text" placeholder="Nguyễn Văn A" />
                  </label>
                  <label>
                    <p>Số điện thoại<span>*</span></p>
                    <input type="text" placeholder="0949******" />
                  </label>
                  <label>
                    <p>Email<span>*</span></p>
                    <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
                  </label>
                  <label>
                    <p>Facebook<span>*</span></p>
                    <input type="text" placeholder="Facebook url" />
                  </label>
                  <label>
                    <p>Skype<span>*</span></p>
                    <input type="text" placeholder="Skype url" />
                  </label>
                  <div className="btn main rect">LƯU LẠI</div>
                </div>
                <div className="tab2" style={{display: 'none'}}>
                 {
                     urCourses.map((value)=>(
                        <YourCourses 
                            name ={value.name}
                            date={value.date}
                            time={value.time}
                            videos = {value.videos}
                            students ={value.students}
                            img={value.img}
                            process={value.process}
                            status={value.status}
                        />
                     ))
                 }
                </div>
                <div className="tab3" style={{display: 'none'}}>
                  <div className="row">
                    {
                        projDone.map((value,key)=>(
                            <ProjDone 
                            
                            name ={value.name}
                            description = {value.description}
                            teacher={value.teacher}

                            />
                        ))
                    }
                  </div>
                  <div className="btn-wrap">
                    <div className="btn overlay btn-icon round">
                      <img src="img/icon-upload.svg" alt="" /> Tải lên
                    </div>
                  </div>
                </div>
                <div className="tab4" style={{display: 'none'}}>
                  {
                      payHistory.map((value,key)=>(
                          <PayHistory 
                          name = {value.name}
                          date = {value.date}
                          cost = {value.cost}
                          />
                      ))
                  }
                </div>
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
                    <CoinHistory />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
}

export default Profile
