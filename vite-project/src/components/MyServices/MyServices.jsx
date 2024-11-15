import './MyServices.css'
import MyServicesCard from '../MyServicesCard/MyServicesCard'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import serviceicon1 from './../../assets/imges/serviceicon1_2.svg'
import serviceicon2 from './../../assets/imges/serviceicon1_3.svg'
import serviceicon3 from './../../assets/imges/serviceicon1_4.svg'
import serviceicon4 from './../../assets/imges/serviceicon1_1.svg'


export default function MyServices() {
  return (
    <section className='ED-MyServices'>
      <h5> <GoArrowLeft /> OUER SERVICES <GoArrowRight /> </h5>
      <h2>Elevating Businesses With IT</h2>
      <h2>Ingenuity</h2>

      <div className='cards'>
        <MyServicesCard 
        title={"Woo Commerce"}
        dec={"collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services."}
        photo={serviceicon1}
        />

        <MyServicesCard
         title={"CRM Solution"} 
         dec={"collaboratively formulate principle capital.Progressively evolve user revolutionary hosting services."}
         photo={serviceicon2}
          />

        <MyServicesCard 
        title={"Web Design"} 
        dec={"collaboratively formulate principle capital.Progressively evolve user revolutionary hosting services."} 
        photo={serviceicon3}
        />

        <MyServicesCard
         title={"Data Guard Sentinel"} 
         dec={"collaboratively formulate principle capital.Progressively evolve user revolutionary hosting services."} 
         photo={serviceicon4}
        />
      </div>

    </section>
  )
}
