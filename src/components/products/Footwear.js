import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Footwear extends Component {
  render() {
    return (
      <div className="Footwear">
         <Item data={this.props.footwear}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      footwear : state.firestore.ordered.footwear
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      { collection: 'footwear', orderBy: ['addedOn', 'desc'] }
  ]))(Footwear)