import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { singleItemAdd } from '../../store/actions/singleItemAction'
import {addToCart} from '../../store/actions/cartActions'


class Item extends Component {
    render() {
        if(this.props.data && (this.props.data).length>0){           
            return (
            <div className="container-fluid">
                <div className="row m-auto">
                    {this.props.data && this.props.data.map((val, ind) => {
                        return (
                            <div className="col-lg-4 col-md-6 my-5" key={ind}>
                                <Link to={`/${val.category}/${val.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                    <div className="card border h-100 " onClick={()=>{this.props.singleItemAdd(val)}}>
                                        <div className="card-image d-flex justify-content-center align-items-center my-5">
                                            <img src={val.url} alt={val.productName} style={{ height: '300px', width: '300px' }} />
                                        </div>
                                        <div className="card-content text-center">
                                            <p>{val.productName}</p>
                                            <p><b>Price: {val.price}$</b></p>
                                           
                                        </div>
                                    </div>
                                </Link>
                                <button onClick={()=>{this.props.addToCart(val,this.props.profile.userid)}}>add to cart</button>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )}
        else {
            return <div>No Items to Fetch</div>
        }
    }
};
const mapStateToProps = (state) => {
    return {
      profile: state.firebase.profile
  
    }
}
const mapDispatchToProps = (dispatch)=>({
    addToCart:(payload,userid)=> dispatch(addToCart(payload,userid)),
    singleItemAdd : (payload)=>dispatch(singleItemAdd(payload)),

})
  
  export default connect(mapStateToProps,mapDispatchToProps)(Item)
  