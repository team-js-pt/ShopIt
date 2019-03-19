import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Navbar from './header/Navbar';




class Dashboard extends Component {
  render() {
    // const { auth} = this.props;
    // if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="container">
       
        <div className="row">
         <h5 className="text-center">Dashboard</h5>
        </div>
       
      </div>
    )
  }
}

const mapStateToProps = (state) => {
   console.log(state);
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(Dashboard)
