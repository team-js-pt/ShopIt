import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Spinner from '../Spinner'
import {Redirect} from 'react-router-dom';

class Appliances extends Component {
  render() {
    const { authError, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      (this.props.appliances==undefined)?<Spinner/>:
      <div className="Appliance">
         <Item data={this.props.appliances}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      auth : state.firebase.auth,
      appliances : state.firestore.ordered.appliances
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      { collection: 'appliances', orderBy: ['addedOn', 'desc'] }
  ]))(Appliances)