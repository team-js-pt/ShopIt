import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


class Dashboard extends Component {
  render() {
    const { auth,vegetables} = this.props;
   
    let veg = vegetables&&vegetables.map(veg=>{
      return (<div key={veg.id}>{veg.description}</div>);
    })
    // if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="container">
       
        <div className="row">
         <h5 className="text-center">Dashboard</h5>
         {veg}
        </div>
       
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    vegetables : state.firestore.ordered.vegetables,
    footwear : state.firestore.ordered.footwear
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'vegetables', orderBy: ['addedOn', 'desc']},
    { collection: 'footwear', limit: 10, orderBy: ['addedOn', 'desc']}
  ])
)(Dashboard)

