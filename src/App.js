import React from 'react'
import './App.css';
import ScoresData from './components/ScoresData';
import WeatherData from './components/WeatherData';
import Home from './components/Home';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="/scoresdata">ScoresData</a>
        <a class="nav-link" href="/weatherdata">WeatherData</a> 
      </div>
    </div>
  </div>
</nav>
      <Router>
      <Route exact path='/' component={Home}/>
      <Route exact path='/scoresdata' component={ScoresData}/>
      <Route exact path='/weatherdata' component={WeatherData}/>
      </Router>
      
      
    </div>
  )
}

export default App;



