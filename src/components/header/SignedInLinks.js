import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import '../assets/css/Navbar.css'
const SignedInLinks = (props) => {
  return (
    <div className="d-flex flex-row">
      <div className="right">
        <span className="h6 mx-4 textStyles"><a onClick={props.signOut}>Log Out</a></span>
        <span ><NavLink to='/cart'className="h6 mx-4 textStyles" >cart<div className="count" style={{position:"absolute",top:'11px',right: 
        '140px'}}>{(props.ordered)?props.ordered.length:''}</div></NavLink></span>
        <span><NavLink to='/' className="btn rounded-circle lighten-1 btn-danger mx-4 textStyles p-2">
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
const mapStateToProps = (state) =>({
  cart:state.cart, profile: state.firebase.profile,
  ordered: state.firestore.ordered["/users/" + state.firebase.profile.userid + "/cart"]
})



export default compose(connect(mapStateToProps, mapDispatchToProps),
firestoreConnect((props, firebase) => [
  { collection: `/users/${props.profile.userid}/cart` },
  { collection: 'users', doc: props.profile.userid, subcollection: [{ collection: "cart", storeAs: 'carts' }] }
])
)(SignedInLinks)