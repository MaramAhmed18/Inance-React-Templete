import React from 'react'


function OurServices() {
    return (
        <section className="our-service">
            <div className="container">
                <h2>OUR SERVICES</h2>
                <div className="row">
                    <div className="col-md-4">
                        <span><i class="fa-solid fa-screwdriver-wrench"></i></span>
                        <h5>Maintenance</h5>
                        <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                    </div>
                    <div className="col-md-4">
                        <span><i class="fa-solid fa-plug-circle-exclamation"></i></span>
                        <h5>Electrical</h5>
                        <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                    </div>
                    <div className="col-md-4">
                        <span><i class="fa-sharp fa-solid fa-sink"></i></span>
                        <h5>Plumbing</h5>
                        <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                    </div>
                </div>
                <button className="btn-b">VIEW MORE</button>
            </div>
        </section>
    )
}

export default OurServices