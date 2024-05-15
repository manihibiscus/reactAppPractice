import './App.css'
// import { Chart } from './components/Chart'
// import { Home } from './components/Home'
// import { Forms } from './components/Forms'
import { Header } from './components/Header'
import { useState, createContext} from "react";
// import { HomePage } from './components/HomePage';

import { HomePage } from './components/HomePage'
// import { faMoon } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ShowMail } from './components/ShowMail';
import { ProfileCart } from './components/ProfileCart';
export const MyContext = createContext();

function App() {
  const[value, setValue] = useState(true);
  const[profileArrow, setProfileArrow] =useState(false);
  const menuClick = (event) => {
    event.preventDefault();
    setValue(!value);
  }
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const profile=()=>{
    setProfileArrow(!profileArrow)
  }

  const details = {
    toggle:menuClick,
    value:value,
    darkMode:darkMode,
    darkModeToggle:toggleMode,
    profileArrow:profileArrow,
    profile:profile
  }
  return (
    <>
    <BrowserRouter>
    <MyContext.Provider value={details}>
    <Header />
    <ProfileCart />
    <Routes>
      <Route path="/" element={ <HomePage />} />
      <Route path="/mail" element={ <ShowMail />} />
    </Routes>
   
    </MyContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App
