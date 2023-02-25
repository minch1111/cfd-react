import React from 'react'
import { Link } from 'react-router-dom'
import PaymentItem from './PaymentItem'

export default function Payments() {
    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            <div className="row">
                <div className="col-12 col-lg-6">
                    {/* Card */}
                   <PaymentItem />
                </div>
                <div className="col-12">
                    {/* Button */}
                    <Link className="btn btn-block btn-lg btn-outline-border" to="/account/payment-edit">
                        Add Payment Method <i className="fe fe-plus" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
