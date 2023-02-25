import React from 'react'
import { Link } from 'react-router-dom'
import AddressItem from './AddressItem'

export default function Address() {
    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            <div className="row">
                <AddressItem  title={"Shipping address"}/>
                <AddressItem  title={"Billing address"}/>
                <div className="col-12">
                    {/* Button */}
                    <Link className="btn btn-block btn-lg btn-outline-border" to="/account/address-edit">
                        Add Address <i className="fe fe-plus" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
