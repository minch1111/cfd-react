import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { SHOP_DETAIL } from '../../constants/path';
import { ADD_CART } from '../../store/type';

export default function Product({data}) {
    // let classBadge = status === "NEW" ? "badge-white" : status === "SALE" ? "badge-dark" : "";
    // let classImg = imgFirst === "" ? "" : "card-img-hover"
    const dispatch = useDispatch()
    const addCart =()=>{
        dispatch({
            type:ADD_CART,
            payload:data
        })
    }
    return (
        <div className="col-6 col-md-4 col-lg-3">
            {/* Card */}
            <div className="card mb-7">
                {/* Badge "badge badge-white card-badge card-badge-left text-uppercase" */}
                <div className={`badge card-badge card-badge-left text-uppercase`}>
                    
                </div>
                {/* Image */}
                <div className="card-img">
                    {/* Image  "card-img-hover"*/}
                    {/* {
                        classImg === "card-img-hover" ? (<Link className={classImg} to={SHOP_DETAIL}>
                            <img className="card-img-top card-img-back" src={imgFirst} alt="..." />
                            <img className="card-img-top card-img-front" src={imgSecond} alt="..." />
                        </Link>) : (
                            <Link to={SHOP_DETAIL}>
                                <img className="card-img-top card-img-front" src={imgSecond} alt="..." />
                            </Link>
                        )
                    } */}
                    <Link to={`/shop/${data?.id}`}>
                                <img className="card-img-top card-img-front" src={data?.thumbnail_url} alt="..." />
                            </Link>

                    {/* Actions */}
                    <div className="card-actions">
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                <i className="fe fe-eye" />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" onClick={addCart} data-toggle="button">
                                <i className="fe fe-shopping-cart"  />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-heart" />
                            </button>
                        </span>
                    </div>
                </div>
                {/* Body */}
                <div className="card-body px-0">
                    {/* Category */}
                    <div className="font-size-xs">
                        <a className="text-muted" href="shop.html"></a>
                    </div>
                    {/* Title */}
                    <div className="font-weight-bold">
                        <Link className="text-body" to={`/shop/${data?.id}`}>
                            {data?.name}
                        </Link>
                    </div>
                    {/* Price */}
                    {
                        !data?.real_price ? (
                            <div className="font-weight-bold text-muted">{data?.price}</div>) : (
                            <div className="font-weight-bold">
                                <span className="font-size-xs text-gray-350 text-decoration-line-through">{data?.price}</span>
                                <span className="text-primary">{data?.real_price}</span>
                            </div>)
                    }
                </div>
            </div>
        </div>

    )
}
