import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/Navbar.css'

 
const SignedOutLinks = () => {
  return (
    <div className="d-flex flex-row">
 
      <div className="right">
        <span><NavLink className="h6 mr-4 signStyles text-decoration-none text-white"  to='/signup'  
        activeStyle={{fontWeight: "600",color:"#fff",padding:"17px",borderBottom: '3px solid white'}}>Signup</NavLink></span>
        <span><NavLink className="h6 mx-5 signStyles  text-decoration-none text-white" to='/signin'  
        activeStyle={{fontWeight: "600",color:"#fff",padding:"17px", borderBottom: '3px solid white'}}>Login</NavLink></span>
      </div>
    </div>
  )
}

export default SignedOutLinks