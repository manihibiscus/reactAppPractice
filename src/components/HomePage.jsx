import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGaugeSimple, faCapsules, faClipboard, faEye, faCircleRadiation} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'; 
import { Chart } from './Chart';
import { PieChar } from './PieChar';

const data=[
    {
      name:"Weakly Sales",
      amount:"$ 15,0000",
      description:"Increased by 60%",
      color1:"bg-gradient-to-r from-[#ffbc97] to-[#ff8b96]",
      icon:faCapsules
    },
    {
      name:"Weakly Orders",
      amount:"$ 45,6334",
      description:"Decreased by 10%",
      color1:"bg-gradient-to-r from-[#82c5fa] to-[#3498e6]",
      icon:faClipboard
    },
    {
      name:"Visitors Online",
      amount:"$ 95,5741",
      description:"Increased by 5%",
      color1:"bg-gradient-to-r from-[#87c5f6] to-[#35d1bb]",
      icon:faEye
    }
  
  ]
export const HomePage = ({value, darkMode}) => {

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {/* Body Content */}
      <div className='ml-6'>
      <div className={`flex justify-between visible ${value ? 'visible':'invisible sm:visible'}`}>
        <div className={`flex items-center ${value ? 'ml-12' : 'ml-72'}`}>
            <p><FontAwesomeIcon icon={faGaugeSimple} /></p>
            <p className='p-1'> Dashboard</p>
        </div>
        <div className='hidden sm:flex items-center'>
        <p className='p-1'>Overview </p>  
        <FontAwesomeIcon className='pr-2' icon={faCircleRadiation} />
        </div>
    </div>
    <div className={`mt-4 lg:h-[180px] grid grid-rows-3 md:grid-rows-3 lg:grid-cols-3 gap-4 pl-6 ${value ? 'ml-4 visible' : 'ml-64 invisible sm:visible'} mr-2`}>
      {data.map(item=>(
        <div className={`${item.color1} min-w-[180px] lg:h-[180px] rounded-md p-6`} key={item.amount}>
                {/* <p className='absolute pl-40 md:pl-[600px] lg:pl-52 pt-4 text-2xl text-white'><FontAwesomeIcon icon={item.icon} /></p> */}
                <p className='text-lg font-semibold text-white'>{item.name}</p>
                <p className='text-xl font-bold text-white'>{item.amount}</p>
                <p className='pt-6 text-sm font-semibold text-white'>{item.description}</p>
        </div>
      ))}
    </div>
    <div className={`grid grid-rows-2 md:grid-rows-2 lg:grid-cols-2 gap-1 sm:gap-4 min-h-[150px] pl-6 mt-4 ${value ? 'ml-4 visible' : 'ml-64 invisible sm:visible'} mr-2`}>
      <div className={`min-w-[180px] h-[250px] lg:h-full rounded-md p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <Chart />
      </div>
      <div className={`min-w-[180px] h-[250px] lg:h-full rounded-md p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <PieChar />
      </div>
    </div>
    </div>
    </div>
  )
}
HomePage.propTypes = {
    value: PropTypes.bool.isRequired, 
    darkMode: PropTypes.bool.isRequired,
    darkModeToggle: PropTypes.func.isRequired

  };