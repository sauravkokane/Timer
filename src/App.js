import DateSetter from "./Components/DateSetter.tsx";
import NavigationBar from "./Components/NavigationBar.tsx";
import Footer from "./Components/Footer.tsx";
import './Static/styles/App.css';

function App() {
  return (
    <div className="app-body">
      <NavigationBar className="nav-bar" />
      <div className="app">
        <DateSetter />
      </div>

      <Footer className="footer" />
    </div>
  );
}

export default App;
