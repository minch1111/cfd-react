import { data } from 'flickity'
import React, { useEffect, useState } from 'react'
import { BannerHome, TopSellersHome } from '../../constants/mockData'
import productServices from '../../service/productServices'
import BannerShop from '../shop/components/BannerShop'
import Banner from './components/Banner'
import BestPick from './components/BestPick'
import Brands from './components/Brands'
import Countdown from './components/Countdown'
import Promotions from './components/Promotions'
import Reviews from './components/Reviews'
import TopSellers from './components/TopSellers'

export default function Home() {
  
  let [state,setState]= useState({
    data:{},
    loading:true
  })

  useEffect( async() => {
    
    let data = await productServices.productList()
    setState({
      loading:false,
      data
    })
  }, [])
  if(data) console.log(`data`,state.data)

  return (
    <>
      <div className="py-3 bg-dark bg-pattern mb-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Text */}
              <div className="text-center text-white">
                <span className="heading-xxs letter-spacing-xl">
                  ⚡️ Happy Holiday Deals on Everything ⚡️
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <section>
        <div className="row no-gutters d-block d-lg-flex flickity flickity-lg-none" data-flickity="{&quot;watchCSS&quot;: true}">

           {
             BannerHome.map((value,key)=>(
               <Banner 
               key={key}
               url ={value.url}
               title={value.title}
               btnTitle={value.btnTitle}
               />
             ))
           }
        </div>
      </section>
      {/* FEATURES */}
      <Promotions />
      {/* BEST PICKS */}
      <BestPick />
      {/* TOP SELLERS */}
      <TopSellers 
      topSellers ={TopSellersHome}
      />
      {/* COUNTDOWN */}
      <Countdown />
      {/* REVIEWS */}
      <Reviews />
      {/* BRANDS */}
      <Brands/>
    </>
  )
}
