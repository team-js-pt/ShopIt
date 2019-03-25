import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { singleItemAdd } from '../../store/actions/singleItemAction'
import { addToCart } from '../../store/actions/cartActions'

class Item extends Component {
    render() {
        if (this.props.data && (this.props.data).length > 0) {
            return (
                <div className="container">
                    <div className="row m-auto">
                        {this.props.data && this.props.data.map((val, ind) => {
                            return (
                                <div className="col-xl-3 col-md-4 col-sm-6 my-4" key={ind}>

                                    <div className="card mx-3 d-flex align-items-center" style={{ borderColor: "rgba(0,0,0,0.14)", boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)", borderRadius: "3px", height: "295px", width: "240px" }}>
                                        <Link to={`/${val.category}/${val.id}`} style={{ textDecoration: 'none', color: 'black' }}> <img className="card-img-top" src={val.url} onClick={() => { this.props.singleItemAdd(val) }} alt="Card image cap" style={{ height: "160px", width: '200px' }} /></Link>
                                        <div className="card-body" style={{ height: "135px" }}>
                                            <h5 className="card-title text-center" style={{ color: "#4a4a4a", fontSize: "30px", fontWeight: "300", fontFamily: "Lato", width: "200px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: " ellipsis" }}>{val.productName}</h5>
                                            <div className="card-text d-flex justify-content-around align-items-center">
                                                <div>
                                                    <div style={{ color: "#4a4a4a", fontSize: "14px", fontWeight: "500", fontFamily: "Lato" }}>Rs: {val.price}$</div>
                                                    <div style={{ color: "#4a4a4a" }}>{val.offer}%<sub style={{ color: "red" }}>off</sub></div>

                                                </div>
                                                <div className="container">
                                                <button onClick={() => { this.props.addToCart(val, this.props.profile.userid) }} className="border rounded-circle" style={{ backgroundColor: "#008081", color: 'white', fontSize: '22px', fontWeight: 'bolder' }} data-toggle="modal" data-target="#myModal">+</button>
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
                                </div>)
                        })
                        }
                    </div>
                </div>
            )
        }
        else {
            return <div>No Items to Fetch</div>
        } 0
    }
};
const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile

    }
}
const mapDispatchToProps = (dispatch) => ({
    addToCart: (payload, userid) => dispatch(addToCart(payload, userid)),
    singleItemAdd: (payload) => dispatch(singleItemAdd(payload)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Item)
