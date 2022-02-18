import './App.css';
import Right from './components/Right'
import Left from './components/Left'
import List from './components/List'
import Ok from './components/Ok';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddGroup from './components/AddGroup';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import JoinGroup from './components/JoinGroup';

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