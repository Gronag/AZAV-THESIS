import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import { Animals } from "./pages/Animals";
import { Calculator } from "./pages/Calculator";
import { Storage } from "./pages/Storage";
import { Navbar } from "./Navbar";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("David Comp")
  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logIn" element={<LogIn />} />
            <Route path="/animels" element={<Animals />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
