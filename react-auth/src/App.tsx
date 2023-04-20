import React from 'react';
import './App.css';
import Login from './pages/Login';
import Nav from './components/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
        {/* Navbar */}
      <Nav />

        {/* Form */}
      <main>
        <BrowserRouter>
          <Route path='/' Component={Home}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/register' Component={Register}></Route>
        </BrowserRouter>
        <Login />
      </main>
    </div>
  );
}

export default App;
