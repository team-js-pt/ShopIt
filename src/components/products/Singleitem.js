
import React,{Component} from 'react';
import {connect} from 'react-redux';
import { singleItemDelete } from '../../store/actions/singleItemAction';

class Singleitem extends Component{
    componentWillUnmount(){
        this.props.singleItemDelete()
    }
    render(){
    return(
        <div className="container-fluid">
            <div className="row m-auto">
                <div className="col-lg-4 col-md-6 my-5"> 
                    <div className="card border h-100 " >
                            <div className="card-image d-flex justify-content-center align-items-center my-5">
                                <img src={this.props.state.ui.singleItem.url} alt={this.props.state.ui.singleItem.productName} style={{width:"400px",height:"400px"}}/>
                            </div>
                            <div className="card-content text-center">
                                <h4>{this.props.state.ui.singleItem.productName}</h4>
                                
                                <p>{this.props.state.ui.singleItem.description}</p>
                                <p><b>Price: {this.props.state.ui.singleItem.price}$</b></p>
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
     state
    }
  }
export default connect(mapStateToProps,{singleItemDelete})(Singleitem)

