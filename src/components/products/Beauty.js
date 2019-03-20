import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
class Beauty extends Component {
  render() {
    return (
      <div className="Beauty">
         <Item obj={this.props.state.ui.beauty}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
   state
  }
}

export default connect(mapStateToProps)(Beauty)