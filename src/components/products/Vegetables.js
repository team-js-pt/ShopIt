import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Spinner from '../Spinner'

class Vegetables extends Component {
  render() {
    return (
      (this.props.vegetables==undefined)?<Spinner/>:
      <div className="Vegetables">
         <Item data={this.props.vegetables}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      vegetables: state.firestore.ordered.vegetables,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      { collection: 'vegetables', orderBy: ['addedOn', 'desc'] },
  ]))(Vegetables)