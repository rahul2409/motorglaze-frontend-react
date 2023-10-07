// app.js
import React,{ useState } from "react";
import { BrowserRouter, Route, BrowserRouter as Router, Routes} from "react-router-dom";
// import Users from "./components/shopOwner/users.js";
import './App.css';
import Taskbar from './components/shopOwner/Taskbar.jsx';
import HomeComponent from "./HomeComponent.jsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter className="root">
      <Taskbar>
        <Routes>
          <Route path="/" element={<HomeComponent />}/>
        </Routes>
      </Taskbar>
    </BrowserRouter>
  );
};

export default App;
