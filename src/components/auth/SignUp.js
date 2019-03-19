import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import '../assets/css/SignIn.css'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="container d-flex flex-column align-items-center align-middle mt-5 signInContainer col-lg-4 ">
        <form className="text-dark align-middle text-center p-0 mt-5 " onSubmit={this.handleSubmit}>
          {/* <h5 className="my-3 h3 font-weight-bold">Sign Up</h5> */}
          <div className="mt-5">
            <label htmlFor="firstName" className="mr-4 p-1 mb-4 font-weight-bold">First Name:</label>
            <input type="text" id='firstName' className="border-dark" onChange={this.handleChange} />
          </div>
          <div className="mt-4">
            <label htmlFor="lastName" className="mr-4 p-1 mb-4 font-weight-bold">Last Name:</label>
            <input type="text" id='lastName' className="border-dark" onChange={this.handleChange} />
          </div>
          <div className=" mt-4 ">
            <label htmlFor="email" className="mr-4 p-4 mb-4 font-weight-bold">Email: </label>
            <input type="email" id='email' className="border-dark" className="border-dark" onChange={this.handleChange} />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="mr-4 p-1 mb-4 font-weight-bold">Password:</label>
            <input type="password" id='password' className="border-dark" onChange={this.handleChange} />
          </div>
          <div className="mt-4">
            <label htmlFor="phoneNumber" className="mr-4 p-4 mb-4 font-weight-bold">PhNo:</label>
            <input type="number" id='number' className="border-dark" onChange={this.handleChange} />
          </div>
          <div className="mt-4">
            <button className="btn btn-dark mb-4 rounded-pill h6 font-weight-bold">Sign Up</button>
            <div className="text-center text-danger">
              {authError ? <p>{
                authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)