import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SigninSignUp from './pages/SigninSignUp';


function App() {
  return (
      <div>
        <Header/>
        <Switch>
        <Route path="/" component={ Homepage} exact={true}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={SigninSignUp}/>
        </Switch>
    </div>
 
  );
}

export default App;
