import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Spinner from '../Spinner'

class Sports extends Component {
  render() {
    return (
      (this.props.sports==undefined)?<Spinner/>:
      <div className="Sports">
         <Item data={this.props.sports}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      sports : state.firestore.ordered.sports
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      { collection: 'sports', orderBy: ['addedOn', 'desc'] }
  ]))(Sports)