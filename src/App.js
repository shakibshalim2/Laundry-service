import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';

import Login from './Components/Login/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Review from './Components/Dashboard/Dashboard/Review/Review';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import BookAService from './Components/BookAService/BookAService';
import AddService from './Components/Dashboard/AddService/AddService';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/dashboard/review'>
            <Review></Review>
          </Route>
          <PrivateRoute path='/dashboard/service/:id'>
            <BookAService></BookAService>
          </PrivateRoute>
          <Route path="/dashboard/serviceList">
            <ServiceList></ServiceList>
          </Route>

          <Route path='/dashboard/addService'>
            <AddService></AddService>
          </Route>
          <Route path="/dashboard/">
            <Dashboard></Dashboard>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
