import React, { useEffect, useState } from 'react'
import { Breadcrumb, BreadcrumbItem } from '../../components/Breadcrumb'
import BannerShop from './components/BannerShop'
import NavShop from './components/NavShop'
import ProductsShop from './components/ProductsShop'
import Tags from './components/Tags'
import { HOME } from "../../constants/path"
import Pagination from '../../components/Pagination'
import { useRouteMatch } from 'react-router'
import { convertQueryToObject } from '../../utils'
import { ProductListShop } from '../../constants/mockData'
import "../../assets/css/custom.css"
import productServices from '../../service/productServices'

export default function Shop() {

  let queryURL = convertQueryToObject()
  
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
      <section className="py-11">
        <div className="container">
          <div className="row">
            <NavShop />
            <div className="col-12 col-md-8 col-lg-9">
              <BannerShop />

              {/* Header */}
              <div div className="row align-items-center mb-7" >
                <div className="col-12 col-md">
                  {/* Heading */}
                  <h3 className="mb-1">Womens' Clothing</h3>
                  {/* Breadcrumb */}
                  <Breadcrumb >
                    <BreadcrumbItem to={HOME}>Home</BreadcrumbItem>
                    <BreadcrumbItem to="#">Women's Clothing</BreadcrumbItem>
                  </Breadcrumb>
                  {/* <ol className="breadcrumb mb-md-0 font-size-xs text-gray-400">
                    <li className="breadcrumb-item">
                      <a className="text-gray-400" href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      Women's Clothing
                    </li>
                  </ol> */}
                </div>
                <div className="col-12 col-md-auto">
                  {/* Select */}
                  <select className="custom-select custom-select-xs">
                    <option selected>Most popular</option>
                  </select>
                </div>
              </div >
              {/* Tags */}
              <Tags />
              {/* Products */}
              <ProductsShop products={ProductListShop} />
              {/* Pagination */}
              <Pagination totalPage={10} currentPage={parseInt(queryURL.page) || 1} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
