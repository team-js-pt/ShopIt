import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../assets/css/Cart.css'
import { incrementItem, decrementItem, clearCart,countCart, addToCart } from '../../store/actions/cartActions'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Spinner from '../Spinner'
import {Link,Redirect} from 'react-router-dom'
import { singleItemAdd } from '../../store/actions/singleItemAction'


var total=0;
var array=[]
class AddToCart extends Component {
      componentWillMount(){
          array=[]
       
          array.push(this.props.vegetables[0]);
          array.push(this.props.footwear[0]);
          array.push(this.props.clothing[0]);
          array.push(this.props.mobiles[0]);
          array.push(this.props.beauty[0]);
          array.push(this.props.sports[0]);
       
      }
    render() {
        const { authError, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            (this.props.ordered==undefined)?<Spinner/>:
            <div className="cart_container w-100 my-5">
                <div className="cart w-100">
                    <div className="left-cart mx-2" >
                        <div className="m-2">
                            <div className="cart-top">
                                <div>My Cart</div>
                                <div className="item-top cursor-pointer btn" onClick={()=>{this.props.clearCart(this.props.profile.userid)}}>Clear Cart</div>
                            </div>
                            <div className="items-container">
                                {
                                    (this.props.ordered.length!==0)?(
                                        this.props.ordered.map((item,index)=>{
                                            return <div className="item my-3" key={index}>
                                            <div className="image"><img className="w-100 h-100 border" src={item.url}></img></div>
                                            <div className="product">
                                                <span>{item.noOfItems}x{item.productName}</span>
                                                <div className="item-text w-100">
                                                    <button className="border rounded-circle m-1" onClick={() => this.props.incrementItem(this.props.profile.userid, item.productName)}>+</button>
                                                    <button className="border rounded-circle mx-1" onClick={() => this.props.decrementItem(this.props.profile.userid, item.productName)}>-</button>
                                                </div>
                                            </div>
                                            <div className="price">{(item.price) * (item.noOfItems)}/-</div>
                                            </div>
                                        })
                                        
                                    ):(
                                        
                                        <div className="noitems h-100">NO ITEMS</div>
                                       
                                    )

                                    
                                }
                            </div>
                            <div className="bill mx-4">
                                <div className="total-bill">Total Bill</div>
                                <div className="amount ">{this.props.ordered&&this.props.ordered.reduce((value, item) => {
                                    return value = value + ((item.price) * (item.noOfItems));
                                },total)}/-</div>
                            </div>
                            <div className="checkout">
                                <Link to='./placeorder' className="check">CheckOut</Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-cart mx-2">
                        <div className="latest-items mx-5 mb-3">Latest Items</div>
                        <div className="container">
                                <div className="row mx-2">
                                   
                                    <div className="col-12 d-flex flex-row">
                                    
                                        <div className="row">
                                        {
                                           
                                            array.map((val, ind) => {
                                            return (
                                                <div className="col-xl-4 col-lg-6 col-md-6 my-3" key={ind}>
                                                    <div className="card" onClick={() => { this.props.singleItemAdd(val) }} style={{ borderColor: "rgba(0,0,0,0.14)", boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)", borderRadius: "3px", height: "295px", width: "240px" }}>
                                                    <Link to={`/${val.category}/${val.id}`} style={{ textDecoration: 'none', color: 'black' }}><img className="card-img-top pt-3" src={val.url} alt="Card image cap" style={{ height: "160px" }} /></Link>
                                                    <div className="card-body" style={{ height: "135px" }}>
                                                        <h5 className="card-title" style={{ color: "#4a4a4a", fontSize: "30px", fontWeight: "300", fontFamily: "Lato", width: "200px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: " ellipsis" }}>{val.productName}</h5>
                                                        <div className="card-text d-flex justify-content-between align-items-center">
                                                        <div><div style={{ color: "#4a4a4a", fontSize: "14px", fontWeight: "500", fontFamily: "Lato" }}>Rs: {val.price}$</div>
                                                            <div style={{ color: "#4a4a4a" }}>{val.offer}%<sub style={{ color: "red" }}>off</sub></div></div>
                                                        <button className="border rounded-circle" onClick={()=>{this.props.addToCart(val, this.props.profile.userid)}} style={{outline:'none',backgroundColor: "#008081", color: 'white', fontSize: '22px', fontWeight: 'bolder', outline: 'none' }}>+</button>
                                                        </div>
                                                        
                                                    </div>
                                                    </div>
                                                
                                                </div>
                                            )
                                            })
                                        }
                                        </div>
                                    </div>
                                  
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth:state.firebase.auth,
        cartItems: state.cart.cart,
        profile: state.firebase.profile,
        vegetables: state.firestore.ordered.vegetables,
        footwear: state.firestore.ordered.footwear,
        sports: state.firestore.ordered.sports,
        mobiles: state.firestore.ordered.mobiles,
        beauty: state.firestore.ordered.beauty,
        appliances: state.firestore.ordered.appliances,
        clothing: state.firestore.ordered.clothing,
        ordered: state.firestore.ordered["/users/" + state.firebase.profile.userid + "/cart"]
    }
}
const mapDispatchToProps = (dispatch) => ({
    incrementItem: (userid, productName) => dispatch(incrementItem(userid, productName)),
    decrementItem: (userid, productName) => dispatch(decrementItem(userid, productName)),
    clearCart: (userid) => dispatch(clearCart(userid)),
    countCart:(count)=>dispatch(countCart(count)),
    addToCart: (payload, userid) => dispatch(addToCart(payload, userid)),
    singleItemAdd: (payload) => dispatch(singleItemAdd(payload))

})
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props, firebase) => [
        { collection: 'vegetables', orderBy: ['addedOn', 'desc'] },
        { collection: 'footwear', orderBy: ['addedOn', 'desc'] },
        { collection: 'sports', orderBy: ['addedOn', 'desc'] },
        { collection: 'mobiles', orderBy: ['addedOn', 'desc'] },
        { collection: 'beauty', orderBy: ['addedOn', 'desc'] },
        { collection: 'appliances', orderBy: ['addedOn', 'desc'] },
        { collection: 'clothing', orderBy: ['addedOn', 'desc'] },
        { collection: `/users/${props.profile.userid}/cart` },
        { collection: 'users', doc: props.profile.userid, subcollection: [{ collection: "cart", storeAs: 'carts' }] }
    ]))(AddToCart)
      