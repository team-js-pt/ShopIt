import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Link} from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const { auth,vegetables} = this.props;
   
    let veg = vegetables&&vegetables.map(veg=>{
      return (<div key={veg.id}>{veg.description}</div>);
    })
     if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="container">
        <div className="row">
        <div className="container-fluid">
            <div className="row my-2">
                <div className="col-md-10 m-auto">
                    <div className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img  alt="img2" style={{width:'100%' ,height:'50vh' }}></img>
                            </div>

                            <div className="carousel-item">
                                <img alt="img1" style={{width:'100%',height:'50vh'}}></img>
                            </div>
                            <div className="carousel-item">
                                <img alt="img3" style={{width:'100%',height:'50vh'}}></img>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <div className="row m-auto">
               {this.props.ui.map((value,index)=>{
                    return(
                        <div className="col-lg-2 col-sm-6 my-3" key={index}>
                            <div className="card" style={{height:'180px'}}>
                            <Link to={"/"+value.name}><img className="card-img-top w-100" alt={value.name} /></Link>
                                <div className="card-body text-center">
                                    <p className="card-title">{value.name}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div> 
        </div>
        </div>
       
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    vegetables : state.firestore.ordered.vegetables,
    footwear : state.firestore.ordered.footwear,
    ui : state.ui.items
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'vegetables', orderBy: ['addedOn', 'desc']},
    { collection: 'footwear', limit: 10, orderBy: ['addedOn', 'desc']}
  ])
)(Dashboard)

