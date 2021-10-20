import React from 'react'
import Introduce from './components/introduce'
import Introduced from './components/introduced'
import Overview from './components/overview'

function IntroduceCoin() {
    return (
        <main className="paypage" id="main">
        <div className="container">
          <section>
            <h2 className="main-title">Giới thiệu Coin</h2>
            <div className="content">
              <Overview />
              <Introduce />
              <Introduced />
            </div>
          </section>
        </div>
      </main>
    )
}

export default IntroduceCoin
