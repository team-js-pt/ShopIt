import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/Navbar.css'

 
const SignedOutLinks = () => {
  return (
    <div className="d-flex flex-row">
      <div className="right">
        <span><NavLink className="h6 mr-4 signStyles text-decoration-none"  to='/signup'  
        activeStyle={{fontWeight: "bold",color:"#fff",padding:"10px",borderBottom: '3px solid white'}}>Signup</NavLink></span>
        <span><NavLink className="h6 mx-5 signStyles  text-decoration-none" to='/signin'  
        activeStyle={{fontWeight: "bold",color:"#fff",padding:"10px", borderBottom: '3px solid white'}}>Login</NavLink></span>
      </div>
    </div>
  )
}

export default SignedOutLinks