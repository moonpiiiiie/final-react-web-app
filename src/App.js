import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import HelloWorld from "./hello";
import HomePage from "./HomePage";
import Search from "./Search";
import ProfileScreen from "./Profile/profile-screen";
import ProfileUidScreen from "./Profile/profile-screen-uid";
import AdminScreen from "./Users/admin-screen";
import LoginScreen from "./Users/login-screen";
import {Provider} from "react-redux";
import store from "./store";
import RegisterScreen from "./Users/register-screen";
import Detail from "./Detail";
import React from "react";
import Nav from "./nav";
import CurrentUserContext from "./current-user-context";


function App() {
  return (
      <Provider store={store}>
          <CurrentUserContext>
              <BrowserRouter>
                  <div className="container">
                      <Nav/>
                      <Routes>
                          <Route path="/" element={<HomePage/>}/>
                          <Route path="/search/*" element={<Search/>}/>
                          <Route path="/detail/:id" element={<Detail/>}/>
                          <Route path="/hello" element={<HelloWorld/>}/>
                          <Route path="/login" element={<LoginScreen/>}/>
                          <Route path="/profile" element={<ProfileScreen/>}/>
                          <Route path="/profile/:uid" element={<ProfileUidScreen/>}/>
                          <Route path="/admin" element={<AdminScreen/>}/>
                          <Route path="/register" element={<RegisterScreen/>}/>
                      </Routes>
                  </div>
              </BrowserRouter>
          </CurrentUserContext>
      </Provider>
  );
}

export default App;
