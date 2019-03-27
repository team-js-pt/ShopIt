import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import '../assets/css/Navbar.css'
import SuperUserLinks from './SuperUserLinks';
let scrolled ="false";
class Navbar extends Component{
  componentDidMount(){
    var nav = document.getElementById('navbar');

    window.addEventListener('scroll',()=>{
    const isTop =window.scrollY < 63;
    if(isTop!== true){
      nav.classList.add("scrolled")
    }
    else{
      nav.classList.remove("scrolled")
    }
  });
  }
  render()
 {

  const { auth, profile } = this.props;
  const links = auth.uid ?(auth.email=="admin@gmail.com")?<SuperUserLinks profile={profile}/>: <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  
  
  return (
  <nav className="navbar navbar-expand-lg navbar-light  NavStyle w-100 pr-5">
  <Link to="/" className="navbar-brand pl-5 text-white anchor edge" >ShopIt</Link>
  <button className="navbar-toggler buttn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
    <div className="mr-auto"></div>
    {links}
  </div>
</nav>

   
  )
}}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)