import React, { Component } from 'react';
import '../assets/css/Orders.css';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'

var total = 0;
var array = [];
class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prev: 0,
            disp: 10,
            orders : [],
            details:[]
        }
    }
    componentWillMount() {
        array = []
        for (var i = 0; i < (this.state.orders.length) / 10; i++) {
            var obj = {
                value: i + 1,
                prev: i * 10,
                disp: (i + 1) * 10
            }
            array.push(obj);
        }
    }
    componentDidUpdate(oldProps){
        const newProps = this.props;
        if(oldProps.orders !== newProps.orders) {
        if(this.props.orders && this.props.orders.length>=1){
          this.setState({
              ...this.state,
              orders: this.props.orders
        })
        }}
    }
    render() {
        const { authError, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return <div><div className="container table-responsive-md border my-5 p-0 table-container">
            <table className="table w-100">
                <thead className="thead-white">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">OrderId</th>
                        <th scope="col">Price</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.orders&&this.state.orders.map((item, index) => {
                        if (index >= this.state.prev && index < this.state.disp) {
                            return <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td className="orderid">{item.orderid}</td>
                                <td>{item.price}/-</td>
                                <td>{item.date.toDate().getDate()}-{item.date.toDate().getMonth()+1}-{item.date.toDate().getFullYear()}</td>
                                <td>
                                    <button type="button" data-toggle="modal" data-target="#exampleModalCenter">Order Placed</button>
                                </td>

                                {/* <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header header">
                                                <h5 className="title" id="exampleModalLongTitle">Details</h5>
                                            </div>
                                            <div className="modal-body popup-body">

                                                {this.props.ordered && this.props.ordered.map((item, index) => {
                                                    return <><div className="item my-3" key={index}>
                                                        <div className="image border"><img className="w-100 h-100 border" src={item.url}></img></div>
                                                        <div className="product"><span>{item.noOfItems}x{item.productName}</span></div>
                                                        <div className="price">{(item.price) * (item.noOfItems)}/-</div>
                                                    </div></>
                                                })}
                                                

                                                <div className="totalprice">
                                                    {this.props.ordered && this.props.ordered.reduce((value, item) => {
                                                        return value = value + ((item.price) * (item.noOfItems));
                                                    }, total)}/-
                                                </div>


                                            </div>
                                            <div className="modal-footer footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </tr>
                        }
                    })}

                </tbody>
            </table>
        </div>
        <div className="container page">
                    {(array.length===1)?(
                        <div></div>
                    ):(
                        <div className="paging mx-5"><nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item" onClick={() => {
                                    var i=this.state.prev;
                                    var j= this.state.disp;
                                   
                                    if(i!==0){
                                        this.setState({
                                            prev: i-10,
                                            disp: j-10
                                        })
                                    }
                                }
                            }>
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            {
                                array.map((item, index) => {
                                    return <li className="page-item" key={index}><a className="page-link" href="#" onClick={() => {
                                        this.setState({
                                            prev: item.prev,
                                            disp: item.disp
                                        })
                                    }}>{item.value}</a></li>
                                })
        
                            }
                            <li className="page-item"  onClick={() => {
                                    var i=this.state.prev;
                                    var j= this.state.disp;
                                    var limit= array.length*10;
                                    if(limit!==j)
                                        this.setState({
                                            prev: i+10,
                                            disp: j+10
                                        })       
                                }
                            }>
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    </div>
                    )}
        </div>
           </div>
    }
}
const mapStateToProps = (state, ownProps) => {
    
    return {
        auth:state.firebase.auth,
        cartItems: state.cart.cart,
        profile: state.firebase.profile,
        ordered: state.firestore.ordered["/users/" + state.firebase.profile.userid + "/cart"],
        orders : state.firestore.ordered["/users/" + state.firebase.profile.userid + "/orders"]
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect((props, firebase) => [
      { collection: `/users/${props.profile.userid}/orders` },
       { collection: `/users/${props.profile.userid}/cart` },
        
        // await props.orders&&props.orders.map((item)=>{
        //     console.log(props.orders)
        //     return{
        //         collection:`/users/${props.userid}/orders/${item.orderid}/items`
        //     }}),

    ]))(Orders)
// export default Orders;