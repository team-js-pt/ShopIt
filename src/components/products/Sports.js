import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
class Sports extends Component {
  render() {
    return (
      <div className="Sports">
         <Item obj={this.props.state.ui.sports}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
   state
  }
}
export default connect(mapStateToProps)(Sports)