import React from 'react';
import {Route} from 'react-router-dom';
import Home from './pages/home/Home';
import './App.css';


const Hats = () => {
  return (
    <div>
      <h1>HATS</h1>
    </div>
  );
  
}

function App() {
  return (
    <div>
      <Route exact path='/' component={Home}/>
      <Route exact path='/shop/hats' component={Hats}/>
    </div>
  );
}

export default App;
