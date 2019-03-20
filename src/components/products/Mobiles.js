import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
class Mobiles extends Component {
  render() {
    return (
      <div className="Mobiles">
         <Item obj={this.props.state.ui.mobiles}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
   state
  }
}

export default connect(mapStateToProps)(Mobiles)