import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import HelloWorld from "./hello";
import HomePage from "./HomePage";
import Search from "./Search";
import ProfileScreen from "./Users/profile-screen";
import AdminScreen from "./Users/admin-screen";
import LoginScreen from "./Users/login-screen";
import {Provider} from "react-redux";
import store from "./Users";
import RegisterScreen from "./Users/register-screen";


function App() {
  return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/search" element={<Search/>}/>
              <Route path="/hello" element={<HelloWorld/>}/>
              <Route path="/login" element={<LoginScreen/>}/>
              <Route path="/profile" element={<ProfileScreen/>}/>
              <Route path="/admin" element={<AdminScreen/>}/>
              <Route path="/register" element={<RegisterScreen/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
