import React, { Component } from 'react'
import { MDBCarousel,  MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from "mdbreact";
import { Link } from 'react-router-dom'
import './assets/css/Onload.css';
export default class Onload extends Component {
  render() {
    return (
      <div className="container-fluid p-0 m-0 w-100 bg-dark onload" >
        <div className="carouselOverlay" >
        <div className="shopBtn  mr-5 mt-2">
        <Link to='/Dashboard' className="ShopNow  text-white btn font-weight-bold">Shop Now</Link>
        </div>
                        <MDBCarousel activeItem={1} length={4} interval={6000}  className="z-depth-3 " >
                          <MDBCarouselInner >
                            <MDBCarouselItem itemId="1" >
                              <MDBView >
                             
                                <img src={require('./assets/images/one.jpeg')} className="d-block w-100" alt="..." style={{height:'100vh',opacity:0.4}}/>
                                <MDBMask overlay="black-light" />
                              </MDBView>

                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                              <MDBView>
                                <img src={require('./assets/images/two.jpeg')} className="d-block w-100" alt="..." style={{height:'100vh',opacity:0.4}}/>
                                <MDBMask overlay="black-strong" />
                              </MDBView>

                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                              <MDBView>
                                <img src={require('./assets/images/three.jpeg')} className="d-block w-100" alt="..." style={{height:'100vh',opacity:0.4}}/>
                                <MDBMask overlay="black-slight" />
                              </MDBView>

                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="4">
                              <MDBView>
                                <img src={require('./assets/images/four.jpeg')} className="d-block w-100" alt="..." style={{height:'100vh',opacity:0.6}}/>
                                <MDBMask overlay="black-slight" />
                              </MDBView>

                            </MDBCarouselItem>

                          </MDBCarouselInner>
                        </MDBCarousel>
        </div>
        </div>
    )
  }
}
