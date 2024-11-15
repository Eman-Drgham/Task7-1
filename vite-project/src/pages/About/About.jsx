import './About.css'
import Hero2 from '../../components/Hero2/Hero2'
import { FiChevronsRight } from "react-icons/fi";
import asterisk from './../../assets/imges/asterisk.svg'
import CardsOfAbout from '../../components/CardsOfAbout/CardsOfAbout';
import BrandLogo from '../../components/BrandLogo/BrandLogo';
import envato from './../../assets/imges/envato.jpg'
import Navbar from '../../components/Navbar/Navbar';

export default function About() {
  return (
    <>
    <Navbar x={true}/>
      <Hero2 Title={"About"} p1={"Home"} icon={<FiChevronsRight />} p2={"About"} />
      <div className='container'>

        <div className='item1'>
          <img src={asterisk} />
          <h2>Cyber Scurity</h2>
        </div>

        <div className='item2'>
          <img src={asterisk} />
          <h2>IT Solation</h2>
        </div>

        <div className='item3'>
          <img src={asterisk} />
          <h2>Technology</h2>
        </div>

        <div className='item4'>
          <img src={asterisk} />
          <h2>Data Security</h2>
        </div>
      </div>
      <CardsOfAbout />
      <h4> 1k+ Brands Trust Us</h4>
      <BrandLogo x={false}
        ph1={envato}
        ph2={envato}
        ph3={envato}
        ph4={envato}
        ph5={envato} />


    </>
  )
}