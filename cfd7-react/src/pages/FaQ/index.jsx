import React from 'react'
import Accordion from './components/accordion'

function FaQ() {
    return (
        <main className="faqpage" id="main">
        <div className="container">
          <section>
            <h2 className="main-title">Câu hỏi thường gặp</h2>
            <div className="row">
              <Accordion
              
              maintitle ="THÔNG TIN CHUNG"/>
              <Accordion 
              
              maintitle ="ĐĂNG KÍ, THANH TOÁN VÀ ĐIỂM THƯỞNG"/>
            </div>
          </section>
        </div>
      </main>
    )
}

export default FaQ
