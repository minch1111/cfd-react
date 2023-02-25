import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SHOP } from '../../../constants/path'
import productServices from '../../../service/productServices'

export default function NavShop() {

    let [data, setData] = useState()

    useEffect(async () => {
        let res = await productServices.category()
        setData(res)
    }, [])
    return (
        <div className="col-12 col-md-4 col-lg-3">
            {/* Filters */}
            <form className="mb-10 mb-md-0">
                <ul className="nav nav-vertical" id="filterNav">
                    <li className="nav-item">
                        {/* Toggle */}
                        <div className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" >
                            Category
                        </div>
                        {/* Collapse */}
                        <div className="collapse show" id="categoryCollapse">
                            <div className="form-group">
                                <ul className="list-styled mb-0" id="productsNav">
                                    {
                                        data?.map((o,i) => (
                                            <li className="list-styled-item" key={i}>
                                                <Link className="list-styled-link" to="#">
                                                    {o?.title}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    )
}
