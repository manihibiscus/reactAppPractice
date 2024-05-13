import './App.css'
// import { Chart } from './components/Chart'
// import { Home } from './components/Home'
// import { Forms } from './components/Forms'
import { Header } from './components/Header'
import { useState, createContext} from "react";
// import { HomePage } from './components/HomePage';

import { HomePage } from './components/HomePage'
// import { faMoon } from '@fortawesome/free-solid-svg-icons';

export const MyContext = createContext();

function App() {
  const[value, setValue] = useState(true);

  const menuClick = (event) => {
    event.preventDefault();
    setValue(!value);
  }
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const details = {
    toggle:menuClick,
    value:value,
    darkMode:darkMode,
    darkModeToggle:toggleMode
  }
  return (
    <MyContext.Provider value={details}>
    <Header />
    <HomePage />
    </MyContext.Provider>
  )
}

export default App
