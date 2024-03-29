import React from 'react'

export default function AddressItem({title}) {
    return (
        <div className="col-12 col-lg-6">
            {/* Card */}
            <div className="card card-lg bg-light mb-8">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-6">
                        {title}
                    </h6>
                    {/* Text */}
                    <p className="text-muted mb-0">
                        Daniel Robinson <br />
                        3997 Raccoon Run <br />
                        Kingston <br />
                        45644 <br />
                        United States <br />
                        6146389574
                    </p>
                    {/* Action */}
                    <div className="card-action card-action-right">
                        {/* Button */}
                        <a className="btn btn-xs btn-circle btn-white-primary" href="account-address-edit.html">
                            <i className="fe fe-edit-2" />
                        </a>
                        {/* Button */}
                        <button className="btn btn-xs btn-circle btn-white-primary">
                            <i className="fe fe-x" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
