import React, { useRef } from 'react'
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./api.css"
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const apiadd = () => {

    const [able, setable] = useState(true)
    const [show, setshow] = useState("password")
    const [show1, setshow1] = useState("password")
    const navigate = useNavigate()


    // const ref=useRef()
    // useEffect(() =>{
    //     ref.current.focus()
    // })

    const homepage = () => {

        navigate("/")
        window.location.reload(true)
    }


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


        if (!values.password) {
            errors.password = "required"
        }
        else if (values.password.length < 5) {
            errors.password = 'please enter more than 5 letters'
        }
        if (!values.confirmpassword) {
            errors.confirmpassword = "required"
        }
        else if (values.password != values.confirmpassword) {
            errors.confirmpassword = 'please enter correct password'
        }
        if (!values.state) {
            errors.state = "required"
        }
        if (values.name && values.email && values.password && values.confirmpassword && values.state) {
            if (values.password == values.confirmpassword) {
                setable(false)
            }

        }
        else {
            setable(true)
        }

        return errors;

    }
//     const text =(value)=>{ JSON.stringify({
//         "name": value.name,
//         "email": value.email,
//         "password": value.password,
//         "confirmpassword": value.confirmpassword,
//         "state": value.state
//     })
// }



    const onSubmit = (value) => {
        setable(false)
        console.log(value.state)
        //  value.preventDefault()
        // console.log('pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp')
        fetch(`https://63109ef2826b98071a462df0.mockapi.io/user/data`, {
            method: "post",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {

                    name: value.name,
                    email: value.email,
                    password: value.password,
                    confirmpassword: value.confirmpassword,
                    state: value.state
                }
            )
        })
            .then(res => res.json)
            .then(() =>

                //   setTimeout(() => {


                window.location.reload(true),
                navigate("/")
                //   }, 3000)
            )
        alert(
  
            JSON.stringify({
                "name": value.name,
                "email": value.email,
                "password": value.password,
                "confirmpassword": value.confirmpassword,
                "state": value.state
            }),
            console.log(
                "name:", value.name,
                "email:", value.email,
                "password:", value.password,
                "confirmpassword:", value.confirmpassword,
                "state:", value.state)
            
        )
    }
    const formik = useFormik({

        initialValues: {

            name: "",
            email: '',
            password: '',
            confirmpassword: "",
            state: ""

        },

        validate,
        onSubmit,
    })

    const IconDiv = () => {
        console.log("icon is working")
    }
    const ishow = () => {
        if (show == "text") {
            setshow("password")
        }
        else {
            setshow("text")
        }
    }
    const ishow1 = () => {
        if (show1 == "text") {
            setshow1("password")
        }
        else {
            setshow1("text")
        }
    }
    return (
        <div>

            <div className="app">
                <center><h1 style={{ color: "grey" }}>ADD YOUR DATA FROM API</h1></center>
                <form onSubmit={formik.handleSubmit}>


                    <div className="login-form">
                        <div class="input-icons">
                            <label className="one">NAME</label>
                            <div class="input-group mb-3">
                                <input class="form-control" type="text" id="password" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                <br></br>

                            </div>
                            {formik.touched.name && formik.errors.name ? <div className='text-danger'>{formik.errors.name}</div> : null}



                            <label>EMAIL</label>
                            <div class="input-group mb-3">
                                <input class="form-control" type="email" id="password" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                <br></br>

                            </div>
                            {formik.touched.email && formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}<br></br>


                            <label>PASSWORD</label>

                            <div class="input-group mb-3">
                                <input class="form-control" type={show} id="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                <br></br>
                                <span class="input-group-text" style={{ height: "25px" }}>
                                    <i class="fa fa-eye" id="togglePassword"
                                        style={{ cursor: "pointer" }} onClick={ishow}></i>
                                </span>

                            </div>
                            {formik.touched.password && formik.errors.password ? <div className='text-danger'>{formik.errors.password}</div> : null}<br></br>



                            <label  >CONFIRM PASSWORD</label>
                            <div class="input-group mb-3">
                                <input class="form-control" type={show1} id="password" name="confirmpassword" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                <br></br>
                                <span class="input-group-text" style={{ height: "25px" }}>
                                    <i class="fa fa-eye" id="togglePassword"
                                        style={{ cursor: "pointer" }} onClick={ishow1}></i>
                                </span>

                            </div>
                            {formik.touched.confirmpassword && formik.errors.confirmpassword ? <div className='text-danger'>{formik.errors.confirmpassword}</div> : null}<br></br>

                            <label>STATE</label><br></br>
                            {/* <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" name="state" onChange={formik.handleChange} onBlur={formik.handleBlur} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            SELECT STATE
        </button>
        <div class="dropdown-menu" onChange={formik.handleChange} aria-labelledby="dropdownMenuButton">
            <option class="dropdown-item" onChange={formik.handleChange} value="TAMIL NADU">TAMIL NADU</option>
            <option class="dropdown-item" onChange={formik.handleChange} value="KERALA">KERALA</option>
            <option class="dropdown-item" onChange={formik.handleChange} value="ANDHRA PRADHESH">ANDHRA PRADHESH</option>
        </div>

    </div> */}


                            <select id="state" name="state" onChange={formik.handleChange} onBlur={formik.handleBlur}>
                                <option value="--------"></option>
                                <option value="tamil nadu">TAMIL NADU</option>
                                <option value="kerala">KERALA</option>
                                <option value="andhra">ANDHRA</option>
                                <option value="thelungana">THELUNGANA</option>
                            </select>
                            {formik.touched.state && formik.errors.state ?
                                <div className='text-danger'>{formik.errors.state}</div> : null}<br></br>
                        </div>


                    </div>
                    <div>
                  <p>  <button type="button" style={{ marginRight: "10px" }} class="btn btn-primary" onClick={homepage} >CANCEL</button>

                    <button type="submit" disabled={able} class="btn btn-primary" >ADD UESR</button></p>
                    </div>

                </form>
            </div>





















































        </div>
    )
}

export default apiadd