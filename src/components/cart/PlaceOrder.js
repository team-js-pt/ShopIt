import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../assets/css/PlaceOrder.css'
import {addProfile} from '../../store/actions/profileActions'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {placeOrder,clearCart} from '../../store/actions/cartActions'

 class PlaceOrder extends Component {
    state = {
        isEdit:true,
        primaryAddress: '',
        secondaryAddress: '',
        State: '',
        city: '',
        pincode: '',
    }
    componentDidUpdate(oldProps){
        console.log("did update")
        const newProps = this.props;
        if(oldProps.address !== newProps.address) {
        if(this.props.address && this.props.address.length>=1){
        let {primaryAddress,secondaryAddress,pincode,city,State} = this.props.address[0];
          this.setState({
              isEdit:this.state.isEdit,
              primaryAddress,
              secondaryAddress,
              pincode,
              State,
              city
        })
        }}
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
    }
    handleSubmit=async(e)=> {
        e.preventDefault();
        console.log("handle submit")
        await this.props.addProfile(this.state,this.props.profile.userid);
        this.setState({
            ...this.state,
            isEdit:true
        })
    }
    editEditDetails=()=>{
        this.setState({
            ...this.state,
            isEdit:false
        })
    }
    placeOrder = async()=>{
        if(this.props.address&&this.props.address.length>=1){
            await this.props.placeOrder(this.props.ordered,100,this.props.profile.userid);
            await this.props.clearCart(this.props.profile.userid);
        }
        else{
            console.log("please enter address");
        }
       
    }
  render() {
    return (
      <div className="container-fluid d-flex flex-sm-column flex-lg-row flex-md-column my-4 align-self-center justify-content-center">
          <div className="col-lg-7 col-sm-12   border-left border-right bg-white">
            <p className="h4 Heading pt-3 mb-2 text-left pl-3">Select Delivery Address</p>
            <div className="mt-3 pt-2 row">
                <div className="container  d-flex flex-row">
                    <span className="col-5"><img src={require("../assets/images/e.jpeg")} className="profileImg "></img></span>
                     <div className="d-flex flex-column col-6 text-left pt-4">
                       
                         <p className="pName">{this.props.profile.firstName}</p>
                         <p className="pName pMail">{this.props.profile.email}</p> 
                         <p className="pNum">
                        Mobile : {this.props.profile.phNumber}
                        </p>
                    </div> 
            </div>
            </div>
            
           <p className="addressText ml-5 px-2 col-6  mt-2 pb-4 ">Address</p>
           <form className="col-12 d-flex flex-column mt-3 py-2 ml-5 px-2 " onSubmit={this.handleSubmit}>
           {(this.state.isEdit)&&(this.props.address&& this.props.address.length<1)?<button className=" btn-lg ChangeBtn col-lg-2 col-sm-2 text-center">add address</button>:''}
                {(this.state.isEdit)
                    ?<p>{this.state.primaryAddress}</p>
                    :<><label className="AddressLabel ">Primary Address</label>
                    <textarea placeholder="Street Location" id='primaryAddress' className="addressArea col-6 border-top-0 border-left-0 border-right-0  " value={this.state.primaryAddress} onChange={this.handleChange} required ></textarea></> 
                }
                {(this.state.isEdit)
                ?<p>{this.state.secondaryAddress}</p>
                :<><label className="AddressLabel mt-2">Secondary Address</label>
                <textarea placeholder="Street Location" id="secondaryAddress" className="addressArea col-6 border-top-0 border-left-0 border-right-0  " value={this.state.secondaryAddress} onChange={this.handleChange}></textarea></>
                }
                <div className="d-flex flex-row mt-2">
                    <div className="d-flex flex-column mr-5">
                        {(this.state.isEdit)
                        ?<p>{this.state.State}</p>
                        :<><label className="AddressLabel">State</label>
                        <input placeholder="Enter your state" id="State" className=" addressArea border-top-0 border-left-0 border-right-0 AddressInputs pt-2" value={this.state.State} onChange={this.handleChange} required/></>
                        }
                        {(this.state.isEdit)
                        ?<p>{this.state.pincode}</p>
                         :<><label className="AddressLabel mt-3">Pincode</label>
                        <input placeholder="Enter pincode" id="pincode" className=" addressArea border-top-0 border-left-0 border-right-0 AddressInputs pt-2" value={this.state.pincode} onChange={this.handleChange} required/></>
                        }
                    </div>
                    <div className="d-flex flex-column ml-5">
                    {(this.state.isEdit)
                        ?<p>{this.state.city}</p>
                        :<><label className="AddressLabel">City</label>
                        <input placeholder="Enter your city" id="city" className=" addressArea border-top-0 border-left-0 border-right-0 AddressInputs pt-2" value={this.state.city} onChange={this.handleChange} required/></>
                    }
                    {(this.state.isEdit)?'':<input type="submit" value="submit" className=" btn-lg ChangeBtn col-lg-2 col-sm-2 text-center mr-5 p-3"></input>}
                    </div>
                </div>
                   
           
           <p className="h4 Heading pt-3 mb-3 text-left">Payment Method</p>
           <div className="d-flex flex-row">
           <label className="RadioContainer AddressLabel">PayTm
                <input type="radio"  name="radio"/>
                <span className="checkmark"></span>
            </label>
            <label className="RadioContainer AddressLabel mr-3">COD
            <input type="radio" name="radio" defaultChecked/>
            <span className="checkmark"></span>
            </label>
           </div>
           {(this.state.isEdit)?<button className="ChangeBtn col-lg-2 col-sm-2 text-center mr-5" onClick={this.editEditDetails}>Update</button>:""}
           </form>
      </div>
      <div className="col-lg-4 col-sm-12   bg-white">
        <div className="overlayContainer justify-content-center ">
            <div className="d-flex flex-row justify-content-between mt-4 pt-3">
                <p className="MyCart pl-3">My Cart</p>
                <p className="ClearCart align-self-center pr-3 ">Clear Cart</p>
            </div>
            <div className="CartItemContainer container mt-4">
          
                {this.props.ordered && this.props.ordered.map((item,index)=>{
                    return <div key={index} className="CartItem   card mt-4 pt-4">
                    <div className="row no-gutters justify-content-between">
                        <div className="col-4 ">
                            <img src={item.url} className="card-img col-12" alt="#"/>
                        </div>  
                        <div className="col-4">
                        <p className="card-text">{item.productName} </p>
                        </div>
                        <div className="col-4">
                        <p className="card-text">Rs.{item.price}/-</p>
                        </div>
                    </div>
            </div>
                })}
                

            </div>
            <div className="d-flex justify-content-center"><button className="PlaceOrderBtn col-lg-5 col-sm-6 col-md-2 text-center   my-5" onClick={this.placeOrder}>Place Order</button></div>
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
     address: state.firestore.ordered["/users/" + state.firebase.profile.userid + "/profile"],
     ordered: state.firestore.ordered["/users/" + state.firebase.profile.userid + "/cart"]
    }
 }
 const mapDispatchToprops=(dispatch)=>({
    addProfile:(profile,userid)=>dispatch(addProfile(profile,userid)),
    placeOrder:(cart,price,userid)=>dispatch(placeOrder(cart,price,userid)),
    clearCart:(userid)=>dispatch(clearCart(userid))
 })
 export default compose(
    connect(mapStateToProps,mapDispatchToprops),
    firestoreConnect((props,firebase)=>[
        { collection: `/users/${props.profile.userid}/cart` },
        { collection: `/users/${props.profile.userid}/profile` } 
]))(PlaceOrder);