import React from 'react'

function Detail({data}) {
    return (
        <section className="section-2">
        <div className="container">
          <p className="des">Many Laravel apps don’t warrant the complexity of a full front-end framework like Vue or
            React. In this series, we’ll walk through a handful of simple ways to add dynamic functionality to
            your apps.</p>
          <h2 className="title">giới thiệu về khóa học</h2>
          <div className="cover">
            <img src="img/course-detail-img.png" alt="" />
          </div>
          <h3 className="title">nội dung khóa học</h3>
          <div className="accordion">
            <div className="accordion__title">
              <div className="date">Ngày 1</div>
              <h3>Giới thiệu HTML, SEO, BEM.</h3>
            </div>
            <div className="content">
              I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers
              some tangible benefits over alternatives like VueJS for simple page interactions.
            </div>
          </div>
          <div className="accordion">
            <div className="accordion__title">
              <div className="date">Ngày 2</div>
              <h3>CSS, CSS3, Flexbox, Grid</h3>
            </div>
            <div className="content">
              I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers
              some tangible benefits over alternatives like VueJS for simple page interactions.
            </div>
          </div>
          <div className="accordion">
            <div className="accordion__title">
              <div className="date">Ngày 3</div>
              <h3>Media Queries</h3>
            </div>
            <div className="content">
              I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers
              some tangible benefits over alternatives like VueJS for simple page interactions.
            </div>
          </div>
          <div className="accordion">
            <div className="accordion__title">
              <div className="date">Ngày 4</div>
              <h3>Boostrap 4</h3>
            </div>
            <div className="content">
              I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers
              some tangible benefits over alternatives like VueJS for simple page interactions.
            </div>
          </div>
          <div className="accordion">
            <div className="accordion__title">
              <div className="date">Ngày 5</div>
              <h3>Thực hành dự án website Landing Page</h3>
            </div>
            <div className="content">
              I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers
              some tangible benefits over alternatives like VueJS for simple page interactions.
            </div>
          </div>
          <div className="accordion">
            <div className="accordion__title">
              <div className="date">Ngày 6</div>
              <h3>Cài đặt Grunt và cấu trúc thư mục dự án</h3>
            </div>
            <div className="content">
              I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers
              some tangible benefits over alternatives like VueJS for simple page interactions.
            </div>
          </div>
          <h3 className="title">yêu cầu cần có</h3>
          <div className="row row-check">
            <div className="col-md-6">Đã từng học qua HTML, CSS</div>
            <div className="col-md-6">Cài đặt phần mềm Photoshop,
              Adobe illustrator, Skype</div>
          </div>
          <h3 className="title">hình thức học</h3>
          <div className="row row-check">
            <div className="col-md-6">Học offline tại văn phòng, cùng Trần Nghĩa và 3 đồng nghiệp.</div>
            <div className="col-md-6">Dạy và thực hành thêm bài tập online
              thông qua Skype.</div>
            <div className="col-md-6">Được các mentor và các bạn trong team CFD hổ trợ thông qua group CFD Facebook
              hoặc phần mềm điều khiển máy tính.</div>
            <div className="col-md-6">Thực hành 2 dự án thực tế với sự hướng dẫn của CFD Team.</div>
          </div>
          <h3 className="title">
            <div className="date-start">lịch học</div>
            <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
          </h3>
          <p>
            <strong>Ngày bắt đầu: </strong> {data?.opening_time} <br />
            <strong>Thời gian học: </strong> {data?.schedule}
          </p>
          <h3 className="title">Người dạy</h3>
          <div className="teaches">
            <div className="teacher">
              <div className="avatar">
                <img src={data?.teacher?.avatar?.link} alt="" />
              </div>
              <div className="info">
                <div className="name">{data?.teacher?.title}</div>
                <div className="title">{data?.teacher?.position}</div>
                <p className="intro">
                  {data?.teacher?.description}
                </p>
                <p><strong>Website:</strong> <a href="#">http://nghiatran.info</a></p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="user">
              <img src="img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
            </div>
            <div className="btn main btn-register round">đăng ký</div>
            <div className="btn-share btn overlay round btn-icon">
              <img src="img/facebook.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Detail
