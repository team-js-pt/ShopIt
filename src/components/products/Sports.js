import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Spinner from '../Spinner'
import {Redirect} from 'react-router-dom'

class Sports extends Component {
  render() {
    const { authError, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
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
      auth:state.firebase.auth,
      sports : state.firestore.ordered.sports
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      { collection: 'sports', orderBy: ['addedOn', 'desc'] }
  ]))(Sports)