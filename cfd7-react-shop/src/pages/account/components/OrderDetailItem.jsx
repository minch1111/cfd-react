import React from 'react'

export default function OrderDetailItem({name,size,price,color,img,number}) {
    return (
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-4 col-md-3 col-xl-2">
                    {/* Image */}
                    <a href="product.html"><img src={img} alt="..." className="img-fluid" /></a>
                </div>
                <div className="col">
                    {/* Title */}
                    <p className="mb-4 font-size-sm font-weight-bold">
                        <a className="text-body" href="product.html">{name} x {number}</a> <br />
                        <span className="text-muted"> {price} </span>
                    </p>
                    {/* Text */}
                    <div className="font-size-sm text-muted">
                        {
                            size&& (<span>Size: {size}</span>)
                        } 
                        <br />
                        Color: {color}
                    </div>
                </div>
            </div>
        </li>
    )
}
