import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'

import { Route, Switch} from 'react-icons'


function App() {
  return (
    <>
    <Route path="/" component={Home}></Route>
    <Route path="/rooms" component={Rooms}></Route>
    <Route path="/rooms/:slug" component={SingleRoom}></Route>
    <Error></Error>
    </>
  );
}

export default App;
