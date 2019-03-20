import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
class Vegetables extends Component {
  render() {
    return (
      <div className="Vegetables">
         <Item obj={this.props.state.ui.vegetables}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
   state
  }
}

export default connect(mapStateToProps)(Vegetables)