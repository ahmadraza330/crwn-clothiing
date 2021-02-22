import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';


function App() {
  return (
      <div>
        <Header/>
        <Switch>
        <Route path="/" component={ Homepage} exact={true}/>
        <Route path="/shop" component={ShopPage}/>
        </Switch>
    </div>
 
  );
}

export default App;
