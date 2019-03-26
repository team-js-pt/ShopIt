import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Spinner from '../Spinner'

class Mobiles extends Component {
  render() {
    return (
      (this.props.mobiles==undefined)?<Spinner/>:
      <div className="Mobiles">
         <Item data={this.props.mobiles}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      mobiles : state.firestore.ordered.mobiles
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      { collection: 'mobiles', orderBy: ['addedOn', 'desc'] }
  ]))(Mobiles)