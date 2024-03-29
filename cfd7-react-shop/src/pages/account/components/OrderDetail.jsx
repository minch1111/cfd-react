import React from 'react'
import OrderDetailItem from './OrderDetailItem'

export default function OrderDetail() {
    let orderDetailList = [
        {
            name:"Cotton floral print Dress",
            price :"$40.00",
            size : "M",
            color:"Red",
            number:"1",
            img:"/img/products/product-6.jpg"
        },
        {
            name:"Suede cross body Bag",
            price :"$49.00",
            size : "",
            color:"Brow",
            number:"1",
            img:"/img/products/product-10.jpg"
        },
        {
            name:"Sweatshirt with Pocket",
            price :"$39.00",
            size : "L",
            color:"Pink",
            number:"2",
            img:"/img/products/product-48.jpg"
        },
    ]


    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Order */}
            <div className="card card-lg mb-5 border">
                <div className="card-body pb-0">
                    {/* Info */}
                    <div className="card card-sm">
                        <div className="card-body bg-light">
                            <div className="row">
                                <div className="col-6 col-lg-3">
                                    {/* Heading */}
                                    <h6 className="heading-xxxs text-muted">Order No:</h6>
                                    {/* Text */}
                                    <p className="mb-lg-0 font-size-sm font-weight-bold">
                                        673290789
                                    </p>
                                </div>
                                <div className="col-6 col-lg-3">
                                    {/* Heading */}
                                    <h6 className="heading-xxxs text-muted">Shipped date:</h6>
                                    {/* Text */}
                                    <p className="mb-lg-0 font-size-sm font-weight-bold">
                                        <time dateTime="2019-10-01">
                                            01 Oct, 2019
                                        </time>
                                    </p>
                                </div>
                                <div className="col-6 col-lg-3">
                                    {/* Heading */}
                                    <h6 className="heading-xxxs text-muted">Status:</h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm font-weight-bold">
                                        Awating Delivery
                                    </p>
                                </div>
                                <div className="col-6 col-lg-3">
                                    {/* Heading */}
                                    <h6 className="heading-xxxs text-muted">Order Amount:</h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm font-weight-bold">
                                        $259.00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    {/* Heading */}
                    <h6 className="mb-7">Order Items (3)</h6>
                    {/* Divider */}
                    <hr className="my-5" />
                    {/* List group */}
                    <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x">
                        {
                            orderDetailList.map((value,key)=>(
                                <OrderDetailItem 
                                    key={key}
                                    name ={value.name}
                                    price ={value.price}
                                    size ={value.size}
                                    color={value.color}
                                    img={value.img}
                                    number ={value.number}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
            {/* Total */}
            <div className="card card-lg mb-5 border">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">Order Total</h6>
                    {/* List group */}
                    <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                        <li className="list-group-item d-flex">
                            <span>Subtotal</span>
                            <span className="ml-auto">$128.00</span>
                        </li>
                        <li className="list-group-item d-flex">
                            <span>Tax</span>
                            <span className="ml-auto">$0.00</span>
                        </li>
                        <li className="list-group-item d-flex">
                            <span>Shipping</span>
                            <span className="ml-auto">$8.00</span>
                        </li>
                        <li className="list-group-item d-flex font-size-lg font-weight-bold">
                            <span>Total</span>
                            <span className="ml-auto">$136.00</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Details */}
            <div className="card card-lg border">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">Billing &amp; Shipping Details</h6>
                    {/* Content */}
                    <div className="row">
                        <div className="col-12 col-md-4">
                            {/* Heading */}
                            <p className="mb-4 font-weight-bold">
                                Billing Address:
                            </p>
                            <p className="mb-7 mb-md-0 text-gray-500">
                                Daniel Robinson, <br />
                                3997 Raccoon Run, <br />
                                Kingston, 45644, <br />
                                United States, <br />
                                6146389574
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                            {/* Heading */}
                            <p className="mb-4 font-weight-bold">
                                Shipping Address:
                            </p>
                            <p className="mb-7 mb-md-0 text-gray-500">
                                Daniel Robinson, <br />
                                3997 Raccoon Run, <br />
                                Kingston, 45644, <br />
                                United States, <br />
                                6146389574
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                            {/* Heading */}
                            <p className="mb-4 font-weight-bold">
                                Shipping Method:
                            </p>
                            <p className="mb-7 text-gray-500">
                                Standart Shipping <br />
                                (5 - 7 days)
                            </p>
                            {/* Heading */}
                            <p className="mb-4 font-weight-bold">
                                Payment Method:
                            </p>
                            <p className="mb-0 text-gray-500">
                                Debit Mastercard
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
