import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class NotFound extends Component {
  render() {
    return (
      <div className="col-12">
        <Link to='/'><img src="../assets/images/pagenotfound.jpeg"/></Link>
      </div>
    )
  }
}
