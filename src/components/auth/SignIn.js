import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import '../assets/css/SignIn.css'
class SignIn extends Component {
state = {
email: '',
password: ''
}
handleChange = (e) => {
this.setState({
[e.target.id]: e.target.value
})
}
handleSubmit = (e) => {
e.preventDefault();
this.props.signIn(this.state)
}
render() {
const { authError, auth } = this.props;
if (auth.uid) return <Redirect to='/' /> 
return (
<div className="container d-flex flex-column align-items-center align-middle mt-5 signInContainer col-lg-4 ">
<form className="text-dark align-middle text-center p-0 mt-5 " onSubmit={this.handleSubmit}>
{/* <h5 className=" h3 my-5">Login</h5> */}
<div className=" mt-5 ">
<label htmlFor="email" className="mr-4 p-1 mb-4 font-weight-bold">Email: </label>
<input type="email" id='email' className="border-dark" onChange={this.handleChange} />
</div>
<div >
<label htmlFor="password" className="mr-2 mb-4 font-weight-bold">Password:</label>
<input type="password" className="border-dark w-auto" id='password' onChange={this.handleChange} />
</div>
<div >
<button className="btn btn-dark mb-4 rounded-pill h6 font-weight-bold">Login</button>
<div className="text-center text-danger">
{ authError ? <p>{authError}</p> : null }
</div>
</div>
</form>
</div>
)
}
}

const mapStateToProps = (state) => {
return{
authError: state.auth.authError,
auth: state.firebase.auth
}
}

const mapDispatchToProps = (dispatch) => {
return {
signIn: (creds) => dispatch(signIn(creds))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)