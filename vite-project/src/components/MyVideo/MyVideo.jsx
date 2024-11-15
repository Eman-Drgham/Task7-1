import MyVideoCard from '../MyVideoCard/MyVideoCard'

import { Fa0 } from "react-icons/fa6";
import { Fa1 } from "react-icons/fa6";
import { Fa2 } from "react-icons/fa6";
import { Fa3 } from "react-icons/fa6";
import { Fa4 } from "react-icons/fa6";
import './MyVideo.css'

export default function MyVideo() {
  return (
    <section className='ED-MyVideo'>
      <div className='my-video'>
        <video width="600" height="300" controls>
          <source src="/Video/myvideo.mp4" type="Video/mp4" />
        </video>
      </div>


      <div className='my-cards'>
        <MyVideoCard
          icon1={<Fa0 />}
          icon2={<Fa1 />}
          mytitle={"Requirement"}
          info={"There are many variations of passages of Lorem ipsum available,but the majority have suffered alteration"}
        />
        <MyVideoCard
          icon1={<Fa0 />}
          icon2={<Fa2 />}
          mytitle={"UI/UX Design"}
          info={"There are many variations of passages of Lorem ipsum available,but the majority have suffered alteration"}
        />
        <MyVideoCard
          icon1={<Fa0 />}
          icon2={<Fa3 />}
          mytitle={"Prototype"}
          info={"There are many variations of passages of Lorem ipsum available,but the majority have suffered alteration"}
        />
        <MyVideoCard
          icon1={<Fa0 />}
          icon2={<Fa4 />}
          mytitle={"Development"}
          info={"There are many variations of passages of Lorem ipsum available,but the majority have suffered alteration"}
        />

      </div>

    </section>
  )
}
