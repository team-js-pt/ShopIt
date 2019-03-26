import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import '../assets/css/Navbar.css'
import SuperUserLinks from './SuperUserLinks';
let scrolled ="false";
const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ?(auth.email=="admin@gmail.com")?<SuperUserLinks profile={profile}/>: <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  var nav = document.getElementById('navbar');

  window.addEventListener('scroll',()=>{
    console.log(window.scrollY)
    const isTop =window.scrollY < 63;
    if(isTop!== true){
       nav.className="navbar navbar-expand-lg navbar-fixed-top m-0 px-3 scrolled";
    }
    else{
      nav.className="navbar navbar-expand-lg navbar-fixed-top m-0 px-3 ";
    }
  })
 
  return (
    
    <nav className="navbar navbar-expand-lg navbar-fixed-top m-0 px-3" id="navbar" >
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