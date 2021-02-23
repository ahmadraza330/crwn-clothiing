import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SigninSignUp from './pages/SigninSignUp';
import { auth } from './firebase/firebase.utils';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
 this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route path="/" component={Homepage} exact={true} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigninSignUp} />
        </Switch>
      </div>

    );
  }
}
export default App;
