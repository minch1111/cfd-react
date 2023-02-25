import React from 'react'
import { Link } from 'react-router-dom'
import OrderListItem from './OrderListItem'

export default function OrderList() {
    let orderList = [
        {
            id :"673290789",
            shippedDate:"01 Oct, 2019",
            status: "Awaiting Delivery",
            amount:"$259.00",
            imageList:["/img/products/product-5.jpg","/img/products/product-112.jpg","/img/products/product-7.jpg"]
        },
        {
            id :"871090437",
            shippedDate:"25 Sep, 2019",
            status: "In Proccessing",
            amount:"$75.00",
            imageList:["/img/products/product-11.jpg"]
        },
        {
            id :"891230563",
            shippedDate:"07 Sep, 2019",
            status: "Delivered",
            amount:"$69.00",
            imageList:["/img/products/product-14.jpg","/img/products/product-15.jpg"]
        },


    ]



    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Order */}
            {
                orderList.map((value,key)=>(
                    <OrderListItem 
                        key={key}
                        orderNo = {value.id}
                        shippedDate = {value.shippedDate}
                        status ={value.status}
                        amount ={value.amount}
                        imageList={value.imageList}
                    />
                ))
            }
            
            {/* Pagination */}
            <nav className="d-flex justify-content-center justify-content-md-end mt-10">
                <ul className="pagination pagination-sm text-gray-400">
                    <li className="page-item">
                        <a className="page-link page-link-arrow" href="#">
                            <i className="fa fa-caret-left" />
                        </a>
                    </li>
                    <li className="page-item active">
                        <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">4</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">5</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">6</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link page-link-arrow" href="#">
                            <i className="fa fa-caret-right" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
