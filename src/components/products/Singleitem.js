import React,{Component} from 'react';
import {connect} from 'react-redux';
import { singleItemDelete } from '../../store/actions/singleItemAction';
import {addToCart} from '../../store/actions/cartActions'
import {Redirect} from 'react-router-dom';
import '../assets/css/Singleitem.css'

class Singleitem extends Component{
    componentWillUnmount(){
        this.props.singleItemDelete()
    }
    render(){
        const { authError, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4"> 
                    <div className="card border-0 d-flex justify-content-end align-items-center">
                        <div className="card-image col-10  my-5 single">
                            <img src={this.props.singleItem.url} alt={this.props.singleItem.productName} className="col-12"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="description my-5">

                       <h5>{this.props.singleItem.productName}</h5>
                       <p>{this.props.singleItem.description}</p>
                       <h5>Price:{this.props.singleItem.price}/-</h5>
                       <p>{this.props.singleItem.offer}%<span className="text-danger">Off</span></p>
                       <div className="container">
                            <button onClick={() => { this.props.addToCart(this.props.singleItem, this.props.profile.userid) }} style={{width:'211px',height:'50px',backgroundColor:'#008081',color:'white'}} data-toggle="modal" data-target="#myModal">Add To Cart</button>
                            <div className="modal fade show" id="myModal" role="dialog">
                                <div className="modal-dialog">
                                    <div className="alert alert-success alert-dismissible fade show">
                                        <a className="close" data-dismiss="modal" aria-label="close">&times;</a>
                                        <strong>Success!</strong>Your Product has been Added to Cart!
                                    </div>
                                </div>
                            </div>
                        </div>
                       

                    </div>
                </div>
            </div>
        </div>

    );
    }
};
const mapStateToProps = (state) => {
    return {
    auth: state.firebase.auth,
     singleItem: state.ui.singleItem,
     profile: state.firebase.profile
    }
  }
const mapDispatchToProps = (dispatch)=>({
    addToCart:(val,userid)=>dispatch(addToCart(val,userid)),
    singleItemDelete:()=>dispatch(singleItemDelete())
})
export default connect(mapStateToProps,mapDispatchToProps)(Singleitem)