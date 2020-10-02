/* eslint-disable */
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom' 
import {User} from './components/User'
import {Login} from './components/Login'
import {Client} from './components/Client'
import {Log} from './components/Log'
import {Deposit} from './components/Deposit'
import {Withdraw} from './components/Withdraw'
import {Menu} from './components/Menu'
import {Account} from './components/Account'
import {Navbar} from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container p-4">
        <Switch>
          <Route path="/client" component={Client}></Route>
          <Route path="/log" component={Log}></Route>
          <Route path="/deposit" component={Deposit}></Route>
          <Route path="/menu" component={Menu}></Route>
          <Route path="/withdraw" component={Withdraw}></Route>
          <Route path="/account" component={Account}></Route>
          <Route path="/" component={Login}></Route>
        </Switch>
      </div> 
       
    </Router>
  );
}

export default App;
