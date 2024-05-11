import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faMagnifyingGlass, faUser, faAngleDown, faExpand, faEnvelope, faBell, 
  faPowerOff, faXmark, faChartLine

} from '@fortawesome/free-solid-svg-icons'
import { useState} from "react";

const data=[
  {
    name:"Manikandan",
    amount:"152622",
    description:"Hello Everyone",
    color:"black",
    icon:faChartLine
  },
  {
    name:"Sathis",
    amount:"152",
    description:"Hello Everyone",
    color:"black",
    icon:faXmark
  },
  {
    name:"Santhosh",
    amount:"1522",
    description:"Hello Everyone",
    color:"black", 
    icon:faChartLine
  }

]
function App() {
  const[value, setValue] = useState(true);
  //const[close, setClose] = useState(false);
  // const clickingMenu = ()=>{
  //   setValue(!value)
  // }
  return (
    <>
    <div>
      <nav className='flex bg-slate-400 justify-between w-full'>
        <div className='m-2 flex items-center'>
            <FontAwesomeIcon onClick={()=>{setValue(!value)}} className='w-[26px] h-[26px]' icon={faBars} />
        <div className='relative flex items-center bg-green-600 ml-8 sm:w-96'>
            <input type='text' placeholder='Search' className='placeholder:text-center sm:w-full p-1 rounded-md' />
            <FontAwesomeIcon className='absolute pl-4' icon={faMagnifyingGlass} />       
        </div>
        </div>
       {/* Right SIde Nav */}
        <div className='flex'>
          <ul className='flex items-center bg-yellow-300'>
            <li>
            <FontAwesomeIcon className='w-[26px] h-[26px] border-2 border-red-400 rounded-full p-1' icon={faUser} />
            </li>
            <li className='pl-2'>Albus</li>
            <li className='pl-2'><FontAwesomeIcon icon={faAngleDown} /></li>
          </ul>
          <ul className='flex items-center bg-purple-700 ml-10 mr-2 hidden lg:flex' >
          <li><FontAwesomeIcon className='w-[20px] h-[20px]' icon={faExpand} /></li>
          <li className='relative pl-10'>
          <FontAwesomeIcon className='w-[20px] h-[20px]' icon={faEnvelope} />
          <div className='absolute top-[-4px] right-0 w-2 h-2 bg-red-400 rounded-full'></div>
          </li>
          <li className='relative pl-10'>
          <FontAwesomeIcon className='w-[20px] h-[20px]' icon={faBell} />
          <div className='absolute top-[-4px] right-0 w-2 h-2 bg-yellow-400 rounded-full'></div>
          </li>
          <li className='pl-10'>
          <FontAwesomeIcon className='w-[20px] h-[20px]' icon={faPowerOff} /></li>
          </ul>
          </div>
      </nav>
      {/* MENU */}
      <div className={`absolute shadow-y-lg min-w-[120px] bg-blue-200 min-h-full sm:min-w-[300px] sm:min-h-full ${value ? 'translate-x-[-100%]' : 'translate-x-[0%]'} bg-pink-600`}>
      <p className='p-2 pl-60 pt-4'>
        <FontAwesomeIcon onClick={()=>{setValue(!value)}} className='absolute w-[26px] h-[26px] cursor-pointer' icon={faXmark} /></p>
      </div>
      {/* <div className={`absolute flex gap-4 min-h-[150px] ${value ? 'ml-2' : 'ml-72'}`}>
      {data.map(item=>(
        <div className='bg-yellow-300 min-w-[150px]' key={item.amount}>{item.name}</div>
      ))}
    </div> */}
    <div className={` bg-yellow-100 flex justify-between visible ${value ? 'visible':'invisible sm:visible'}`}>
        <div className={`${value ? 'ml-10' : 'ml-72'}`}>
            <p className='text-xl font-light pl-4'> Dashboard</p>
        </div>
        <div>
        <p className='pt-4 pr-4 hidden sm:block'>Overview </p>  
        </div>
    </div>
    <div className={`bg-blue-900 lg:h-[180px] grid grid-rows-3 md:grid-rows-3 lg:grid-cols-3 gap-4 pl-6 ${value ? 'ml-2 visible' : 'ml-72 invisible sm:visible'}`}>
      {data.map(item=>(
        <div className={`bg-pink-400 min-w-[180px] lg:h-[180px]`} key={item.amount}>
                <p className='text-lg font-semibold'>{item.name}</p>
                <p className='text-xl font-bold'>{item.amount}</p>
                <p className='pt-6 text-sm font-semibold'>{item.description}</p>
        </div>
      ))}
    </div> <br />
    <div className={`bg-blue-700 grid grid-rows-3 md:grid-rows-3 lg:grid-cols-3 gap-4 min-h-[150px] pl-6 ${value ? 'ml-2 visible' : 'ml-72 invisible sm:visible'}`}>
      {data.map(item=>(
        <div className={`bg-pink-400 min-w-[180px] lg:h-[200px]`} key={item.amount}>
                <p className='text-lg font-semibold'>{item.name}</p>
                <p className='text-xl font-bold'>{item.amount}</p>
                <p className='pt-6 text-sm font-semibold'>{item.description}</p>
        </div>
      ))}
    </div>
    


    
    </div>
    </> 
  )
}

export default App
