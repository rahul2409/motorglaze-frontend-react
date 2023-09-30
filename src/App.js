// app.js
import React,{ useState } from "react";
import { BrowserRouter as Router} from "react-router-dom";
// import Users from "./components/shopOwner/users.js";
import Taskbar from "./components/shopOwner/Taskbar.js";
import Login from "./components/login.js";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>     
        {/* {isLoggedIn ? ( */}
          <div>
            <Taskbar />
            {/* <Users /> */}
          </div>
        {/* ) : (
          <Login handleLogin={handleLogin} />
        )} */}
      </div>
    </Router>
  );
};

export default App;
