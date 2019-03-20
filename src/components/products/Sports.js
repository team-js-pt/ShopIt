import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Sports extends Component {
  render() {
    return (
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