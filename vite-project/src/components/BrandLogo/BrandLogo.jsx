import heroshape from './../../assets/imges/heroShape1_3.webp'

import './BrandLogo.css'


export default function BrandLogo({ x ,ph1,ph2,ph3,ph4,ph5}) {
  return (
    <section className={x ? 'ED-brand' : 'ED-brand2'}>
      {x && <div className='heroshape'>
        <img src={heroshape} />
      </div>}


      <div className='brands'>
        <img src={ph1} />
        <img src={ph2} />
        <img src={ph3} />
        <img src={ph4} />
        <img src={ph5} />
      </div>
    </section>


  )
}
