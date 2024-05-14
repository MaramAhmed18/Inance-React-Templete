import React from 'react'
import heroImg from '../../assets/images/slider-img.png'
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 hero-text">
            <h1>Repair and Maintenance Services</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa.</p>
            <button className='btn'>CONTACT US</button>
          </div>
          <div className="col-md-6 col-sm-12 hero-img">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;