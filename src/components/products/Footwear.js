import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Spinner from '../Spinner'
import {Redirect} from 'react-router-dom'

class Footwear extends Component {
  
  render() {
    const { authError, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      (this.props.footwear==undefined)?<Spinner/>:
      <div className="Footwear">
         <Item data={this.props.footwear}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth : state.firebase.auth,
      footwear : state.firestore.ordered.footwear
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      { collection: 'footwear', orderBy: ['addedOn', 'desc'] }
  ]))(Footwear)