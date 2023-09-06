import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Signin} />
          <Route path="/signup" Component={Signup} />
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
