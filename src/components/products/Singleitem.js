import React,{Component} from 'react';
import {connect} from 'react-redux';
import { singleItemDelete } from '../../store/actions/singleItemAction';
import '../assets/css/Singleitem.css'

class Singleitem extends Component{
    componentWillUnmount(){
        this.props.singleItemDelete()
    }
    render(){
        console.log(this.props.state.ui.singleItem)
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4"> 
                    <div className="card border-0 d-flex justify-content-end align-items-center">
                        <div className="card-image  my-5 single">
                            <img src={this.props.state.ui.singleItem.url} alt={this.props.state.ui.singleItem.productName} className="h-100 w-100"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="description my-5">
                       <h5>{this.props.state.ui.singleItem.productName}</h5>
                       <p>{this.props.state.ui.singleItem.description}</p>
                       <h5>Price:{this.props.state.ui.singleItem.price}/-</h5>
                       <p>{this.props.state.ui.singleItem.offer}%<span className="text-danger">Off</span></p>
                       <button style={{width:'211px',height:'50px',backgroundColor:'#008081',color:'white'}}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>

    );
    }
};
const mapStateToProps = (state) => {
    return {
     state
    }
  }
export default connect(mapStateToProps,{singleItemDelete})(Singleitem)