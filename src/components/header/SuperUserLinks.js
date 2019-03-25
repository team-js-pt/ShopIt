import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import '../assets/css/Navbar.css'
const SuperUserLinks = (props) => {
  return (
    <div className="d-flex flex-row">
      <div className="right d-flex flex-row align-items-center">
      <span><Link className="   text-white text-decoration-none addProductText" to='/addproduct'>Add Product</Link></span>
      <div className="dropdown mx-3 " >
          <button className="btn  profileDropdown dropdownDiv" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <NavLink to='/' className="btn rounded-circle    bg-light loginRound ">
          {props.profile.initials}
            </NavLink>
          </button>
          <div className="dropdown-menu dropdownDiv" aria-labelledby="dropdownMenuButton " style={{borderRadius:'3px'}}>
            <a className="dropdown-item loginRoundOptions" href="#">Profile</a><hr className="m-0 p-0 " />
            <a className="dropdown-item loginRoundOptions" href="#">Orders</a><hr className="m-0 p-0" />
            <a className="dropdown-item loginRoundOptions" href="#" onClick={props.signOut}>Log out</a>
          </div>
        </div>
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