import './PricingPlansCards.css'


export default function PricingPlansCards({paragraf1,paragraf2,imgIcon,icon1,p3,p4,p5,p6,p7,p8,p9,icon2,icon3,btn,icon4}) {
    return (
        <div className='ED-PricingPlansCards'>
            <div className='top-content'>
                <div className='regular'>
                    <p>{paragraf1}</p>
                    <p>{paragraf2}</p>
                </div>
                <div>
                    <img src={imgIcon} />
                </div>
            </div>
            <div className='bottom-content'>
                <p>{icon1}{p3} <span>{icon2}</span></p>
                <p> {icon1}{p4} <span>{icon2}</span></p>
                <p> {icon1}{p5} <span>{icon2}</span></p>
                <p> {icon1}{p6} <span>{icon2}</span></p>
                <p> {icon1}{p7} <span>{icon2}</span></p>
                <p> {icon3}{p8} <span>{icon2}</span></p>
                <p> {icon3}{p9} <span>{icon2}</span></p>
            </div>
            <button className='btn-pricing'>{btn}{icon4} </button>
        </div>

    )
}
