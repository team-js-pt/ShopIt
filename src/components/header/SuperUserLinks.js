import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import '../assets/css/Navbar.css'
const SuperUserLinks = (props) => {
  return (
    <div className="d-flex flex-row">
      <div className="right">
      <span><Link className=" mx-3  text-white text-decoration-none addProductText" to='/addproduct'>Add Product</Link></span>
        <span className=" mx-4 signStyles"><a onClick={props.signOut}>Log Out</a></span>
        <span><NavLink to='/' className="btn rounded-circle  btn-danger mx-4 textStyles ">
          {props.profile.initials}
        </NavLink></span>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SuperUserLinks)