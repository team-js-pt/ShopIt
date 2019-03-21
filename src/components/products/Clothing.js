import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Clothing extends Component {
  render() {
    return (
      <div className="Footwear">
         <Item data={this.props.clothing}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      clothing : state.firestore.ordered.clothing
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      { collection: 'clothing', orderBy: ['addedOn', 'desc'] }
  ]))(Clothing)