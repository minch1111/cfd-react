import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { HOME } from '../../constants/path'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

export default function Auth() {

    const {user}= useSelector(store=>store.auth)
    if(user) return <Redirect to={HOME} /> 
    return (
        <section className="py-12">
        <div className="container">
          <div className="row">
            <LoginForm />
            <RegisterForm />
          </div>
        </div>
      </section>
    )
}
