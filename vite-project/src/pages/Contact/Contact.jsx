import Hero2 from '../../components/Hero2/Hero2'
import './Contact.css'
import { FiChevronsRight } from "react-icons/fi";

export default function Contact() {
  return (
    <>
      <Hero2 Title={"Contact"} p1={"Home"} icon={<FiChevronsRight />} p2={"Contact Us"} />
      <div >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26179.29822801498!2d36.14776639803765!3d34.89610191166857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1523c575b1ace63f%3A0x9cd948a771205568!2z2KfZhNiv2LHZitmD2YrYtNiMINiz2YjYsdmK2Kc!5e0!3m2!1sar!2s!4v1724103714467!5m2!1sar!2s" width="100%" height="400" ></iframe>
      </div>
    </>
  )
}
