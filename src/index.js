import React, { useState } from 'react';
import { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Stating from './Stating'
import App from './App';
import Setting from './Setting'
import Form from './Form';
import ChangeName from './Names';
import Options from './Options'
import Count from './Count';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
import Bootstrap from './Bootstrap';
import Contexting from './Contexting';
import Login from './Login';
import SignUp from './SignUp';
import Boiling from './Boiling';
import Component  from './Component';

//creating the Context
ReactDOM.render(
    <React.StrictMode>
       <Router>
        <Switch>
          <Route path='/stating' exact><Stating /></Route>
          <Route path='/form' exact><Form /></Route>
          <Route path='/component' exact><Component /></Route>
          <Route path='/option' exact><Options/></Route>
          <Route path='/contexting' exact><Contexting/></Route>
          <Route path='/home' exact><Bootstrap /></Route>
          <Route path='/' exact><Login /></Route>
          <Route path='/signup' exact><SignUp /></Route>
          {/* <Route path='/boiling' exact><Boiling /></Route> */}
        </Switch>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );





