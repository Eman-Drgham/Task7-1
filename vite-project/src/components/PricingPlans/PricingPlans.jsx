import './PricingPlans.css'
import pricingShape1 from './../../assets/imges/pricingShape1_2.webp'
import pricingIcon1_2 from './../../assets/imges/pricingIcon1_2.svg'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import PricingPlansCards from '../PricingPlansCards/PricingPlansCards';
import pricingIcon1_1 from './../../assets/imges/pricingIcon1_1.svg'
import pricingShape1_1 from './../../assets/imges/pricingShape1_1.webp'
import { ImQuestion } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";
import { ImCancelCircle } from "react-icons/im";
import { IoMdArrowForward } from "react-icons/io";

export default function PricingPlans() {
  return (
    <section className='ED-pricingplans'>
      <img src={pricingShape1} className='image' />
      <img src={pricingShape1_1} className='image2' />
      <div className='content'>
        <h5 className='OUR-PRICING'> <GoArrowLeft /> OUR PRICING <GoArrowRight /></h5>
        <h2>Our Awesome Pricing Plans</h2>
        <div className='outer-button'>
          <button className='outer-btn'>Yearly
            <button className='inner-btn'>Monthly</button>
          </button>
          <img src={pricingIcon1_2} />
          <p className='save'>Save 25% </p>
        </div>
      </div>
      <div className='PricingPlansCards'>
        <PricingPlansCards
          paragraf1={"Regular Plans"}
          paragraf2={"$ 49/Month"}
          imgIcon={pricingIcon1_1}
          icon1={<ImCheckmark color='blue' />}
          p3={"100 GB SSD Storage "}
          icon2={<ImQuestion />}
          p4={"Weekly Backups"}
          p5={"Unlimited Free SSL"}
          p6={"24/7 System Monitoring"}
          p7={"Free Domain($9.99 Value)"}
          p8={"Frame164236"}
          p9={"20+ Payment Methods"}
          icon3={<ImCancelCircle color='red' />}
          btn={"GET STARTED NOW"}
          icon4={<IoMdArrowForward size={15} />}
        />

        <PricingPlansCards
          paragraf1={"Regular Plans"}
          paragraf2={"$ 49/Month"}
          imgIcon={pricingIcon1_1}
          icon1={<ImCheckmark color='blue' />}
          p3={"100 GB SSD Storage "}
          icon2={<ImQuestion />}
          p4={"Weekly Backups"}
          p5={"Unlimited Free SSL"}
          p6={"24/7 System Monitoring"}
          p7={"Free Domain($9.99 Value)"}
          p8={"Frame164236"}
          p9={"20+ Payment Methods"}
          icon3={<ImCancelCircle color='red' />}
          btn={"GET STARTED NOW"}
          icon4={<IoMdArrowForward size={15} />}
        />

        <PricingPlansCards
          paragraf1={"Regular Plans"}
          paragraf2={"$ 49/Month"}
          imgIcon={pricingIcon1_1}
          icon1={<ImCheckmark color='blue' />}
          p3={"100 GB SSD Storage "}
          icon2={<ImQuestion />}
          p4={"Weekly Backups"}
          p5={"Unlimited Free SSL"}
          p6={"24/7 System Monitoring"}
          p7={"Free Domain($9.99 Value)"}
          p8={"Frame164236"}
          p9={"20+ Payment Methods"}
          icon3={<ImCancelCircle color='red' />}
          btn={"GET STARTED NOW"}
          icon4={<IoMdArrowForward size={15} />}
        />

      </div>
    

    </section>
  )
}
