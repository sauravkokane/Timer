import React, { useState } from "react";
import DateSetter from "./Components/DateSetter.tsx";
import Clock from "./Components/Clock.tsx";
import Stopwatch from "./Components/Stopwatch.tsx";
import NavigationBar from "./Components/NavigationBar.tsx";
import Footer from "./Components/Footer.tsx";
import './Static/styles/App.css';

function App() {
  const [navbarSelection, setNavbarSelection] = useState("Clock");
  return (
    <div className="app-body">
      <NavigationBar className="nav-bar" setNavbarSelection={setNavbarSelection} />
      <div className="app">
        {navbarSelection === 'Timer' && <DateSetter />}
        {navbarSelection === 'Clock' && <Clock />}
        {navbarSelection === 'Stopwatch' && <Stopwatch />}
      </div>

      <Footer className="footer" />
    </div>
  );
}

export default App;
