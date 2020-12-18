import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/home/Home';
import Store from './pages/store/store';
import LoginRegister from './pages/login-register/login-register';

import {auth, createUserProfileDocument} from './firebase/firebase';

import './App.css';



class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
           this.setState({
             currentUser: {
               id: snapShot.id,
               ...snapShot.data()
             }
           });
        });
        
      } else {
        this.setState({currentUser: userAuth});
      }
      
  
    })
  }

 componentWillUnmount() {
   this.unsubscribeFromAuth();
 }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/store' component={Store}/>
        <Route exact path='/login' component={LoginRegister}/>
      </div>
    );
  }
  
}

export default App;
