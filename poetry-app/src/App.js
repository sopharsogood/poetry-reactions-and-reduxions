import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Navbar from './Components/Navbar';
import PoemsTable from './Components/PoemsTable';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Route exact path="/" component={PoemsTable} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
      </Router>
    </div>
  );
}

export default App;
