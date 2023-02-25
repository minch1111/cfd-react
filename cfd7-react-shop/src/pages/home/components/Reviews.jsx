import Flickity from 'react-flickity-component'
import React from 'react'
import { ReviewHome } from '../../../constants/mockData'

export default function Reviews() {
    const flickityOptions = {
        initialIndex: 1,
        wrapAround: true,
        freeScroll: true,
    }
    return (
        <section className="py-12">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
                        {/* Preheading */}
                        <h6 className="heading-xxs mb-3 text-gray-400">
                            What buyers say
                        </h6>
                        {/* Heading */}
                        <h2 className="mb-10">Latest buyers Reviews</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* Slider */}
                        {/* <div data-flickity="{&quot;pageDots&quot;: true}">
                            
                        </div> */}
                        <Flickity
                            options={flickityOptions}
                        >
                            {
                                ReviewHome.map((o, i) => (
                                    <div className="col-12 col-sm-8 col-md-6 col-lg-4" key={i}>
                                        {/* Card */}
                                        <div className="card-lg card border">
                                            <div className="card-body">
                                                {/* Header */}
                                                <div className="row align-items-center mb-6">
                                                    <div className="col-4">
                                                        {/* Image */}
                                                        <img src={o.img} alt="..." className="img-fluid" />
                                                    </div>
                                                    <div className="col-8 ml-n2">
                                                        {/* Preheading */}
                                                        <a className="font-size-xs text-muted" href="shop.html">
                                                            {o.type}
                                                        </a>
                                                        {/* Heading */}
                                                        <a className="d-block font-weight-bold text-body" href="product.html">
                                                            {o.productName}
                                                        </a>
                                                        {/* Rating */}
                                                        <div className="rating font-size-xxs text-warning" data-value={o.star}>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Blockquote */}
                                                <blockquote className="mb-0">
                                                    <p className="text-muted">
                                                       {o.comment}
                                                    </p>
                                                    <footer className="font-size-xs text-muted">
                                                        {o.name}, <time dateTime="2019-06-01">{o.date}</time>
                                                    </footer>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Flickity>
                    </div>
                </div>
            </div>
        </section>
    )
}
