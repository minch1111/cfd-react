import React from 'react'

export default function WishListItem({ name, price, newPrice, status, img }) {
    return (
        <div className="col-6 col-md-4">
            <div className="card mb-7">
                {/* Image */}
                <div className="card-img">
                    {/* Action */}
                    <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
                        <i className="fe fe-x" />
                    </button>
                    {
                        status && (
                        <span className="badge badge-dark card-badge card-badge-left text-uppercase">
                            {status}
                        </span>)
                    }
                    {/* Button */}
                    <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
                        <i className="fe fe-eye mr-2 mb-1" /> Quick View
                    </button>
                    {/* Image */}
                    <img className="card-img-top" src={img} alt="..." />
                </div>
                {/* Body */}
                <div className="card-body font-weight-bold text-center">
                    <a className="text-body" href="product.html"> {name} </a> <br />
                    {
                        price==="Select Options"?
                        (<a className="text-primary" href="#">Select Options</a>):
                        newPrice?(
                            <span>
                                <span className="font-size-xs text-gray-350 text-decoration-line-through">{price}</span>
                                <span className="text-primary">{newPrice}</span>
                            </span>
                        ):( <span className="text-muted"> {price}    </span>)
                    }
                   
                </div>
            </div>
        </div>
    )
}
