import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SigninSignUp from './pages/SigninSignUp';
import { auth, createserProfileDocument } from './firebase/firebase.utils';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
 this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
   if(userAuth) {
     const useRef = await createserProfileDocument(userAuth);
     useRef.onSnapshot(snapShot => {
      this.setState({
        currentUser: {
          id: snapShot.id,
          ...snapShot.data()
        }
      })
     });
     
   }
   this.setState({currentUser: userAuth});
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
