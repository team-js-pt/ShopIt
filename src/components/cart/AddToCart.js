import React, { Component } from 'react'
import {connect} from 'react-redux';
// import '../assets/css/AddToCart.css';
import '../assets/css/Cart.css'

import {addToCart, EditCart, ItemIncrement, ItemDecrement} from '../../store/actions/cartActions'
import { firestore } from 'firebase';
var total=0;
class AddToCart extends Component {
  render() {
    return (
      <div className="cart_container w-100 border my-5">
            
            <div className="cart w-100 d-flex justify-content-center align-items-around">
                <div className="left-cart border" >
                    <div className="m-2">
                    <div className="cart-top">
                        <h4 >My Cart</h4>
                        <div className="item-top " >Clear Cart</div>
                       
                    </div>
                   
                    <div className="items mt-3 mb-3">
                        <div className="item">
                            <div className="img" ><img className="item-img  w-100" src={require('../assets/images/img1.jpeg')} ></img></div>
                            <div className="item-body">
                                <div className="item-title">3xPotato</div>
                                <div className="item-text m-1">
                                    <button className="border rounded-circle m-1" >+</button>
                                    <button className="border rounded-circle mx-1">-</button>
                                </div>
                                
                            </div>
                            <div className="price">100/-</div>
                        </div>
                        <div className="item">
                            <div className="img" ><img className="item-img  w-100" src={require('../assets/images/img1.jpeg')} ></img></div>
                            <div className="item-body">
                                <div className="item-title">3xPotato</div>
                                <div className="item-text">
                                    <button className="border rounded-circle m-1" >+</button>
                                    <button className="border rounded-circle mx-1">-</button>
                                </div>
                                
                            </div>
                            <div className="price">100/-</div>
                        </div>
                        <div className="item">
                            <div className="img" ><img className="item-img  w-100" src={require('../assets/images/img1.jpeg')} ></img></div>
                            <div className="item-body">
                                <div className="item-title">3xPotato</div>
                                <div className="item-text">
                                    <button className="border rounded-circle m-1" >+</button>
                                    <button className="border rounded-circle mx-1">-</button>
                                </div>
                                
                            </div>
                            <div className="price">100/-</div>
                        </div>
                        <div className="item">
                            <div className="img" ><img className="item-img  w-100" src={require('../assets/images/img1.jpeg')} ></img></div>
                            <div className="item-body">
                                <div className="item-title">3xPotato</div>
                                <div className="item-text">
                                    <button className="border rounded-circle m-1" >+</button>
                                    <button className="border rounded-circle mx-1">-</button>
                                </div>
                                
                            </div>
                            <div className="price">100/-</div>
                        </div>
                        <div className="item">
                            <div className="img" ><img className="item-img  w-100" src={require('../assets/images/img1.jpeg')} ></img></div>
                            <div className="item-body">
                                <div className="item-title">3xPotato</div>
                                <div className="item-text">
                                    <button className="border rounded-circle m-1" >+</button>
                                    <button className="border rounded-circle mx-1">-</button>
                                </div>
                                
                            </div>
                            <div className="price">100/-</div>
                        </div>
                        <div className="item">
                            <div className="img" ><img className="item-img  w-100" src={require('../assets/images/img1.jpeg')} ></img></div>
                            <div className="item-body">
                                <div className="item-title">3xPotato</div>
                                <div className="item-text">
                                    <button className="border rounded-circle m-1" >+</button>
                                    <button className="border rounded-circle mx-1">-</button>
                                </div>
                                
                            </div>
                            <div className="price">100/-</div>
                        </div>
                        <div className="item">
                            <div className="img" ><img className="item-img  w-100" src={require('../assets/images/img1.jpeg')} ></img></div>
                            <div className="item-body">
                                <div className="item-title">3xPotato</div>
                                <div className="item-text">
                                    <button className="border rounded-circle m-1" >+</button>
                                    <button className="border rounded-circle mx-1">-</button>
                                </div>
                                
                            </div>
                            <div className="price">100/-</div>
                        </div>
                        <div className="item">
                            <div className="img" ><img className="item-img  w-100" src={require('../assets/images/img1.jpeg')} ></img></div>
                            <div className="item-body">
                                <div className="item-title">3xPotato</div>
                                <div className="item-text">
                                    <button className="border rounded-circle m-1" >+</button>
                                    <button className="border rounded-circle mx-1">-</button>
                                </div>
                                
                            </div>
                            <div className="price">100/-</div>
                        </div>
                        <div className="item">
                            <div className="img" ><img className="item-img  w-100" src={require('../assets/images/img1.jpeg')} ></img></div>
                            <div className="item-body">
                                <div className="item-title">3xPotato</div>
                                <div className="item-text">
                                    <button className="border rounded-circle m-1" >+</button>
                                    <button className="border rounded-circle mx-1">-</button>
                                </div>
                                
                            </div>
                            <div className="price">100/-</div>
                        </div>
                        
                        
                    </div>
                    <div className="bill mx-4">
                      <div className="total-bill">Total Bill</div>
                      <div className="amount ">300/-</div>
                    </div>
                    <div className="checkout">
                        <button>CheckOut</button>
                    </div>
                    </div>
                </div>
                <div className="right-cart border m-1">hiii</div>
            </div>
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
