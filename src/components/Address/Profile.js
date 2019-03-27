import React,{Component} from 'react'
import Address from './Address'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
class Profile extends Component{
    render(){
        if(this.props.profile){
            
            let {firstName,lastName,email,phNumber} = this.props.profile
            return(
                <div className="container mt-5">
                    <div className="row m-auto  pt-5">
                        <div className="col-md-8  p-5 m-auto border" style={{borderRadius:'3px',boxShadow:'0 2px 4px 0px', backgroundColor: '#ffffff'}}>
                            <div className="row ">
                                <div className="col-lg-3 col-12">
                                    <div className="card border-0" style={{width:"120px",height:"120px"}} >
                                    <img src={require('./1.png')}  className="rounded-circle h-100 w-100"/>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-12 overflow-auto place-content-start">
                                    <h5>{firstName+lastName}</h5>
                                    <p style={{fontFamily: 'Lato', color: '#9b9b9b'}}>{email}</p>
                                    <p style={{fontFamily: 'Lato', color: '#9b9b9b'}}>Mobile:{phNumber}</p>
                                </div>
                            </div>
                            <Address address = {this.props.address?this.props.address[0]:undefined}/>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return <div>None</div>
        }
         
        
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        profile: state.firebase.profile,
        user : state.firestore.ordered.users,
        address: state.firestore.ordered["/users/" + state.firebase.profile.userid + "/profile"]
        
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect((props,firebase)=>[
        { collection: `/users/${props.profile.userid}/profile` } ,
        { collection: 'users', doc: props.profile.userid}
]))(Profile);
 