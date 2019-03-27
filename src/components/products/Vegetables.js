import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Spinner from '../Spinner'
import {Redirect} from 'react-router-dom'

class Vegetables extends Component {
  render() {
    const { authError, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
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
    auth:state.firebase.auth,
      vegetables: state.firestore.ordered.vegetables,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      { collection: 'vegetables', orderBy: ['addedOn', 'desc'] },
  ]))(Vegetables)