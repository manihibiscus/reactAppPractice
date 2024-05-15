import { useContext } from "react"
import { MyContext } from "../App"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser
  } from '@fortawesome/free-solid-svg-icons';
export const ProfileCart = () => {
    const user = useContext(MyContext)
  return (
    <div className={`absolute left-[15%] md:left-[60%] lg:left-[75%] bg-green-400 w-[300px] p-4 rounded-md ${user.profileArrow ? 'block' : 'hidden'}`}>
        <FontAwesomeIcon className='w-[26px] h-[26px] rounded-full border-2 border-pink-500 p-2 m-2 ml-[110px]' icon={faUser} />
        <p className="text-center">manikandan@gmail.com</p>
        <p className="text-center">+91 9361798897</p>
    </div>
  )
}
