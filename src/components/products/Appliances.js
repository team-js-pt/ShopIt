import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Spinner from '../Spinner'

class Appliances extends Component {
  render() {
    return (
      (this.props.Appliance==undefined)?<Spinner/>:
      <div className="Appliance">
         <Item data={this.props.appliances}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      appliances : state.firestore.ordered.appliances
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      { collection: 'appliances', orderBy: ['addedOn', 'desc'] }
  ]))(Appliances)