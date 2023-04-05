import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import PoemsTable from './Components/PoemsTable';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import ShowPoemContainer from './Components/ShowPoemContainer';

function App() {
  return (
    <div>
      <div className="major-column">
        <Navbar />
        <PoemsTable />
      </div>
      <div className="major-column">
        <ShowPoemContainer />
      </div>
    </div>
  );
}

export default App;
