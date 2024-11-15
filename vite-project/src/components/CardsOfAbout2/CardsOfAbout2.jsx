import './CardsOfAbout2.css'

export default function CardsOfAbout2({ title, des, Photo1 }) {
  return (
    <div className='CardsOfAbout2'>
      <div className='imgBorder'>
        <img src={Photo1} alt="Image" />
      </div>
      <h3>{title}</h3>
      <p>{des}</p>
    </div>
  )
}
