import './App.css'
// import { Chart } from './components/Chart'
// import { Home } from './components/Home'
// import { Forms } from './components/Forms'
import { Header } from './components/Header'
import { useState} from "react";
// import { HomePage } from './components/HomePage';

import { HomePage } from './components/HomePage'
// import { faMoon } from '@fortawesome/free-solid-svg-icons';
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
  // const toggleIcons = () => {
  //   if(darkMode){
  //     icon = "faMoon"
  //   }
  // }
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
