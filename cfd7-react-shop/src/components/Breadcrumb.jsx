import React from 'react'
import { Link } from 'react-router-dom'

export function Breadcrumb({children}) {
    return (
        <nav className="my-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Breadcrumb */}
                        <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                            {
                                React.Children.map(children,(child,index)=>{
                                    return <li className="breadcrumb-item"> {child} </li>
                                })
                            }
                            
                            {/* <li className="breadcrumb-item">
                                <a className="text-gray-400" href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">
                                About Us
                            </li> */}
                        </ol>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export const BreadcrumbItem =({children,to})=>{
    return <Link to={to}> {children} </Link>
}