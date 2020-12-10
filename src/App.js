import React from 'react';
import {Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Store from './pages/store/store';
import Header from './components/header/header';
import './App.css';



function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={Home}/>
      <Route exact path='/store' component={Store}/>
    </div>
  );
}

export default App;
