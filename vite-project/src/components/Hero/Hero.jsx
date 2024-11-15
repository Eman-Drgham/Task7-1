import './Hero.css'
import heroshap1 from './../../assets/imges/heroShape1_1.webp'
import heroThumb1 from './../../assets/imges/heroThumb1_1.webp'
import { GoPulse } from "react-icons/go";
import { GoCheck } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Hero() {
  return (
    <section className='ED-Hero'>
        <div className="info-left">
          <button className='btn1'> <GoPulse /> Everything You Need To Create A Web site</button>
          <h1>Business Innovation With </h1>
          <h1>IT Services Expertise</h1> 

        <div className='pp'> 
          <h3> <GoCheck /> Deployment and Support </h3>
          <h3> <GoCheck /> Flexibility and Adaptability</h3>
        </div>

        <div className='pp'>
          <h3> <GoCheck /> Discovery and Analysis </h3>
          <h3> <GoCheck /> Competitive Advantage</h3>
        </div>
        <button className='btn2'>GET STARTED <IoIosArrowRoundForward /> </button>
      
        </div>
        <div className="info-right">
          <img src={heroshap1} alt='' />
          <img src={heroThumb1} alt='' />
         
        </div>
    </section>
  )
}
