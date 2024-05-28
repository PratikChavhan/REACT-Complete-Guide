import AppName from "./components/AppName";
import Clock from "./components/Clock";
import AppSlogan from "./components/AppSlogan";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <AppName></AppName>
      <div className="item">
        <AppSlogan></AppSlogan>
      </div>
      <div className="item">  
        <Clock></Clock>
      </div>
    </div>
  )
}

export default App
