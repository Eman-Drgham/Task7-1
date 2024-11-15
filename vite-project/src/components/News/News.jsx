import './News.css'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import blogThumb1_2 from './../../assets/imges/blogThumb1_2.webp'
import blogThumb1_3 from './../../assets/imges/blogThumb1_3.webp'
import blogThumb1_1 from './../../assets/imges/blogThumb1_1.webp'

export default function News() {
    return (
        <section className='ED-News'>
            <div >
                <h5 className=''> <GoArrowLeft /> BLOG&NEWS<GoArrowRight /></h5>
                <h2>Featured News And Insights</h2>
            </div>
            <div className='imges'>
                <img src={blogThumb1_2} className='img1' />
                <img src={blogThumb1_3} className='img1'/>
                <img src={blogThumb1_1} className='img1'/>

            </div>
        </section>
    )
}
