import './App.css'
// import { Chart } from './components/Chart'
// import { Home } from './components/Home'
// import { Forms } from './components/Forms'
import { Header } from './components/Header'
import { useState} from "react";
// import { HomePage } from './components/HomePage';

import { HomePage } from './components/HomePage'
function App() {
  const[value, setValue] = useState(true);

  const menuClick = (event) => {
    event.preventDefault(); // This prevents the default behavior of the event
    setValue(!value);
  }
  // State to track the current theme
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle between dark and light mode
  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
  };
  return (
    <div>
    {/* <HomePage /> */}
    <Header toggle={menuClick} value={value} darkMode={darkMode} darkModeToggle={toggleMode} />
    <HomePage value={value} darkMode={darkMode} darkModeToggle={toggleMode}/>
    {/* HI */}
    {/* <Forms /> */}
    {/* <Home /> */}
    {/* <Chart /> */}
    </div>
    
  )
}

export default App
