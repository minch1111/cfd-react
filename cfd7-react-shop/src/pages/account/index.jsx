import React from 'react'
import OrderList from './components/OrderList'
import OrderDetail from './components/OrderDetail'
import WishList from './components/WishList'
import UserInfo from './components/UserInfo'
import Address from './components/Address'
import AddressEdit from './components/AddressEdit'
import Payments from './components/Payment'
import PaymentEdit from './components/PaymentEdit'
import { NavLink,Switch,Route, Link } from 'react-router-dom'
import Button from '../../components/button'
import { Breadcrumb, BreadcrumbItem } from '../../components/Breadcrumb'
import { HOME } from '../../constants/path'
import { LOGOUT } from '../../store/type'
import { useDispatch } from 'react-redux'

export default function Account() {

    const dispatch = useDispatch()
    const logout =()=>{
        dispatch({type:LOGOUT})
    }

    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem to={HOME}>Home</BreadcrumbItem>
                <BreadcrumbItem to='#'>Account</BreadcrumbItem>
            </Breadcrumb>
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            {/* Heading */}
                            <h3 className="mb-10">My Account</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            {/* Nav */}
                            <nav className="mb-10 mb-md-0">
                                <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle" to="/account" exact>
                                        Orders
                                    </NavLink>
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle " to="/account/wish-list">
                                        Widhlist
                                    </NavLink>
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle " to="/account/personal-info">
                                        Personal Info
                                    </NavLink>
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle " to="/account/address">
                                        Addresses
                                    </NavLink>
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle " to="/account/payments">
                                        Payment Methods
                                    </NavLink>
                                    <Link className="list-group-item list-group-item-action dropright-toggle" to="#" onClick={(ev)=>{ev.preventDefault();logout()}} >
                                        Logout
                                    </Link>
                                </div>
                            </nav>
                        </div>
                        <Switch>
                            <Route path="/account" exact component={OrderList} />
                            <Route path="/account/order-detail" component={OrderDetail} />
                            <Route path="/account/wish-list" component={WishList} />
                            <Route path="/account/personal-info"  component={UserInfo} />
                            <Route path="/account/address" component={Address} />
                            <Route path="/account/address-edit" component={AddressEdit} />
                            <Route path="/account/payments" component={Payments} />
                            <Route path="/account/payment-edit" component={PaymentEdit} />
                        </Switch>
                       
                    </div>
                </div>
            </section>
        </>
    )
}
