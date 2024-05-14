import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Img1 from '../../assets/images/client-1.jpg';
import Img2 from '../../assets/images/client-2.jpg';
import Img3 from '../../assets/images/client-3.jpg';
import Img4 from '../../assets/images/client-4.jpg';

const Testimonial = () => {
    return (
        <section className="testimonial">
            <div className="container">
                <h2>WHAT OUR CLIENTS SAY</h2>
                <div className="card-container">
                    <Swiper  modules={[Navigation, Pagination]} spaceBetween={50} slidesPerView={1}  pagination={{ clickable: true }}
                   breakpoints={{  
                    1024: {
                      slidesPerView: 3,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    550: {
                      slidesPerView: 1,
                    },
                    
                  }} >
                        <SwiperSlide>
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="card-head">
                                        <img src={Img1} className="img-fluid rounded-circle" alt="..." />
                                        <div>
                                            <h5 className="card-title">Jorch morik</h5>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>

                                    </div>

                                    <div className="card-body">
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex unde nobis corrupti nulla dolorem maiores in consectetur suscipit ut. Provident!</p>

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="card-head">
                                        <img src={Img2} className="img-fluid rounded-circle" alt="..." />
                                        <div>
                                            <h5 className="card-title">Jorch morik</h5>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>

                                    </div>

                                    <div className="card-body">
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex unde nobis corrupti nulla dolorem maiores in consectetur suscipit ut. Provident!</p>

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="card-head">
                                        <img src={Img3} className="img-fluid rounded-circle" alt="..." />
                                        <div>
                                            <h5 className="card-title">Jorch morik</h5>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>

                                    </div>

                                    <div className="card-body">
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex unde nobis corrupti nulla dolorem maiores in consectetur suscipit ut. Provident!</p>

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="card-head">
                                        <img src={Img4} className="img-fluid rounded-circle" alt="..." />
                                        <div>
                                            <h5 className="card-title">Jorch morik</h5>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>

                                    </div>

                                    <div className="card-body">
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex unde nobis corrupti nulla dolorem maiores in consectetur suscipit ut. Provident!</p>

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonial