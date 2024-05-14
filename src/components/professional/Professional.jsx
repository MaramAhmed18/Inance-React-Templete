import React from 'react'
import profImg from '../../assets/images/professional-img.png'

function Professional() {
  return (
    <section className="professional">
        <div className="container">
            <div className="row">
                <div className="col-md-6 prof-img">
                    <img src={profImg} alt="" />
                </div>
                <div className="col-md-6 prof-text">
                    <h2>WE PROVIDE PROFESSIONAL HOME SERVICES.</h2>
                    <p>randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All randomised words which don't look even slightly</p>
                    <button className="btn-y">READ MORE</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Professional