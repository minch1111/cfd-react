import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '../../components/Breadcrumb'
import { CONTACT_US, HOME } from '../../constants/path'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'

export default function Contact() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem to={HOME}>Home</BreadcrumbItem>
          <BreadcrumbItem to={CONTACT_US} >Contact us</BreadcrumbItem>
        </Breadcrumb>
        <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Heading */}
              <h3 className="mb-10 text-center">Contact Us</h3>
            </div>
          </div>
          <div className="row justify-content-between">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      </div>
    )
}
