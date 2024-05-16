import './App.css'
import { Header } from './components/Header'
import {createContext} from "react";
import { Provider } from 'react-redux';
import Store from './Redux/Store'
import { HomePage } from './components/HomePage';
import { ProfileCart } from './components/ProfileCart';
export const MyContext = createContext();

function App() {
  
  return (
    <Provider store={Store}>
    <Header />
    <ProfileCart />
    <HomePage />
    </Provider>
  )
}

export default App