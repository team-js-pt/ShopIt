import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
class Footwear extends Component {
  render() {
    return (
      <div className="Footwear">
         <Item obj={this.props.state.ui.sandals}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
   state
  }
}

export default connect(mapStateToProps)(Footwear)