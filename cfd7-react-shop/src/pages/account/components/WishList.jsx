import React from 'react'
import WishListItem from './WishListItem'

export default function WishList() {
    let wishList =[
        {
            name:"Cotton floral print Dress",
            price:"$40.00",
            newPrice:"",
            status:"",
            img:"/img/products/product-6.jpg"
        },
        {
            name:"Suede cross body Bag",
            price:"$85.00",
            newPrice:"$49.00",
            status:"SALE",
            img:"/img/products/product-10.jpg"
        },
        {
            name:"Cotton leaf print Shirt",
            price:"$65.00",
            newPrice:"",
            status:"",
            img:"/img/products/product-32.jpg"
        },
        {
            name:"Leather Sneakers",
            price:"Select Options",
            newPrice:"",
            status:"",
            img:"/img/products/product-7.jpg"
        },
        {
            name:"Another fine dress",
            price:"$99.00",
            newPrice:"",
            status:"",
            img:"/img/products/product-11.jpg"
        },
    ]


    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Products */}
            <div className="row">
                {
                    wishList.map((value,key)=>(
                        <WishListItem 
                            key={key}
                            name ={value.name}
                            price ={value.price}
                            newPrice ={value.newPrice}
                            status ={value.status}
                            img = {value.img}
                        />
                    ))
                }
            </div>
            {/* Pagination */}
            <nav className="d-flex justify-content-center justify-content-md-end">
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
