// app.js
import React,{ useState } from "react";
import { BrowserRouter, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Taskbar from "./components/Taskbar.jsx";
import './App.css';
import Home from "./Pages/Home.jsx";
import Customer from "./Pages/Customer.jsx";
import Membership from "./Pages/Membership.jsx";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter className="root">
      <Taskbar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/customers" element={<Customer />}/>
          <Route path="/memberships" element={<Membership />}/>
        </Routes>
      </Taskbar>
    </BrowserRouter>
  );
};

export default App;
