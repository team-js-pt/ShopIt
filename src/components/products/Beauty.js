import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Beauty extends Component {
  render() {
    return (
      <div className="Beauty">
         <Item data={this.props.beauty}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      beauty : state.firestore.ordered.beauty
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      { collection: 'beauty', orderBy: ['addedOn', 'desc'] } 
  ]))(Beauty)