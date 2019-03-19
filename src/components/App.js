import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import Navbar from './header/Navbar';
import AddProduct from './products/AddProduct';

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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
