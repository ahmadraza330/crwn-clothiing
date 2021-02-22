import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import {Route, Switch} from 'react-router-dom';

const Htas = () => {
  return(
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
      <div>
        <Switch>
        <Route path="/" component={ Homepage} exact={true}/>
        <Route path="/shop/hats" component={Htas}/>
        </Switch>
    </div>
 
  );
}

export default App;
