import './MyServicesCard.css'
import { FaAnglesRight } from "react-icons/fa6";

export default function MyServicesCard({title,dec,photo}) {
  return (
    <div className='ED-MyServicesCard'>
        <img src={photo}/>
        <h3 className='Titile'> {title}</h3>
        <p className='descreption'>{dec}</p>
        <button className='btn-read'>Read More <FaAnglesRight /> </button>
    </div>
  )
}
