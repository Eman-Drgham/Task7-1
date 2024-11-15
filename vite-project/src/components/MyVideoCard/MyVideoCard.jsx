import './MyVideoCard.css'

export default function MyVideoCard({ icon1,icon2, mytitle, info }) {
  return (
    <div className='ED-MyVideoCard'>
      <div className="icons-container">
        {icon1}
        {icon2}
      </div>
      <h4 className='title'>{mytitle}</h4>
      <p className='des'>{info}</p>
    </div>
  )
}
