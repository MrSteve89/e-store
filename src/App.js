import React from 'react';
import {Route} from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/home/Home';
import Store from './pages/store/store';
import LoginRegister from './pages/login-register/login-register';

import './App.css';



function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={Home}/>
      <Route exact path='/store' component={Store}/>
      <Route exact path='/login' component={LoginRegister}/>
    </div>
  );
}

export default App;
