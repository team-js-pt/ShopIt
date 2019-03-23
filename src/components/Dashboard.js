import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Link} from 'react-router-dom'
import { singleItemAdd } from '../store/actions/singleItemAction'
import './assets/css/Dashboard.css'

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      query:true,
      filteredArray:[]
    }
  }
  singleItemAdd = (val) => {
    this.props.dispatch(singleItemAdd(
        { selected: val }
    ))
}
  handleChange = (event)=>{
    if(event.target.value===""){
      this.setState({
        filteredArray:[],
        query:true
      })
    }
    else {
      var val= event.target.value;   
      const filteredData=[]  
       this.props.vegetables.filter(element => {
            if( element.productName.toLowerCase().includes(val.toLowerCase()) || element.description.toLowerCase().includes(val.toLowerCase()))
                 filteredData.push(element);
            })
            
          
      this.props.footwear.filter(element => {
              if( element.productName.toLowerCase().includes(val.toLowerCase()) || element.description.toLowerCase().includes(val.toLowerCase()))
                   filteredData.push(element);
              })  
      this.props.sports.filter(element => {
        if( element.productName.toLowerCase().includes(val.toLowerCase()) || element.description.toLowerCase().includes(val.toLowerCase()))
              filteredData.push(element);
      })  
      this.props.mobiles.filter(element => {
        if( element.productName.toLowerCase().includes(val.toLowerCase()) || element.description.toLowerCase().includes(val.toLowerCase()))
              filteredData.push(element);
      })
      this.props.beauty.filter(element => {
        if( element.productName.toLowerCase().includes(val.toLowerCase()) || element.description.toLowerCase().includes(val.toLowerCase()))
              filteredData.push(element);
      })
      this.props.appliances.filter(element => {
        if( element.productName.toLowerCase().includes(val.toLowerCase()) || element.description.toLowerCase().includes(val.toLowerCase()))
              filteredData.push(element);
      })
      this.props.clothing.filter(element => {
        if( element.productName.toLowerCase().includes(val.toLowerCase()) || element.description.toLowerCase().includes(val.toLowerCase()))
              filteredData.push(element);
      })
      this.setState({
        filteredArray:filteredData,
        query:false
      })
   }
  }
  render() {
    const { auth,vegetables} = this.props;
    // console.log(this.props.mobiles)
    let veg = vegetables&&vegetables.map(veg=>{
      return (<div key={veg.id}>{veg.description}</div>);
    })
     if (!auth.uid) return <Redirect to='/signin' /> 
   
    return (
      <div className="container-fluid mainDashboard flex-grow-1 flex-column" >
        <div className="row">
          <div className="container">
          <div className="search-wrapper search col-sm-12">
          
              <input type="text" id="search" className="search_input input" placeholder="Search an Item..."  onChange={(e)=>this.handleChange(e)}></input>
          </div>
          {
            (this.state.query)?(
              <div>
              <div className="row my-2 ">
                <div className="container">
                  <div className="col-md-12 col-lg-12  pt-4 carousel_display">
                      <div className="carousel slide m-0 p-0" data-ride="carousel">
                          <div className="carousel-inner p-0">
                              <div className="carousel-item active">
                                  <img    src={require('./assets/images/img1.jpeg')} alt="img2" className="carousel_image" ></img>
                              </div>

                              <div className="carousel-item">
                              <img src={require('./assets/images/img2.jpeg')} alt="img1" className="carousel_image" />
                                 
                              </div>
                              <div className="carousel-item">
                                  <img src={require('./assets/images/img3.jpeg')} alt="img3" className="carousel_image" ></img>
                              </div>
                          </div>
                      </div>
                      </div>
                  </div> 
              </div>
              <div className="row m-auto ">
                {this.props.ui.map((value,index)=>{
                      return(
                          <div className="col-lg-3 col-sm-6 my-3 " key={index}>
                              <div className="card cardStyles" >
                              <Link to={"/"+value.name}><img src={require(`./assets/images/${value.pic}`)} className="card-img-top w-100 cardImage" alt={value.name} /></Link>
                                  <div className="card-body text-center pt-5">
                                      <p className="card-title">{value.name}</p>
                                  </div>
                              </div>
                          </div>
                      )
                  })}
              </div> 
              </div>
            ):(
              <div className="row ">
              <div className="col-12">
             
              <div className="row">
              
                  {
                    this.state.filteredArray.map((val,ind)=>{
                      return(
                    <div className="col-lg-3 col-md-6 my-4" key={ind}>
                        <Link to={`/${val.category}/${val.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="card mx-3" onClick={()=>{this.singleItemAdd(val)}}  style={{borderColor:"rgba(0,0,0,0.14)",boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",borderRadius:"3px",height:"295px",width:"240px"}}>
                          <img className="card-img-top" src={val.url} alt="Card image cap" style={{height:"160px"}}/>
                          <div className="card-body" style={{height:"135px"}}>
                            <h5 className="card-title" style={{color: "#4a4a4a",fontSize:"30px",fontWeight:"300",fontFamily:"Lato",width:"200px",whiteSpace:"nowrap",overflow:"hidden", textOverflow:" ellipsis"}}>{val.productName}</h5>
                            <p className="card-text d-flex justify-content-between align-items-center">
                               <div><div style={{color: "#4a4a4a",fontSize:"14px",fontWeight:"500",fontFamily:"Lato"}}>Rs: {val.price}$</div>
                               <div style={{color: "#4a4a4a"}}>{val.offer}%<sub style={{color:"red"}}>off</sub></div></div>
                               <button className="border rounded-circle" style={{backgroundColor: "#008081",color:'white',fontSize:'22px',fontWeight:'bolder'}}>+</button>
                            </p>
                            <div className="d-flex justify-content-end"></div>
                          </div>
                        </div>
                        </Link>
                    </div>
                    )
                    })
                  }
              </div>
                 
              </div>
          </div>
            )
          }
              
          
          </div>
        </div>
       
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    vegetables : state.firestore.ordered.vegetables,
    footwear : state.firestore.ordered.footwear,
    sports : state.firestore.ordered.sports,
    mobiles : state.firestore.ordered.mobiles,
    beauty : state.firestore.ordered.beauty,
    appliances: state.firestore.ordered.appliances,
    clothing: state.firestore.ordered.clothing,
    ui : state.ui.items
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'vegetables', orderBy: ['addedOn', 'desc']},
    { collection: 'footwear',  orderBy: ['addedOn', 'desc']},
    { collection: 'sports', orderBy:['addedOn', 'desc']},
    { collection: 'mobiles', orderBy:['addedOn', 'desc']},
    { collection: 'beauty', orderBy:['addedOn', 'desc']},
    { collection: 'appliances', orderBy:['addedOn', 'desc']},
    { collection: 'clothing', orderBy:['addedOn', 'desc']}
  ])
)(Dashboard)

