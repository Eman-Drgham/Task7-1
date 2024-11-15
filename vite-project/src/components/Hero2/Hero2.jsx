import './Hero2.css'

export default function Hero2({Title,icon,p1,p2}) {
    return (
        <section className='ED-hero2'>
            <div className='about'>
                <h2 >{Title} </h2>
                <h3>{p1} {icon} {p2}</h3>
            </div>


        </section>
    )
}
