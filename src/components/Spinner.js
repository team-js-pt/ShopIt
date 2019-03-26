import React,{Component} from 'react';
import Loader from 'react-loader-spinner'
  class Spinner extends Component {
    render() {
        return(
        <div className="w-100 d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
          <Loader type="Bars" color="#027272" height="100" width="100"/> 
        </div>  
        );
       }
    }
export default Spinner;