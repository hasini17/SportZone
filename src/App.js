import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Tournaments from './Components/Pages/Tournaments';
import Houses from './Components/Pages/Houses';
import Schedules from './Components/Pages/Schedules';
import Contact from './Components/Pages/Contact';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/tournaments' component={Tournaments}/>
        <Route path='/houses' component={Houses}/>
        <Route path='/schedules' component={Schedules}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/sign-up' component={SignUp}/>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;