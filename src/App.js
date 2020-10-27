import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import FoodDetail from './Components/FoodDetail/FoodDetail';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import AddCart from './Components/AddCart/AddCart';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    success: false,
    error: ''
  })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/food/:foodId'>
            <FoodDetail></FoodDetail>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <Signup></Signup>
          </Route>
          <PrivateRoute path='/cart'>
            <AddCart></AddCart>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
