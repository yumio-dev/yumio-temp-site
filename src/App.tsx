import logo from './assets/yumio_logo_transparent.png';
import './App.css';
import one_liners from "./assets/one_liners.json";


const App: React.FC = () => {
  const getOneLiner = (): string => one_liners[Math.floor(Math.random() * one_liners.length)];
  
  return (
    <div className="App">
      <img src={logo} alt="Yumio Logo" className="App-logo" />
      <p className="App-subtext">{getOneLiner()}</p>
    </div>
  )
}

export default App
