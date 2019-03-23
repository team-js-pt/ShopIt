import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/Navbar.css'

 
const SignedOutLinks = () => {
//  const highlight=()=> {
//     var element = document.getElementsByTagName("span");
//     element.classList.add("highlight");
//   }
//  const myFunction=()=> {
//   var element = document.getElementById("focus");
//   element.classList.add("highlight");
//   console.log(element.classList);
// }
 
  return (
    <div className="d-flex flex-row">
      <div className="right">
        <span><NavLink className="h6 mr-4 signStyles text-white text-decoration-none"  to='/signup'>Signup</NavLink></span>
        <span><NavLink className="h6 mx-5 signStyles text-white text-decoration-none" to='/signin'>Login</NavLink></span>
      </div>
    </div>
  )
}

export default SignedOutLinks