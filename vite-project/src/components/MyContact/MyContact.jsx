import './MyContact.css'

export default function MyContact({ title, icon1, icon2, icon3, img, img2, info, info2, mybutton }) {
    return (
        <div className='my-contact'>
            <img src={img} />
            <div className='title'>
                <h5> {icon1}{title}{icon2} </h5>
                <h4>{info}</h4>
                <h4>{info2}</h4>
            </div>
            <img src={img2} className='ctaShape' />
            <button>{mybutton} {icon3} </button>
        </div>
    )
}