import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {singleItemAdd} from '../../store/actions/singleItemAction'
 class Item extends Component{
    singleItemAdd=(val)=>{
        this.props.dispatch(singleItemAdd(
           {selected:val}
        ))
    }
    render(){
    console.log(this.props)
    return(
        <div className="container-fluid">
        <div className="row m-auto">
        {this.props.obj.map((val,ind)=>{
            return(
                <div className="col-lg-4 col-md-6 my-5" key={ind}>  
                    <Link to="/Singleitem" style={{textDecoration:'none',color:'black'}}>
                       <div className="card border h-100 " onClick={()=>{this.singleItemAdd(val)}}>
                            <div className="card-image d-flex justify-content-center align-items-center my-5">
                                <img    alt={val.title}/>
                            </div>
                            <div className="card-content text-center">
                                <p>{val.Description}</p>
                                <p><b>Price: {val.price}$</b></p>
                            </div>
                      </div>
                    </Link>
                    </div>

            )
        })
    }
        </div>
        </div>
    
    )}};
const mapStateToProps = (state) => {
    return {
     state
    }
  }
  
export default connect(mapStateToProps)(Item)
