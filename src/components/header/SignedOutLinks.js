import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div className="d-flex flex-row">
      <div className="right">
        <span><NavLink className="h6 mx-3 textStyles text-white text-decoration-none" to='/signup'>Signup</NavLink></span>
        <span><NavLink className="h6 mx-3 textStyles text-white text-decoration-none" to='/signin'>Login</NavLink></span>
      </div>
    </div>
  )
}

export default SignedOutLinks