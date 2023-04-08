import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import HelloWorld from "./hello";
import HomePage from "./HomePage";
import Profile from "./profile";
import Search from "./Search";
import SearchCriteria from "./Search/search-criteria";
import Detail from "./Detail";

function App() {
  return (
          <BrowserRouter>
            <div className="container">
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                    <Route path="/search" element={<Search/>}/>
                  <Route path="/search/:zip/:searchContext" element={<SearchCriteria/>}/>
                  <Route path="/detail/:id" element={<Detail/>}/>
                  {/*<Route path="/*" element={<Labs/>}/>*/}
                 <Route path="/hello" element={<HelloWorld/>}/>
              </Routes>
            </div>
          </BrowserRouter>
  );
}

export default App;
