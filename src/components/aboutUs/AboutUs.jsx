import React from 'react'
import aboutImg from'../../assets/images/about-img.jpg'

function AboutUs() {
  return (
   <section className="about-Us">
    <div className="container">
        <div className="row">
            <div className="col-md-6 about-text">
                <h2>ABOUT US</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                <button className="btn-b">READ MORE</button>
            </div>
            <div className="col-md-6 about-img">
                <img src={aboutImg} alt="" />
            </div>
        </div>
    </div>
   </section>
  )
}

export default AboutUs
