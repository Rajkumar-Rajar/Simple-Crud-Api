import React from 'react'
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./api.css"
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';+

const adduser = () => {
    const navigate = useNavigate()


    const validate = (values) => {
        var errors = {};
        if (!values.name) {
            errors.name = "required"
        }
        else if (values.name.length < 5) {
            errors.name = 'please enter more than 5 letters in name'
        }


        if (!values.email) {
            errors.email = "required"
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'please enter more than 5 letters in email'
        }


        if (!values.city) {
            errors.city = "required"
        }
        else if (values.city.length < 5) {
            errors.city = 'please enter more than 5 letters in city'
        }
        if (!values.street) {
            errors.street = "required"
        }
        else if (values.street.length < 5) {
            errors.street = 'please enter more than 5 letters in street'
        }
        return errors;
    }
    const onSubmit = (value) => {
        //  value.preventDefault()
        console.log('pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp')
        fetch(`https://63109ef2826b98071a462df0.mockapi.io/user/data`, {
            method: "post",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    name: value.name,
                    email: value.email,
                    address: { street: value.street, city: value.city }
                }
            )
        })
            .then(res => res.json)
            .then(() =>

                window.location.reload(true),
                navigate("/")
            )
    }
    const formik = useFormik({

        initialValues: {

            name: "",
            email: '',
            city: '',
            street: ""

        },

        validate,
        onSubmit,
        // =(value)=>{
        // fetch(`https://63109ef2826b98071a462df0.mockapi.io/user/data`, {
        //     method: "post",
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify(
        //         {
        //             name: value.name,
        //             email: value.email,
        //             address: { street: value.city, city: value.street }
        //         }
        //     )
        // })
        //     .then(res => res.json)
        //     .then(() =>

        //         window.location.reload(true)
        //     )
        // }

    })
    return (
        <div  >
            <center >
                {/* <div className="login-form"> */}
                <div className="app">                   
                     <form onSubmit={formik.handleSubmit}>
                      
                        <div className="login-form">
                            <label className="one">NAME</label>
                           
                            <input type="text" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} style={{marginLeft:"60px"}}/>
                            {formik.touched.name && formik.errors.name ?
                                <div className='text-danger'>{formik.errors.name}</div>
                                : null}<br></br>
                       
                       
                       


                            <label>EMAIL</label>
                          


                            <input type="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} style={{marginLeft:"60px"}}/>
                            {formik.touched.email && formik.errors.email ?
                                <div className='text-danger'>{formik.errors.email}</div> : null}<br></br>
                        
                        
                            <label>ADDRESS(city)</label>
                           
                            <input type="text" name="city" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.city && formik.errors.city ?
                                <div className='text-danger'>{formik.errors.city}</div> : null}<br></br>
                       

                       
                            <label>ADDRESS(state)</label>
                           
                            <input type="text" name="street" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.street && formik.errors.street ?
                                <div className='text-danger'>{formik.errors.street}</div> : null}<br></br>
                        </div>
                        
                        <button type="submit" >UPDATE</button>
                                                                    
                       
                        {/* <input type="submit" /> */}
                        
                    </form>
                    </div>


                {/* </div> */}
            </center>
            {/* <div className="form">
                <form>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="uname" required />

                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required />

                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
            </div> */}

            {/* <Link to="/"><button>apica</button></Link> */}

        </div>
    )
}

export default adduser