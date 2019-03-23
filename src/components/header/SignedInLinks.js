import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import '../assets/css/Navbar.css'
const SignedInLinks = (props) => {
   var i= props.cart;
  return (
    <div className="d-flex flex-row">
      <div className="right">
        <span className="h6 mx-4 textStyles"><a onClick={props.signOut}>Log Out</a></span>
        <span><NavLink to='/' className="btn rounded-circle lighten-1 btn-danger mx-4 textStyles p-2">
          {props.profile.initials}
        </NavLink></span>
          <li className="cartelement"><NavLink to='/cart'>cart<div className="count">{i}</div></NavLink></li>
      </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
const mapStateToProps = (state) =>({
  cart:state.cart.cart
})

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)