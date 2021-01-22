import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/home/Home';
import Store from './pages/store/store';
import LoginRegister from './pages/login-register/login-register';

import {auth, createUserProfileDocument} from './firebase/firebase';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-actions';
import './App.css';



class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
           setCurrentUser({
               id: snapShot.id,
               ...snapShot.data()
           });
        });
        
      } else {
        setCurrentUser(userAuth);
      }
      
  
    })
  }

 componentWillUnmount() {
   this.unsubscribeFromAuth();
 }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/store' component={Store}/>
          <Route exact path='/login' render={()=>this.props.currentUser ? (<Redirect to='/'/>) : (<LoginRegister />)}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
