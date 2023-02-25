import React from 'react'
import { useForm } from '../../../core'

export default function ContactForm() {

    const { form, error, register, handleSubmit } = useForm()

    const submit = () => {
        alert("đã gửi thành công")
    }
    console.log(`error`, error)
    return (
        <div className="col-12 col-md-8">
            {/* Form */}
            <form onSubmit={handleSubmit(submit)}>
                {/* Email */}
                <div className="form-group">
                    <label className="sr-only" htmlFor="contactName">
                        Your Name *
                    </label>
                    <input className="form-control form-control-sm" id="contactName" placeholder="Your Name *" {...register('name', { required: true })} />
                    {
                        error.name && <small className="text-danger">{error.name}</small>
                    }
                </div>
                {/* Email */}
                <div className="form-group">
                    <label className="sr-only" htmlFor="contactEmail">
                        Your Email *
                    </label>
                    <input className="form-control form-control-sm" id="contactEmail" placeholder="Your Email *" {...register('email', { required: true,pattern:'email' })} />
                    {
                        error.email && <small className="text-danger">{error.email}</small>
                    }
                </div>
                {/* Email */}
                <div className="form-group">
                    <label className="sr-only" htmlFor="contactTitle">
                        Title *
                    </label>
                    <input className="form-control form-control-sm" id="contactTitle" placeholder="Title *" {...register('title', { required: true })} />
                    {
                        error.title && <small className="text-danger">{error.title}</small>
                    }
                </div>
                {/* Email */}
                <div className="form-group mb-7">
                    <label className="sr-only" htmlFor="contactMessage">
                        Message *
                    </label>
                    <textarea className="form-control form-control-sm" id="contactMessage" rows={5} placeholder="Message *" defaultValue={""} {...register('message', { required: true })} />
                    {
                        error.message && <small className="text-danger">{error.message}</small>
                    }
                </div>
                {/* Button */}
                <button className="btn btn-dark">
                    Send Message
                </button>
            </form>
        </div>
    )
}
