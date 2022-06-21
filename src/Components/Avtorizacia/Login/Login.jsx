import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'

const Login = () => {
  return (
    <div className='main__login'>
        <h1 className='login__text'>Wellcome</h1>
        <h5 className='login__text'>To Your Account </h5>
        <img src="" alt="" />
        <div className='login__inp'>
            <input type="text" placeholder='Enter login'/>
            <input type="password" placeholder='Enter password' />
            <button>LOG IN</button>
        <div><Link to='/registr'><h3>Want to registe</h3></Link></div>
        </div>
    </div>
  )
}

export default Login;