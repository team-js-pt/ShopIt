import React,{Component} from 'react'
import Addres from './Addres'
class Profile extends Component{
    render(){
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
                                <h5>Shopit</h5>
                                <p style={{fontFamily: 'Lato', color: '#9b9b9b'}}>Shopitdfshdfshjestjtr@gmail.com</p>
                                <p style={{fontFamily: 'Lato', color: '#9b9b9b'}}>Mobile:0000000000</p>
                            </div>
                        </div>
                        <Addres/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;