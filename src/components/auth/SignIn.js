import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import '../assets/css/SignIn.css'
import Spinner from '../Spinner'
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
        e.target.reset();
        this.props.signIn(this.state)
    }
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/Dashboard' />
        return (
            (this.props.auth.isLoaded==false)?<Spinner/>:
            <div className="container-fluid d-flex  align-items-center  justify-content-center mainContainer">

                <div className="Image  d-lg-block col-lg-6  d-none mr-5 ">
                    <img src={require("../assets/images/signIn.png")} />
                </div>
                <div className="loginContainer col-lg-4 col-md-8 col-sm-10 ">
                    <form className="text-dark  text-center p-0 mt-5 " onSubmit={this.handleSubmit}>
                        <p className="text mb-5">Login</p>
                        <input type="email" id="email" className="inputs col-10 mb-5 mt-3" placeholder="Email" onChange={this.handleChange} required />
                        <input type="password" id="password" className="inputs col-10 mb-5" placeholder="Password" onChange={this.handleChange} required />
                        <input type="submit"  value="Sign In" className="col-lg-4 loginBtn  col-sm-9 col-md-6 mt-2 mb-5"/>
                    </form>
                    <div className="text-center text-danger">
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </div>


            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
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