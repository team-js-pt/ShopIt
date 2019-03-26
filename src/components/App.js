import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import Navbar from './header/Navbar';
import AddProduct from './products/AddProduct';
import AddToCart from './cart/AddToCart'
import Vegetables from "./products/Vegetables"
import Sports from './products/Sports';
import Mobiles from './products/Mobiles'
import Beauty from './products/Beauty'
import Appliances from './products/Appliances'
import Singleitem from './products/Singleitem'
import Footwear from './products/Footwear'
import NotFound from './auth/NotFound'
import Clothing from './products/Clothing'
import Profile from './Address/Profile';
import PlaceOrder from './cart/PlaceOrder';

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
            <Route path='/vegetables' exact component={Vegetables}/>
            <Route path='/sports' exact component={Sports}/>
            <Route path='/mobiles' exact component={Mobiles}/>
            <Route path='/beauty' exact component={Beauty}/>
            <Route path='/appliances' exact component={Appliances}/>
            <Route path='/footwear' exact component={Footwear}/>
            <Route path='/clothing' exact component={Clothing}/>
            <Route path='/singleitem' component={Singleitem}/>
            <Route path='/vegetables/:id' component={Singleitem}/>
            <Route path='/appliances/:id' component={Singleitem}/>
            <Route path='/footwear/:id' component={Singleitem}/>
            <Route path='/beauty/:id' component={Singleitem}/>
            <Route path='/mobiles/:id' component={Singleitem}/>
            <Route path='/sports/:id' component={Singleitem}/>
            <Route path='/clothing/:id' component={Singleitem}/>
            <Route path='/profile' component ={Profile}/>
            <Route path='/placeorder' component ={PlaceOrder}/>
            <Route component={NotFound}/>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
