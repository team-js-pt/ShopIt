import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../assets/css/Cart.css'
import '../assets/css/AddToCart.css';
import { incrementItem, decrementItem, clearCart,countCart } from '../../store/actions/cartActions'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Spinner from '../Spinner'
import {Link} from 'react-router-dom'

var total=0;
class AddToCart extends Component {
    render() {
        return (
            (this.props.ordered==undefined)?<Spinner/>:
            <div className="cart_container w-100 border my-5">
                <div className="cart w-100 d-flex justify-content-center align-items-around">
                    <div className="left-cart border" >
                        <div className="m-2">
                            <div className="cart-top">
                                <h4 >My Cart</h4>
                                <div className="item-top cursor-pointer btn" onClick={()=>{this.props.clearCart(this.props.profile.userid)}}>Clear Cart</div>
                            </div>

                            <div className="items mt-3 mb-3">
                                {this.props.ordered && this.props.ordered.map((item, index) => {
                                    return <div className="item" key={index}>
                                        <div className="img" ><img className="item-img  w-100" src={item.url} ></img></div>
                                        <div className="item-body">
                                            <div className="item-title">{item.noOfItems}x{item.productName}</div>
                                            <div className="item-text m-1">
                                                <button className="border rounded-circle m-1" onClick={() => this.props.incrementItem(this.props.profile.userid, item.productName)}>+</button>
                                                <button className="border rounded-circle mx-1" onClick={() => this.props.decrementItem(this.props.profile.userid, item.productName)}>-</button>
                                            </div>

                                        </div>
                                        <div className="price">{(item.price) * (item.noOfItems)}</div>
                                    </div>
                                })
                                }

                            </div>
                            <div className="bill mx-4">
                                <div className="total-bill">Total Bill</div>
                                <div className="amount ">{this.props.ordered&&this.props.ordered.reduce((value, item) => {
                                    return value = value + ((item.price) * (item.noOfItems));
                                },total)}</div>
                            </div>
                            <div className="checkout">
                                <Link to='/placeorder'>CheckOut</Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-cart border m-1">hiii</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        cartItems: state.cart.cart,
        profile: state.firebase.profile,
        ordered: state.firestore.ordered["/users/" + state.firebase.profile.userid + "/cart"]
    }
}
const mapDispatchToProps = (dispatch) => ({
    incrementItem: (userid, productName) => dispatch(incrementItem(userid, productName)),
    decrementItem: (userid, productName) => dispatch(decrementItem(userid, productName)),
    clearCart: (userid) => dispatch(clearCart(userid)),
    countCart:(count)=>dispatch(countCart(count))

})
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props, firebase) => [
        { collection: `/users/${props.profile.userid}/cart` },
        { collection: 'users', doc: props.profile.userid, subcollection: [{ collection: "cart", storeAs: 'carts' }] }
    ]))(AddToCart)