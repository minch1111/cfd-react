import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/button'

export default function Banner({url,title,btnTitle}) {
    return (
        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={{ backgroundImage: `url(${url})` }}>
        <div className="card bg-dark-5 bg-hover text-white text-center" style={{ minHeight: '470px' }}>
          <div className="card-body mt-auto mb-n11 py-8">
            {/* Heading */}
            <h1 className="mb-0 font-weight-bolder">
              {title}
            </h1>
          </div>
          <div className="card-body mt-auto py-8">
            {/* Button */}
            <Button color="white" title={btnTitle}/>
            {/* <Link className="btn btn-white stretched-link" to="/shop">
              Shop {title} <i className="fe fe-arrow-right ml-2" />
            </Link> */}
          </div>
        </div>
      </div>
    )
}
