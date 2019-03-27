import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Spinner from '../Spinner'
import {Redirect} from 'react-router-dom'
class Beauty extends Component {
  render() {
    const { authError, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      (this.props.beauty==undefined)?<Spinner/>:
      <div className="Beauty">
         <Item data={this.props.beauty}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      auth : state.firebase.auth,
      beauty : state.firestore.ordered.beauty
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      { collection: 'beauty', orderBy: ['addedOn', 'desc'] } 
  ]))(Beauty)