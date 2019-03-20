import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import Navbar from './header/Navbar';
import AddProduct from './products/AddProduct';
import AddToCart from './cart/AddToCart'
import InitialPage from '../DashBoard_Components/InitialPage';
import Vegetables from "./products/Vegetables"
import Sports from './products/Sports';
import Mobiles from './products/Mobiles'
import Beauty from './products/Beauty'
import Appliance from './products/Appliance'
import Singleitem from './products/Singleitem'
import Footwear from './products/Footwear'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/addproduct' component={AddProduct}/>
            <Route path='/cart' component={AddToCart}/>
            <Route path='/InitialPage' component={InitialPage}/>
            <Route path='/Vegetables' component={Vegetables}/>
            <Route path='/Sports' component={Sports}/>
            <Route path='/Mobiles' component={Mobiles}/>
            <Route path='/Beauty' component={Beauty}/>
            <Route path='/Appliance' component={Appliance}/>
            <Route path='/Footwear' component={Footwear}/>
            <Route path='/Singleitem' component={Singleitem}/>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
