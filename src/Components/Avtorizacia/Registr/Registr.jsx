import React from 'react'
import { Link } from 'react-router-dom'
import './Registr.scss'

const Registr = () => {
  return (
    <div className='main__register'>
        <h1 className='registr__text'>Register</h1>
        <h5 className='registr__text'>Create an account</h5>
        <div className='registr__inp'>
            <input type="text"  placeholder='Full Name'/>
            <input type="text" placeholder='User ID'/>
            <input type="text" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input type="password" placeholder=' Confirm Password'/>
            <button>SIGN IN</button>
        <div><Link to='/login'><h3>To come in</h3></Link></div>
        </div>
    </div>
  )
}

export default Registr;