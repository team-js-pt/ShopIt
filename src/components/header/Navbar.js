import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import '../assets/css/Navbar.css'
import SuperUserLinks from './SuperUserLinks';
const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ?(auth.email=="admin@gmail.com")?<SuperUserLinks profile={profile}/>: <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <nav className="navbar navbar-expand-lg navbar-fixed-top m-0 p-3 ">
    
      <div className="container-fluid d-flex ">
        <Link to='/' className=" mb-0 h2 text-white text-decoration-none textStyles">ShopIt</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)