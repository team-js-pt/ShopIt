import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { singleItemAdd } from '../../store/actions/singleItemAction'


class Item extends Component {
    singleItemAdd = (val) => {
        this.props.dispatch(singleItemAdd(
            { selected: val }
        ))
    }
    render() {
        if(this.props.data && (this.props.data).length>0){           
            return (
            <div className="container-fluid">
                <div className="row m-auto">
                    {this.props.data && this.props.data.map((val, ind) => {
                        return (
                            <div className="col-lg-4 col-md-6 my-5" key={ind}>
                                <Link to={`/${val.category}/${val.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                    <div className="card border h-100 " onClick={() => { this.singleItemAdd(val) }}>
                                        <div className="card-image d-flex justify-content-center align-items-center my-5">
                                            <img src={val.url} alt={val.productName} style={{ height: '300px', width: '300px' }} />
                                        </div>
                                        <div className="card-content text-center">
                                            <p>{val.productName}</p>
                                            <p><b>Price: {val.price}$</b></p>
                                           
                                        </div>
                                    </div>
                                </Link>
                                <button>add to cart</button>
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

export default connect(null)(Item);