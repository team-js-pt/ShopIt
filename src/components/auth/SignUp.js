import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import '../assets/css/SignIn.css'
import Spinner from '../Spinner'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phNumber:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    var NameValid = /^[a-zA-Z ]+$/;
    var phValid = /^[0-9]{10}$/;
    var emailValid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z])+$/;
    var pwdValid= /^[a-zA-Z0-9!@#$%^&*]{6,}$/;
   
    if (NameValid.test(this.state.firstName)){
      if ( NameValid.test(this.state.lastName)){
        if (emailValid.test(this.state.email)){
          if (pwdValid.test(this.state.password)){
            if ( phValid.test(this.state.phNumber)){
              this.props.signUp(this.state);
              e.target.reset();
            }
            else{
              alert('enter the valid phone number')
              this.setState({phNumber:''})
              console.log(this.state)
            }
          }
          else{
            alert('minimum length of password should be 6')
            this.setState({password:''})
            console.log(this.state)
          }
        }
        else{
          alert('enter the valid Email')
          this.setState({email:''})
          console.log(this.state)
        }
      }
      else{
        alert('enter the valid LastName')
        this.setState({lastName:''})
        console.log(this.state)
      }
    }
    else{
      alert('enter the valid firstName')
      this.setState({firstName:''})
      console.log(this.state)
    }
    e.preventDefault();
  }
  render() {
    const { auth, authError } = this.props;

    if (auth.uid) return <Redirect to='/signin' />

    return (
      (this.props.auth.isLoaded==false)?<Spinner/>:
      <div className="container-fluid d-flex  align-items-center  justify-content-center mainContainer">
   
        <div className="Image d-lg-block col-lg-6  d-none mr-5 ">
           <img src={require("../assets/images/signIn.png")}  />
        </div>
        <div className="loginContainer col-lg-4 col-md-8 col-sm-10 ">
          <form className="text-dark align-middle text-center p-0 mt-5 " onSubmit={this.handleSubmit}>
              <p className="text">Sign Up</p>
              <input type="text" id="firstName" className="inputs col-10 mb-5 mt-3" placeholder="First Name"required onChange={this.handleChange}/>
              <input type="text" id="lastName" className="inputs col-10 mb-5 mt-3" placeholder="Last Name"required onChange={this.handleChange}/>
              <input type="email" id="email" className="inputs col-10 mb-5 mt-3" placeholder="Email ID"required onChange={this.handleChange}/>
              <input type="password" id="password" className="inputs col-10 mb-5" placeholder="Password" required onChange={this.handleChange}/>
              <input type="text" id="phNumber" className="inputs col-10 mb-5 mt-3" placeholder="Phone No"required onChange={this.handleChange}/>
              <button className="col-lg-4 loginBtn  col-sm-9 col-md-6 mt-2 mb-5">Sign Up</button>
          </form>
          <div className="text-center text-danger">
            { authError ? <p>{authError}</p> : null }
          </div>
        </div>
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
