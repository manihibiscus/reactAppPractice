import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faMagnifyingGlass, faUser, faAngleDown, faExpand, faEnvelope, faBell, 
    faPowerOff, faXmark, faHouse, faFrog, faCalendarPlus, faCirclePlus,faSun,
    faListUl, faChartColumn, faTableList
  } from '@fortawesome/free-solid-svg-icons';

  import PropTypes from 'prop-types';
  import { useSelector, useDispatch } from 'react-redux'
 
import { menuClick, modeChange, arrowMode} from '../Redux/Slice';
export const Header = () => {
  const value = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  return (
    <div className='h-full'>
    {/* <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}> */}
    <nav className={`flex justify-between w-full ${value.darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <div className='m-2 flex items-center'>
            <FontAwesomeIcon onClick={()=>dispatch(menuClick())} className='w-[26px] h-[26px]' icon={faBars} />
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
        <p className='p-2 hidden sm:flex'>
      <button className= {`p-1 ${value.darkMode ? 'bg-white' : 'bg-gray-500'} text-white rounded`} onClick={()=>dispatch(modeChange())}><FontAwesomeIcon className={`${value.darkMode ? 'text-black' : 'text-white '}`} icon={faSun} /></button>
      {/* <h1 className="text-2xl font-bold">{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <p className="mt-2">This is some text.</p> */}
      </p>
          <ul className='flex items-center'>
            <li>
            <FontAwesomeIcon className='w-[26px] h-[26px] border-2 border-red-400 rounded-full p-1' icon={faUser} />
            </li>
            <li className='pl-2'>Albus</li>
            <li className='pl-2'><FontAwesomeIcon onClick={()=>dispatch(arrowMode())} className='cursor-pointer' icon={faAngleDown} /></li>
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
      <div className={`absolute shadow-y-lg min-w-[140px] min-h-full sm:min-w-[300px] sm:min-h-full ${value.togValue ? 'translate-x-[-84%]' : 'translate-x-[0%]'} ${value.darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} `}>
      <p className={`p-2 pl-72 sm:pl-64 pt-3 ${value.togValue ? 'hidden' : 'translate-x-[0%]'}`}>
        <FontAwesomeIcon onClick={() => dispatch(menuClick())} className='absolute w-[32px] h-[32px] sm:w-[22px] sm:h-[22px] cursor-pointer' icon={faXmark} />
      </p>
      <div>
      <p className='flex items-start'>
        <FontAwesomeIcon className='w-[26px] h-[26px] rounded-full border-2 border-pink-500 p-2 m-2' icon={faUser} />
        <p className='mt-2 text-md font-bold'>Manikandan Sidhuraj
        <span className={`text-sm font-semibold ${value.darkMode ? 'text-white' : 'text-gray-500'} block`}>Project Manager</span>
        </p> 
      </p>
      </div>
      <div className='group flex justify-between ml-2 pt-4 pl-2 mt-2'>
          <p className={`text-md font-medium group-hover:text-purple-500 cursor-pointeNamer ${value.darkMode ? 'text-white' : 'text-gray-500'}`}> Dashboard</p>
          <p><FontAwesomeIcon className={`w-[20px] h-[20px] text-gray-600 group-hover:text-purple-500 pl-[80px] pr-3 ml-8 sm:ml-0 sm:pr-4 ${value.darkMode ? 'text-white' : 'text-gray-400'}`} icon={faHouse} /></p>
      </div>
      <div className='group flex justify-between ml-2 pt-4 pl-2'>
          <p className={`text-md font-medium text-gray-500 group-hover:text-purple-500 cursor-pointeNamer ${value.darkMode ? 'text-white' : 'text-gray-500'}`}> Basic UI Elements</p>
          <FontAwesomeIcon className={`w-[20px] h-[20px] text-gray-600 group-hover:text-purple-500 pl-[80px] pr-3 ml-8 sm:ml-0 sm:pr-4 ${value.darkMode ? 'text-white' : 'text-gray-400'}`} icon={faCirclePlus} />
      </div>
      <div className='group flex justify-between ml-2 pt-4 pl-2'>
          <p className={`text-md font-medium text-gray-500 group-hover:text-purple-500 cursor-pointeNamer ${value.darkMode ? 'text-white' : 'text-gray-500'}`}> Icons</p>
          <p><FontAwesomeIcon className={`w-[20px] h-[20px] text-gray-600 group-hover:text-purple-500 pl-[80px] pr-3 ml-8 sm:ml-0 sm:pr-4 ${value.darkMode ? 'text-white' : 'text-gray-400'}`} icon={faCalendarPlus} /></p>
      </div>
      <div className='group flex justify-between ml-2 pt-4 pl-2'>
          <p className={`text-md font-medium text-gray-500 group-hover:text-purple-500 cursor-pointeNamer ${value.darkMode ? 'text-white' : 'text-gray-500'}`}> Forms</p>
          <p><FontAwesomeIcon className={`w-[20px] h-[20px] text-gray-600 group-hover:text-purple-500 pl-[80px] pr-3 ml-8 sm:ml-0 sm:pr-4 ${value.darkMode ? 'text-white' : 'text-gray-400'}`} icon={faListUl} /></p>
      </div>
      <div className='group flex justify-between ml-2 pt-4 pl-2'>
          <p className={`text-md font-medium text-gray-500 group-hover:text-purple-500 cursor-pointeNamer ${value.darkMode ? 'text-white' : 'text-gray-500'}`}> Charts</p>
          <p><FontAwesomeIcon className={`w-[20px] h-[20px] text-gray-600 group-hover:text-purple-500 pl-[80px] pr-3 ml-8 sm:ml-0 sm:pr-4 ${value.darkMode ? 'text-white' : 'text-gray-400'}`} icon={faChartColumn} /></p>
      </div>
      <div className='group flex justify-between ml-2 pt-4 pl-2'>
          <p className={ `text-md font-medium text-gray-500 group-hover:text-purple-500 cursor-pointeNamer ${value.darkMode ? 'text-white' : 'text-gray-500'}`}> Tables</p>
          <p><FontAwesomeIcon className={ `w-[20px] h-[20px] text-gray-600 group-hover:text-purple-500 pl-[80px] pr-3 ml-8 sm:ml-0 sm:pr-4 ${value.darkMode ? 'text-white' : 'text-gray-400'}`} icon={faTableList} /></p>
      </div>
      <div className='group flex justify-between ml-2 p-2'>
                <p className={`text-md font-semibold text-gray-500 group-hover:text-purple-500 cursor-pointer ${value.darkMode ? 'text-white' : 'text-gray-500'}`}>Projects</p>
      </div>
      <div className={`justify-center bg-gradient-to-r from-purple-300 to-purple-500 text-white mw-auto rounded-md w-300px mx-10 ${value.togValue ? 'hidden' : 'felx'}`}>
                <button className='p-4 pl-10 text-md font-bold'>+ Add a project</button>
      </div>
      <div className='text-left'>
            <p className={`pl-4 pt-6 font-medium text-gray-500 ${value.darkMode ? 'text-white' : 'text-gray-500'}`}>Catagories</p>
            <div className='group pl-6 pt-6 flex'>
                <p>
                    <ion-icon className='w-[20px] h-[20px] text-pink-500' name='ellipse-outline'></ion-icon>
                </p>                        
                    <p className={`font-medium pl-2 text-gray-500 group-hover:text-purple-500 ${value.darkMode ? 'text-white' : 'text-gray-500'}`}>Free</p>
            </div>
            <div className='group pl-6 pt-4 flex'>
                <p>
                    <ion-icon className='w-[20px] h-[20px] text-blue-600' name='ellipse-outline'></ion-icon>
                </p>                        
                    <p className={`font-medium pl-2 text-gray-500 group-hover:text-purple-500 ${value.darkMode ? 'text-white' : 'text-gray-500'}`}>Pro</p>
            </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}
Header.propTypes = {
    value: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired,
    darkModeToggle: PropTypes.func.isRequired

  };
