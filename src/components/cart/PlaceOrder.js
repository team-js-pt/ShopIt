import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../assets/css/PlaceOrder.css'
import {addProfile} from '../../store/actions/profileActions'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

 class PlaceOrder extends Component {
     
  render() {
    console.log(this.props.user)
    // if(this.props.user){
    //     let {firstName,lastName,email,phNumber} = this.props.user[0]
    return (
      <div className="container-fluid d-flex flex-sm-column flex-lg-row flex-md-column my-4 align-self-center justify-content-center">
          <div className="col-lg-8 col-sm-12   border-left border-right bg-white">
            <p className="h4 Heading pt-3 mb-2 text-left pl-3">Select Delivery Address</p>
            <div className="mt-3 pt-2 row">
                <div className="container  d-flex flex-row">
                    <span className="col-5"><img src={require("../assets/images/e.jpeg")} className="profileImg "></img></span>
                    {/* <div className="d-flex flex-column col-6 text-left pt-4">
                        {(this.props.address)?
                        <><p className="pName">{this.props.address[0].firstName}</p>
                        <p className="pName pMail">{this.props.address[0].email}</p>
                        <p className="pNum">
                        Mobile : {this.props.address.phNumber}
                        </p></>:''
                        }
                    </div> */}
            </div>
            </div>
           <p className="addressText ml-5 px-2 col-6  mt-2 pb-4 ">Address</p>
           <form className="col-12 d-flex flex-column mt-3 py-2 ml-5 px-2">
                <label className="AddressLabel ">Primary Address</label>
                <textarea placeholder="Street Location" className="addressArea col-6 border-top-0 border-left-0 border-right-0  "required ></textarea>
                <label className="AddressLabel mt-2">Secondary Address</label>
                <textarea placeholder="Street Location" className="addressArea col-6 border-top-0 border-left-0 border-right-0  "></textarea>
                <div className="d-flex flex-row mt-2">
                    <div className="d-flex flex-column mr-5">
                        <label className="AddressLabel">State</label>
                        <input placeholder="Enter your state" className=" addressArea border-top-0 border-left-0 border-right-0 AddressInputs pt-2" required/>
                         <label className="AddressLabel mt-3">Pincode</label>
                        <input placeholder="Enter pincode" className=" addressArea border-top-0 border-left-0 border-right-0 AddressInputs pt-2" required/>
                    </div>
                    <div className="d-flex flex-column ml-5">
                        <label className="AddressLabel">City</label>
                        <input placeholder="Enter your city" className=" addressArea border-top-0 border-left-0 border-right-0 AddressInputs pt-2" required/>
                    </div>
                </div>
                   
           
           <p className="h4 Heading pt-3 mb-3 text-left">Payment Method</p>
           <div className="d-flex flex-row">
           <label className="RadioContainer AddressLabel">PayTm
                <input type="radio"  name="radio"/>
                <span className="checkmark"></span>
            </label>
            <label className="RadioContainer AddressLabel mr-3">COD
            <input type="radio" checked="checked" name="radio"/>
            <span className="checkmark"></span>
            </label>
           </div>
           <button className="ChangeBtn col-lg-2 col-sm-2 text-center mr-5">Change</button>
           </form>
      </div>
      <div className="col-lg-3 col-sm-12   bg-white">
        <div className="overlayContainer justify-content-center ">
            <div className="d-flex flex-row justify-content-between mt-4 pt-3">
                <p className="MyCart pl-3">My Cart</p>
                <p className="ClearCart align-self-center pr-3 ">Clear Cart</p>
            </div>
            <div className="CartItemContainer container mt-4">
                <div className="CartItem   card mt-4 pt-4">
                        <div className="row no-gutters justify-content-between">
                            <div className="col-4 ">
                                <img src={require("../assets/images/mobilelogo.jpeg")} className="card-img col-12" alt="#"/>
                            </div>  
                            <div className="col-4">
                            <p class="card-text">This is a wider card with supporting text below as. </p>
                            </div>
                            <div className="col-4">
                            <p className="card-text">This is a wider card with supporting text below as.</p>
                            </div>
                        </div>
                </div>
                <div className="CartItem   card mt-4 pt-2">
                        <div className="row no-gutters justify-content-between">
                            <div className="col-4">
                                <img src={require("../assets/images/mobilelogo.jpeg")} className="card-img col-12" alt="#"/>
                            </div>  
                            <div className="col-4">
                            <p className="card-text">This is a wider card with supporting text below as. </p>
                            </div>
                            <div className="col-4">
                            <p className="card-text">This is a wider card with supporting text below as.</p>
                            </div>
                        </div>
                </div>
                <div className="CartItem   card mt-4 pt-2">
                        <div className="row no-gutters justify-content-between">
                            <div className="col-4">
                                <img src={require("../assets/images/mobilelogo.jpeg")} className="card-img col-12" alt="#"/>
                            </div>  
                            <div className="col-4">
                            <p class="card-text">This is a wider card with supporting text below as. </p>
                            </div>
                            <div className="col-4">
                            <p className="card-text">This is a wider card with supporting text below as.</p>
                            </div>
                        </div>
                </div>

            </div>
            <div className="d-flex justify-content-center"><button className="PlaceOrderBtn col-lg-5 col-sm-6 col-md-2 text-center   my-5">Place Order</button></div>
        </div>
        
    </div>
</div>
      
    )
  }
}
const mapStateToProps=(state)=>{
    return {
     profile: state.firebase.profile,
     user : state.firestore.ordered.users,
     address: state.firestore.ordered["/users/" + state.firebase.profile.userid + "/profile"]
    }
 }
 const mapDispatchToprops=(dispatch)=>({
     addProfile:(profile,userid)=>dispatch(addProfile(profile,userid))
 })
 export default compose(
    connect(mapStateToProps),
    firestoreConnect((props,firebase)=>[
        { collection: `/users/${props.profile.userid}/profile` } 
]))(PlaceOrder);