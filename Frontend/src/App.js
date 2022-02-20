import './App.css';
import Right from './components/javascript/Right'
import Left from './components/javascript/Left'
import List from './components/javascript/List'
import Ok from './components/javascript/Ok';
import Navbar from './components/javascript/Navbar';
import Home from './components/javascript/Home';
import AddGroup from './components/javascript/AddGroup';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import JoinGroup from './components/javascript/JoinGroup';

 function App() {
  return (
    <>
    <Left/>
    <Right/>
    <Ok/>
    <Router>
      <List/>
      <Navbar/>
      <Routes>
          <Route path="/addgroup" element={<AddGroup/>}>
          </Route>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/joingroup" element={<JoinGroup/>}>
          </Route>
        </Routes>
      </Router>
    </>
  )
}
export default App;
