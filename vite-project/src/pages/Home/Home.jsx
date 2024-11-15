import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import BrandLogo from '../../components/BrandLogo/BrandLogo'
import MyServices from '../../components/MyServices/MyServices'
import MyVideo from '../../components/MyVideo/MyVideo'
import PricingPlans from '../../components/PricingPlans/PricingPlans'
import Contact from '../../components/Feedback/Feedback'
import News from '../../components/News/News'
import Footer from '../../components/Footer/Footer'
import photo1 from './../../assets/imges/brandLogo1_1.svg'
import photo2 from './../../assets/imges/brandLogo1_2.svg'
import photo3 from './../../assets/imges/brandLogo1_3.svg'
import photo4 from './../../assets/imges/brandLogo1_4.svg'
import photo5 from './../../assets/imges/brandLogo1_5.svg'



export default function () {
    return (
        <>
            <Navbar x={true} />
            <Hero />
            <BrandLogo  x={true} 
            ph1={photo1}
            ph2={photo2}
            ph3={photo3}
            ph4={photo4}
            ph5={photo5}
            />
            <MyServices />
            <MyVideo />
            <PricingPlans />
            <Contact />
            <News />
        </>
    )
}
