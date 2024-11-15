import './MyContact2.css'

export default function MyContact2({des, img, h, h2}) {

    return (
        <div className='ED-MyContact2'>
            <div>
                <p className='mylorem'>{des}</p>
            </div>

            <div className='dec'>
                <img src={img} />
                <div >
                    <h4>{h}</h4>
                    <h5>{h2}</h5>
                </div>
            </div>
        </div>

    )
}
