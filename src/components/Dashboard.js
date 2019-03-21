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
                                <img src={require('./assets/images/img1.jpeg')} alt="img2" style={{width:'100%' ,height:'50vh' }}></img>
                            </div>

                            <div><img src={require('./assets/images/img2.jpeg')}className="carousel-item" alt="img1" style={{width:'100%',height:'50vh'}}></img>
                            </div>
                            <div className="carousel-item">
                                <img  src={require('./assets/images/img3.jpeg')} alt="img3" style={{width:'100%',height:'50vh'}}></img>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <div className="row m-auto">
               {this.props.ui.map((value,index)=>{
                    return(
                        <div className="col-lg-2 col-sm-6 my-3" key={index}>
                            <div className="card">
                            <Link to={"/"+value.name}><img src={require(`./assets/images/${value.pic}`)} className="card-img-top w-100" alt={value.name} /></Link>
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
    ui : state.ui.items,
    profile: state.firebase.profile

  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'vegetables', orderBy: ['addedOn', 'desc']},
    { collection: 'footwear', limit: 10, orderBy: ['addedOn', 'desc']}
  ])
)(Dashboard)

