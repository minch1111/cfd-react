import React from 'react'
import Offer from './components/offer'
import Payment from './components/payment'
import Return from './components/return'

function Pay() {
    return (
        <main className="paypage" id="main">
        <div className="container">
          <section>
            <h2 className="main-title">thanh toán</h2>
            <div className="content">
              <Payment />
              <Return />
              <Offer />
            </div>
          </section>
        </div>
      </main>
    )
}

export default Pay
