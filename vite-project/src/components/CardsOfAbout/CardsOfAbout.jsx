import './CardsOfAbout.css'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { IoMdArrowForward } from "react-icons/io";
import CardsOfAbout2 from '../CardsOfAbout2/CardsOfAbout2';
import Photo1 from './../../assets/imges/04.webp'
import Photo2 from './../../assets/imges/05.webp'
import Photo3 from './../../assets/imges/06.webp'
import Photo4 from './../../assets/imges/07.webp'
import BrandLogo from '../BrandLogo/BrandLogo';



export default function CardsOfAbout() {
    return (
        <section className='ED-CardsOfAbout'>
            <div className='first'>
            <div>
                <h5> <GoArrowLeft /> TEAM MEMBERS <GoArrowRight /> </h5>
                <h2>Our Dedicatted Team Members</h2>
            </div>
            <button >All Members<IoMdArrowForward /> </button>
            </div>
            <div className='Cards-area'>
                <CardsOfAbout2
                title={"Masirul Islam"}
                des={"Web Designer"}
                Photo1={Photo1} />
          
                <CardsOfAbout2
                title={"Jessica Mardol "}
                des={"Web Designer"}
                Photo1={Photo2} />
                
                <CardsOfAbout2
                title={"Masirul Islam"}
                des={"Web Designer"}
                Photo1={Photo3} />
                
                <CardsOfAbout2
                title={"Masirul Islam"}
                des={"Web Designer"}
                Photo1={Photo4} />
          </div>
        <BrandLogo x={false} />
        </section>
    )
}
