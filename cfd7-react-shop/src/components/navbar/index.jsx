import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Nav() {


    const {listProduct} = useSelector(store=>store.cart)

    let numCart = listProduct.length

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                <div className="container">
                    {/* Brand */}
                    <Link className="navbar-brand" to="/">
                        Shopper.
                    </Link>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        {/* Nav */}
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <Link className="nav-link" data-toggle="dropdown" to="/">Home</Link>
                                {/* Menu */}
                                <div className="dropdown-menu">
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <ul className="list-styled font-size-sm">
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="/">Default</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-classic.html">Classic</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-fashion.html">Fashion</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-boxed.html">Boxed</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-simple.html">Simple</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-asymmetric.html">Asymmetric</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-sidenav.html">Sidenav</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-landing.html">Landing</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown position-static">
                                {/* Toggle */}
                                <a className="nav-link" data-toggle="dropdown" href="#">Catalog</a>
                                {/* Menu */}
                                <div className="dropdown-menu w-100">
                                    {/* Tabs */}
                                    <form className="mb-2 mb-lg-0 border-bottom-lg">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12">
                                                    {/* Nav */}
                                                    <nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0">
                                                        <a className="nav-link text-uppercase active" data-toggle="tab" href="#navTab">
                                                            Women
                                                        </a>
                                                        <a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
                                                            Men
                                                        </a>
                                                        <a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
                                                            Kids
                                                        </a>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    {/* Tab content */}
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <div className="tab-content">
                                                <div className="tab-pane fade show active" id="navTab">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-6 col-md">
                                                                {/* Heading */}
                                                                <div className="mb-5 font-weight-bold">Clothing</div>
                                                                {/* Links */}
                                                                <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">All Clothing</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Blouses &amp; Shirts</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Coats &amp; Jackets</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Dresses</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Hoodies &amp; Sweats</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Denim</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Jeans</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Jumpers &amp; Cardigans</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Leggings</Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-6 col-md">
                                                                {/* Heading */}
                                                                <div className="mb-5 font-weight-bold">Shoes &amp; Boots</div>
                                                                {/* Links */}
                                                                <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">All Shoes &amp; Boots</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Branded Shoes</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Boots</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Heels</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Trainers</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Sandals</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Shoes</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Wide Fit Shoes</Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-6 col-md">
                                                                {/* Heading */}
                                                                <div className="mb-5 font-weight-bold">Bags &amp; Accessories</div>
                                                                {/* Links */}
                                                                <ul className="list-styled mb-0 font-size-sm">
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">All Bags &amp; Accessories</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Accessories</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Bags &amp; Purses</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Luggage</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Belts</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Hats</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Hair Accessories</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Jewellery</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Travel Accessories</Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-6 col-md">
                                                                {/* Heading */}
                                                                <div className="mb-5 font-weight-bold">Collections</div>
                                                                {/* Links */}
                                                                <ul className="list-styled mb-0 font-size-sm">
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">All Collections</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Occasionwear</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Going Out</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Workwear</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Holiday Shop</Link>
                                                                    </li>
                                                                    <li className="list-styled-item">
                                                                        <Link className="list-styled-link" to="/shop">Jean Fit Guide</Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-4 d-none d-lg-block">
                                                                {/* Card */}
                                                                <div className="card">
                                                                    {/* Image */}
                                                                    <img className="card-img" src="/img/products/product-110.jpg" alt="..." />
                                                                    {/* Overlay */}
                                                                    <div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
                                                                        <div className="text-center">
                                                                            <Link className="btn btn-white stretched-link" to="/shop">
                                                                                Shop Sweaters <i className="fe fe-arrow-right ml-2" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link" data-toggle="dropdown" href="#">Shop</a>
                                {/* Menu */}
                                <div className="dropdown-menu" style={{ minWidth: '650px' }}>
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">Shop</div>
                                                    {/* Links */}
                                                    <ul className="list-styled mb-7 font-size-sm">
                                                        <li className="list-styled-item">
                                                            <Link className="list-styled-link" to="/shop">Default</Link>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <Link className="list-styled-link" to="/shop">Topbar</Link>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <Link className="list-styled-link" to="/shop">Collapse</Link>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <Link className="list-styled-link" to="/shop">Simple</Link>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <Link className="list-styled-link" to="/shop">Masonry</Link>
                                                        </li>
                                                    </ul>
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">Product</div>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-sm">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./product.html">Default</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./product-images-left.html">Images Left</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./product-image-grid.html">Image Grid</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./product-image-slider.html">Image Slider</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./product-images-stacked.html">Images Stacked</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">Support</div>
                                                    {/* Links */}
                                                    <ul className="list-styled mb-7 font-size-sm">
                                                        <li className="list-styled-item">
                                                            <Link className="list-styled-link" to="/shopping-cart">Shopping Cart</Link>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <Link className="list-styled-link" to="/shopping-cart/check-out">Checkout</Link>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <Link className="list-styled-link" to="/order-completed">Order Completed</Link>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <Link className="list-styled-link" to="/shipping-and-return">Shipping &amp; Returns</Link>
                                                        </li>
                                                    </ul>
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">Account</div>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-sm">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-order.html">Order</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-orders.html">Orders</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-wishlist.html">Wishlist</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-personal-info.html">Personal Info</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-address.html">Addresses</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-address-edit.html">Addresses: New</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    {/* Links */}
                                                    <ul className="list-styled mb-7 font-size-sm">
                                                        <li className="list-styled-item">
                                                            <Link className="list-styled-link" to="./account">Payment</Link>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <Link className="list-styled-link" to="./account">Payment: New</Link>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <Link className="list-styled-link" to="./account">Payment: Choose</Link>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <Link className="list-styled-link" to="/login-and-register">Auth</Link>
                                                        </li>
                                                    </ul>
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">Modals</div>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-sm">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterHorizontal">
                                                                Newsletter: Horizontal
                                                            </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterVertical">
                                                                Newsletter: Vertical
                                                            </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalProduct">
                                                                Product
                                                            </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalSearch">
                                                                Search
                                                            </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalShoppingCart">
                                                                Shopping Cart
                                                            </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalSizeChart">
                                                                Size Chart
                                                            </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalWaitList">
                                                                Wait List
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link" data-toggle="dropdown" href="#">Pages</a>
                                {/* Menu */}
                                <div className="dropdown-menu">
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <ul className="list-styled font-size-sm">
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="/about-us">About</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="/contact-us">Contact Us</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="/contact-us/store-locator">Store Locator</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="/faq">FAQ</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="/">Coming Soon</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./404.html">404</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <Link className="nav-link" data-toggle="dropdown" to="/blog">Blog</Link>
                                {/* Menu */}
                                <div className="dropdown-menu">
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <ul className="list-styled font-size-sm">
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="/blog">Blog</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="/blog/blog-post">Blog Post</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="docs/getting-started.html">Docs</a>
                            </li>
                        </ul>
                        {/* Nav */}
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="modal" href="#modalSearch">
                                    <i className="fe fe-search" />
                                </a>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <Link className="nav-link" to="/account">
                                    <i className="fe fe-user" />
                                </Link>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <Link className="nav-link" to="/account">
                                    <i className="fe fe-heart" />
                                </Link>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
                                    <span data-cart-items={numCart}>
                                        <i className="fe fe-shopping-cart" />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Nav
