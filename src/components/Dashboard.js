import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import { singleItemAdd } from '../store/actions/singleItemAction'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import './assets/css/Dashboard.css'
import Spinner from './Spinner';
// import { singleItemAdd } from '../store/actions/singleItemAction'
import { addToCart } from '../store/actions/cartActions'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: true,
      filteredArray: []
    }
  }
  handleChange = (event) => {
    if (event.target.value === "") {
      this.setState({
        filteredArray: [],
        query: true
      })
    }
    else {
      var val = event.target.value;
      const filteredData = []
      this.props.vegetables.filter(element => {
        if (element.productName.toLowerCase().includes(val.toLowerCase()) || element.description.toLowerCase().includes(val.toLowerCase()))
          filteredData.push(element);
      })


      this.props.footwear.filter(element => {
        if (element.productName.toLowerCase().includes(val.toLowerCase()) || element.description.toLowerCase().includes(val.toLowerCase()))
          filteredData.push(element);
      })
      this.props.sports.filter(element => {
        if (element.productName.toLowerCase().includes(val.toLowerCase()) || element.description.toLowerCase().includes(val.toLowerCase()))
          filteredData.push(element);
      })
      this.props.mobiles.filter(element => {
        if (element.productName.toLowerCase().includes(val.toLowerCase()) || element.description.toLowerCase().includes(val.toLowerCase()))
          filteredData.push(element);
      })
      this.props.beauty.filter(element => {
        if (element.productName.toLowerCase().includes(val.toLowerCase()) || element.description.toLowerCase().includes(val.toLowerCase()))
          filteredData.push(element);
      })
      this.props.appliances.filter(element => {
        if (element.productName.toLowerCase().includes(val.toLowerCase()) || element.description.toLowerCase().includes(val.toLowerCase()))
          filteredData.push(element);
      })
      this.props.clothing.filter(element => {
        if (element.productName.toLowerCase().includes(val.toLowerCase()) || element.description.toLowerCase().includes(val.toLowerCase()))
          filteredData.push(element);
      })
      this.setState({
        filteredArray: filteredData,
        query: false
      })
    }
  }
  render() {

    const { auth, vegetables } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />

    return (
      (this.props.vegetables == undefined) ? <Spinner /> :
        <div className="container mainDashboard flex-grow-1 flex-column" >
          <div className="row">
            <div className="search col-12 d-flex flex-row">
              <span className="icon-search-icon pt-3 pr-1"></span>
              <input type="text" id="search" className="search_input input" placeholder="Search an Item..." onChange={(e) => this.handleChange(e)}></input>
            </div>
            {
              (this.state.query) ? (
                <div>


                  <div className="row my-2 ">
                    <div className="container">

                      <MDBContainer>
                        <MDBCarousel activeItem={1} length={3} interval={2000} showControls={true} showIndicators={true} className="z-depth-1">
                          <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                              <MDBView>
                                <img src={require('./assets/images/slider1.jpg')} class="d-block w-100" alt="..." />
                                <MDBMask overlay="black-light" />
                              </MDBView>

                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                              <MDBView>
                                <img src={require('./assets/images/slider2.jpg')} class="d-block w-100" alt="..." />
                                <MDBMask overlay="black-strong" />
                              </MDBView>

                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                              <MDBView>
                                <img src={require('./assets/images/slider3.jpg')} class="d-block w-100" alt="..." />
                                <MDBMask overlay="black-slight" />
                              </MDBView>

                            </MDBCarouselItem>

                          </MDBCarouselInner>
                        </MDBCarousel>
                      </MDBContainer>
                    </div>
                  </div>

                  <div className="row m-auto ">
                    {this.props.ui.map((value, index) => {
                      return (
                        <div className="col-lg-3 col-sm-6 my-3 " key={index}>
                          <div className="card cardStyles" >
                            <Link to={"/" + value.name}><img src={require(`./assets/images/${value.pic}`)} className="card-img-top w-100  cardImage" alt={value.name} /></Link>
                            <div className="card-body text-center align-middle ">
                              <p className="card-title cardName">{value.name}</p>
                  
                            </div>
                            </div>
                          </div>
                        )
                      })}
                   </div>
                </div>
              ) : (
                  <div className="col-12">
                    <div className="row">
                      {
                        this.state.filteredArray.map((val, ind) => {
                          return (
                            <div className="col-lg-3 col-md-6 my-4" key={ind}>
                             
                                <div className="card mx-3"  style={{ borderColor: "rgba(0,0,0,0.14)", boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)", borderRadius: "3px", height: "295px", width: "240px" }}>
                                <Link to={`/${val.category}/${val.id}`} style={{ textDecoration: 'none', color: 'black' }}><img className="card-img-top pt-3" src={val.url} alt="Card image cap" onClick={() => { this.props.singleItemAdd(val) }} style={{ height: "160px" }} /> </Link>
                                  <div className="card-body" style={{ height: "135px" }}>
                                    <h5 className="card-title" style={{ color: "#4a4a4a", fontSize: "30px", fontWeight: "300", fontFamily: "Lato", width: "200px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: " ellipsis" }}>{val.productName}</h5>
                                    <div className="card-text d-flex justify-content-between align-items-center">
                                      <div><div style={{ color: "#4a4a4a", fontSize: "14px", fontWeight: "500", fontFamily: "Lato" }}>Rs: {val.price}$</div>
                                        <div style={{ color: "#4a4a4a" }}>{val.offer}%<sub style={{ color: "red" }}>off</sub></div></div>
                                      <button className="border rounded-circle" onClick={() => { this.props.addToCart(val, this.props.profile.userid) }} style={{outline:'none',backgroundColor: "#008081", color: 'white', fontSize: '22px', fontWeight: 'bolder', outline: 'none' }}>+</button>
                                    </div>
                                    
                                  </div>
                                 
                                </div>
                             
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                )
            }


          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    vegetables: state.firestore.ordered.vegetables,
    footwear: state.firestore.ordered.footwear,
    sports: state.firestore.ordered.sports,
    mobiles: state.firestore.ordered.mobiles,
    beauty: state.firestore.ordered.beauty,
    appliances: state.firestore.ordered.appliances,
    clothing: state.firestore.ordered.clothing,
    ui: state.ui.items,
    profile: state.firebase.profile
  }
}
const mapDispatchToProps = (dispatch) => ({
  addToCart: (payload, userid) => dispatch(addToCart(payload, userid)),
  singleItemAdd: (payload) => dispatch(singleItemAdd(payload)),

})

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([
    { collection: 'vegetables', orderBy: ['addedOn', 'desc'] },
    { collection: 'footwear', orderBy: ['addedOn', 'desc'] },
    { collection: 'sports', orderBy: ['addedOn', 'desc'] },
    { collection: 'mobiles', orderBy: ['addedOn', 'desc'] },
    { collection: 'beauty', orderBy: ['addedOn', 'desc'] },
    { collection: 'appliances', orderBy: ['addedOn', 'desc'] },
    { collection: 'clothing', orderBy: ['addedOn', 'desc'] }
  ])
)(Dashboard)

