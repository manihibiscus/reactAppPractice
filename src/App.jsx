import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faMagnifyingGlass, faUser, faAngleDown, faExpand, faEnvelope, faBell, 
  faPowerOff, faXmark, faChartLine, faHouse, faFrog, faCalendarPlus, faCirclePlus,
  faListUl, faChartColumn, faTableList

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
      <nav className='flex bg-white justify-between w-full'>
        <div className='m-2 flex items-center'>
            <FontAwesomeIcon onClick={()=>{setValue(!value)}} className='w-[26px] h-[26px]' icon={faBars} />
            <div className='items-center ml-6 hidden md:flex'>
              <p className='text-md font-bold text-purple-500'>PURPLE FROG</p>
              <FontAwesomeIcon className='text-purple-700 w-[30px] h-[30px] hidden md:flex' icon={faFrog} />
            </div>
        <div className='relative flex items-center ml-6 sm:w-96'>
            <input type='text' placeholder='Search' className='placeholder:text-left placeholder:pl-10 sm:w-full p-1 rounded-md' />
            <FontAwesomeIcon className='absolute pl-4' icon={faMagnifyingGlass} />       
        </div>
        </div>
       {/* Right SIde Nav */}
        <div className='flex'>
          <ul className='flex items-center'>
            <li>
            <FontAwesomeIcon className='w-[26px] h-[26px] border-2 border-red-400 rounded-full p-1' icon={faUser} />
            </li>
            <li className='pl-2'>Albus</li>
            <li className='pl-2'><FontAwesomeIcon icon={faAngleDown} /></li>
          </ul>
          <ul className='items-center ml-10 mr-2 hidden lg:flex' >
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
      <div className={`absolute shadow-y-lg min-w-[140px] bg-white min-h-full sm:min-w-[300px] sm:min-h-full ${value ? 'translate-x-[-84%]' : 'translate-x-[0%]'} `}>
      <p className={`p-2 pl-52 sm:pl-64 pt-3 ${value ? 'hidden' : 'translate-x-[0%]'}`}>
        <FontAwesomeIcon onClick={()=>{setValue(!value)}} className='absolute w-[22px] h-[22px] cursor-pointer' icon={faXmark} />
      </p>
      <div>
      <p className='flex items-start'>
        <FontAwesomeIcon className='w-[26px] h-[26px] rounded-full border-2 border-pink-500 p-2 m-2' icon={faUser} />
        <p className='mt-2 text-md font-bold'>David Gray M
        <span className='text-sm font-light text-gray-500 block'>Project Manager</span>
        </p> 
      </p>
        
      

      
      </div>
      <div className='group flex justify-between ml-2 pt-4 pl-2 mt-2'>
          <p className='text-md font-medium text-gray-500 group-hover:text-purple-500 cursor-pointeNamer'> Dashboard</p>
          {/* <p><FontAwesomeIcon className='absolute w-[15px] h-[15px] text-white group-hover:text-purple-500 pl-[100px] pt-2' icon={faChevronLeft} /></p> */}
          <p><FontAwesomeIcon className='w-[20px] h-[20px] text-gray-400 group-hover:text-purple-500 pl-[80px] pr-3 ml-8 sm:ml-0 sm:pr-4' icon={faHouse} /></p>
      </div>
      <div className='group flex justify-between ml-2 pt-4 pl-2'>
          <p className='text-md font-medium text-gray-500 group-hover:text-purple-500 cursor-pointeNamer'> Basic UI Elements</p>
          <FontAwesomeIcon className='w-[20px] h-[20px] text-gray-400 group-hover:text-purple-500 pl-[80px] pr-3 ml-8 sm:ml-0 sm:pr-4' icon={faCirclePlus} />
      </div>
      <div className='group flex justify-between ml-2 pt-4 pl-2'>
          <p className='text-md font-medium text-gray-500 group-hover:text-purple-500 cursor-pointeNamer'> Icons</p>
          <p><FontAwesomeIcon className='w-[20px] h-[20px] text-gray-400 group-hover:text-purple-500 pl-[80px] pr-3 ml-8 sm:ml-0 sm:pr-4' icon={faCalendarPlus} /></p>
      </div>
      <div className='group flex justify-between ml-2 pt-4 pl-2'>
          <p className='text-md font-medium text-gray-500 group-hover:text-purple-500 cursor-pointeNamer'> Forms</p>
          <p><FontAwesomeIcon className='w-[20px] h-[20px] text-gray-400 group-hover:text-purple-500 pl-[80px] pr-3 ml-8 sm:ml-0 sm:pr-4' icon={faListUl} /></p>
      </div>
      <div className='group flex justify-between ml-2 pt-4 pl-2'>
          <p className='text-md font-medium text-gray-500 group-hover:text-purple-500 cursor-pointeNamer'> Charts</p>
          <p><FontAwesomeIcon className='w-[20px] h-[20px] text-gray-400 group-hover:text-purple-500 pl-[80px] pr-3 ml-8 sm:ml-0 sm:pr-4' icon={faChartColumn} /></p>
      </div>
      <div className='group flex justify-between ml-2 pt-4 pl-2'>
          <p className='text-md font-medium text-gray-500 group-hover:text-purple-500 cursor-pointeNamer'> Tables</p>
          <p><FontAwesomeIcon className='w-[20px] h-[20px] text-gray-400 group-hover:text-purple-500 pl-[80px] pr-3 ml-8 sm:ml-0 sm:pr-4' icon={faTableList} /></p>
      </div>

      </div>
      {/* Body Content */}
      <div className='ml-6'>
      <div className={` bg-yellow-100 flex justify-between visible ${value ? 'visible':'invisible sm:visible'}`}>
        <div className={`${value ? 'ml-12' : 'ml-72'}`}>
            <p className='text-xl pl-4 pt-3'> Dashboard</p>
        </div>
        <div>
        <p className='pt-3 pr-4 hidden sm:block'>Overview </p>  
        </div>
    </div>
    <div className={` mt-4 lg:h-[180px] grid grid-rows-3 md:grid-rows-3 lg:grid-cols-3 gap-4 pl-6 ${value ? 'ml-4 visible' : 'ml-64 invisible sm:visible'}`}>
      {data.map(item=>(
        <div className={`bg-pink-400 min-w-[180px] lg:h-[180px] rounded-md p-6`} key={item.amount}>
                <p className='text-lg font-semibold'>{item.name}</p>
                <p className='text-xl font-bold'>{item.amount}</p>
                <p className='pt-6 text-sm font-semibold'>{item.description}</p>
        </div>
      ))}
    </div> <br />
    {/* <div className={`grid grid-rows-3 md:grid-rows-3 lg:grid-cols-3 gap-4 min-h-[150px] pl-6 ${value ? 'ml-4 visible' : 'ml-64 invisible sm:visible'}`}>
      {data.map(item=>(
        <div className={`bg-pink-400 min-w-[180px] lg:h-[200px] rounded-md p-6`} key={item.amount}>
                <p className='text-lg font-semibold'>{item.name}</p>
                <p className='text-xl font-bold'>{item.amount}</p>
                <p className='pt-6 text-sm font-semibold'>{item.description}</p>
        </div>
      ))}
    </div> */}
    </div>


    
    </div>
    </> 
  )
}

export default App
