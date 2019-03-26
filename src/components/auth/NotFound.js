import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class NotFound extends Component {
  render() {
    return (
      <div className="container ">
        <div className="col-12 pt-3">
          <Link to='/'><img src={require("../assets/images/PageNotFound.jpg")} className="col-12" /></Link>
        </div>
       
      </div>
    )
  }
}
