import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Employees from "./components/Employees";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Employees />
    </div>
  );
}

export default App;
