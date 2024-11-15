import './Feedback.css'
import ctaThumb1_1 from './../../assets/imges/ctaThumb1_1.webp'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { IoMdArrowForward } from "react-icons/io";
import ctaShape1 from './../../assets/imges/ctaShape1_1.webp'
import MyContact from '../MyContact/MyContact';
import MyContact2 from '../MyContact2/MyContact2';
import testiThumb3_1 from './../../assets/imges/testiThumb3_1.webp'
import testiThumb3_2 from './../../assets/imges/testiThumb3_2.webp'
import testiThumb3_3 from './../../assets/imges/testiThumb3_3.webp'



export default function Feedback() {
    return (
        <section className='ED-Contact'>
            <MyContact
                img={ctaThumb1_1}
                icon1={<GoArrowLeft />}
                title={"CONTACT US"}
                icon2={<GoArrowRight />}
                info={"24/7 Expert Hosting Support Our"}
                info2={"Customers Love"}
                img2={ctaShape1}
                mybutton={"TALK TO A SPECIALIST"}
                icon3={<IoMdArrowForward />}
            />
            <div className='feedback'>
                <h5> <GoArrowLeft /> TESRMONIALS <GoArrowRight /> </h5>
                <h2>Our Latest Client Feedback</h2>
            </div>
            <div className='mycontact2'>
                <MyContact2
                    des={"Lorem ipsum dolor sit amet consectetur adipisicing elit Dolor reiciendis impedit amet molestias, cumque dolorum similique sequi ipsam, necessitatibus assumenda"}
                    img={testiThumb3_1}
                    h={"Kristin Waston"}
                    h2={"Web Designer"}
                />
                <MyContact2
                    des={"Lorem ipsum dolor sit amet consectetur adipisicing elit Dolor reiciendis impedit amet molestias, cumque dolorum similique sequi ipsam, necessitatibus assumenda"}
                    img={testiThumb3_2}
                    h={"Theresa Webb"}
                    h2={"Web Designer"}
                />
                <MyContact2
                    des={"Lorem ipsum dolor sit amet consectetur adipisicing elit Dolor reiciendis impedit amet molestias, cumque dolorum similique sequi ipsam, necessitatibus assumenda"}
                    img={testiThumb3_3}
                    h={"Ronald Richards"}
                    h2={"Web Designer"}
                />
            </div>
        </section>
    )
}
