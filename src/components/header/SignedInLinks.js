import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import '../assets/css/Navbar.css'
const SignedInLinks = (props) => {
  return (
    <div className="d-flex flex-row align-items-center">
       <div className="categoriesContainer ">
           <div className="dropdown mx-3 " >
            <button className="  profileDropdown CategoriesNav  dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
            </button>
            <div className="dropdown-menu items" aria-labelledby="dropdownMenuButton " style={{borderRadius:'3px'}}>
              <Link to='/Vegetables' className="dropdown-item items" >Vegetables</Link><hr className="m-0 p-0 " />
              <Link to='/Footwear' className="dropdown-item items" >Footwear</Link><hr className="m-0 p-0 " />
              <Link to='/Sports' className="dropdown-item items" >Sports</Link><hr className="m-0 p-0 " />
              <Link to='/Mobiles' className="dropdown-item items" >Mobiles</Link><hr className="m-0 p-0 " />
              <Link to='/Beauty' className="dropdown-item items" >Beauty</Link><hr className="m-0 p-0 " />
              <Link to='/Appliances' className="dropdown-item items" >Appliances</Link><hr className="m-0 p-0 " />
              <Link to='/Clothing' className="dropdown-item items" >Clothing</Link>
            </div>
        </div>
      </div>
      <div className="right d-flex flex-row">
        <div className="d-flex flex-row"><NavLink to='/cart'className=" mx-4 cart pt-2 d-flex flex-row" >
         <div className="icon-shopping-cart ml-4"></div>
          <div className="count  px-1" style={{position:"absolute",top:'10px',right:'180px'}}>{(props.ordered)?props.ordered.length:''}</div></NavLink></div>
          <div className="dropdown mx-3 " >
          <button className="btn  profileDropdown dropdownDiv" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <NavLink to='/' className="btn rounded-circle    bg-light loginRound ">
          {props.profile.initials}
            </NavLink>
          </button>
          <div className="dropdown-menu dropdownDiv" aria-labelledby="dropdownMenuButton " style={{borderRadius:'3px'}}>
            <Link to='/Profiles' className="dropdown-item loginRoundOptions">Profile</Link><hr className="m-0 p-0 " />
            <Link to='/Orders' className="dropdown-item loginRoundOptions"  >Orders</Link><hr className="m-0 p-0" />
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