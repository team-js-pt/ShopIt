import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
class Dashboard extends Component {
  render() {
    console.log(this.props.state.auth.Appliances);
    return (
      <div className="Appliance">
         <Item obj={this.props.state.ui.Appliances}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
   state
  }
}

export default connect(mapStateToProps)(Dashboard)
