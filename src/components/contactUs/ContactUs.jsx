import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ContactUs() {
    const intialValues = {
        name: '',
        phone: '',
        email: '',

    }

    const ValidatinSchema = Yup.object({
        name: Yup.string().required(),
        phone: Yup.string().required(),
        email: Yup.string().required(),
    })
    return (
        <section className="contact-us">
            <div className="container">
            <h2>Contact Us</h2>
                <div className="row">
                    <div className="col-md-6 contact-form">
                        <Formik validationSchema={ValidatinSchema} initialValues={intialValues}>
                            {(formik) => (
                                <Form className='formik-form'>
                                    <div className="input-group">
                                        <Field name={"name"} placeholder='Name' />
                                        <ErrorMessage name='name' />
                                    </div>
                                    <div className="input-group">
                                        <Field name={"phone"} placeholder='Phone Number' />
                                        <ErrorMessage name='phone' />
                                    </div>
                                    <div className="input-group">
                                        <Field name={"email"} placeholder='Email' />
                                        <ErrorMessage name='email' />
                                    </div>
                                    <textarea placeholder='Message' />
                                    <button className='btn-b' type='submit'>SEND</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className="col-md-6 contact-location">
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.547129609474!2d31.153609774353935!3d29.992442421034866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145845c2716abbb5%3A0xb7e96bb9f926d941!2s128%20Al%20Haram%2C%20Oula%20Al%20Haram%2C%20El%20Talbia%2C%20Giza%20Governorate%203531212!5e0!3m2!1sen!2seg!4v1715037136596!5m2!1sen!2seg"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs