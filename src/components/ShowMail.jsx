import { useContext } from "react"
import { MyContext } from "../App"


export const ShowMail = () => {
    const value=useContext(MyContext)
  return (
    <div className={`${value.value ? 'ml-12' : 'ml-80'}`}>ShowMail</div>
  )
}
