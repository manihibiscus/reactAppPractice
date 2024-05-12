import { Header } from "./Header";
// import PropTypes from 'prop-types'; // Import PropTypes
import { useState} from "react";

const data=[
    {
      name:"Manikandan",
      amount:"152622",
      description:"Hello Everyone",
      color:"black"
    },
    {
      name:"Sathis",
      amount:"152",
      description:"Hello Everyone",
      color:"black"
    },
    {
      name:"Santhosh",
      amount:"1522",
      description:"Hello Everyone",
      color:"black"
    }
  
  ]
export const HomePage = () => {
    const[value, setValue] = useState(true);

  return (
    <>
      <Header />
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
    </>
  )
}
// HomePage.propTypes = {
//     value: PropTypes.string.isRequired, // Validate 'value' prop
//     setValue: PropTypes.func.isRequired, // Validate 'setValue' prop
//   };