import React, { Component } from 'react'
import {connect} from 'react-redux';
import '../assets/css/AddToCart.css';

import {addToCart, EditCart, ItemIncrement, ItemDecrement} from '../../store/actions/cartActions'
import { firestore } from 'firebase';
var total=0;
class AddToCart extends Component {
  render() {
    return (
      <div className="cart_container">
      {/* <div className="cart">
          <h3>Your Cart</h3>
         {
           this.props.cartItems.map((item,index)=>{
              return <div key={index} className="cartItems">
                   <img src={require("../images/"+item.image)} alt={item.name}></img>
                   <div>{item.no_of_items}x{item.name} 
                    <div className="inc_dec">
                      <button onClick={()=>this.props.onIncrementClick(index)}>+</button>
                      <button onClick={()=>{
                        if(item.no_of_items===1){
                          this.props.removeItem(index)
                         
                        }
                        else {
                          this.props.onDecrementClick(index)
                        }}}>-</button>
                    </div>
                  </div>
                  <div>{(item.price)*(item.no_of_items)}</div>
              </div>
           })
         }
         <div className="cart_bottom">
         <button className="checkout" onClick={()=>{
          var payload = {name:"apple",price:100,image:"mango.png",no_of_items:1}
          var i=0;
          this.props.cartItems.map((item)=>{
            if(item.name=== payload.name && item.price=== payload.price){
              i=1;
            }
            else {
              (i>0)?i=1:i=0
            }
          })
          if(i===1)
          { this.props.editItem(payload)}
          else {i=0,this.props.addItem(payload)}
         }}>CheckOut</button>
         <div className="total_price">total price:<span>{
               this.props.cartItems.reduce((value,item)=>{
                  return  value = value+((item.price)*(item.no_of_items));
               },total)
         }</span></div>
         </div>
      </div>
      <div className="advertisement">Advertisements displaying here</div>
       */}
       </div>
    )
  }
}
const mapStateToProps=(state,ownProps)=>({
  cartItems:state.cart.cart
})
const mapDispatchToProps=(dispatch)=>({
    onIncrementClick:(index)=> dispatch(ItemIncrement("INCREMENT",index)),
    onDecrementClick:(index)=> dispatch(ItemDecrement('DECREMENT',index)),
    removeItem:(index)=> dispatch({type:'REMOVE_ITEM',id:index}), 
    addItem:(payload)=> dispatch(addToCart(payload)),
    editItem:(payload)=> dispatch(EditCart(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(AddToCart)
