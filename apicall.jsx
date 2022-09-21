import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { confirmAlert } from 'react-confirm-alert';
import { useFormik } from "formik";
// import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";


import { useEffect } from "react";
import { useState } from "react";

// -----------------------------------------------------------------------------------------------------------------------toast-------------------------------------
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import"glob-loader"
// -----------------------------------------------------------------------------------------------------------------------toast-------------------------------------

const apicall = () => {
    const [table, settable] = useState([])
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [address1, setaddress1] = useState("")
    const [id, setid] = useState("")
    const [dum, setdum] = useState("")
    const [edite, setedite] = useState(1)
    const [id1, setid1] = useState("")
    const [ip, setip] = useState("one")






    useEffect(() => {

        fetch("https://63109ef2826b98071a462df0.mockapi.io/user/data")
            .then((res) => res.json())
            .then((json) => settable(json))

    }, [])

    const deletechange = (id, name) => {
        setdum(name)
        setid1(id)

    }

    const edit = (id) => {
        console.log(id)
        console.log("ppppppppppppppppppppp")
        setid1(id)
        console.log(id1)
        let item = table[id-1]
        setip("two")
        setname(item.name)
        setemail(item.email)
        setaddress(item.address.city)
        setaddress1(item.address.street)
        setid(item.id)
    }


    const delete1 = (id) => {
        fetch(`https://63109ef2826b98071a462df0.mockapi.io/user/data/${id1}`, { method: "DELETE" })
            .then((res) => res.json())
            .then((json) => {
                console.warn(json);
                window.location.reload()
            })
    }


    // const update = (e) => {
    //     e.preventDefault()
    //     console.log('pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp')
    //     fetch(`https://63109ef2826b98071a462df0.mockapi.io/user/data/${id}`, {
    //         method: "PUT",
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(
    //             {
    //                 name: name,
    //                 email: email,
    //                 address: { street: address, city: address1 }
    //             }
    //         )
    //     }).then(res => res.json)
    //         .then(() => {
    //             window.location.reload(true)
    //             // console.warn(res),
    //             //window.location.reload(true)

    //         })
    // }



    // const aduser = (e) => {
    //     e.preventDefault()
    //     console.log('pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp')

    //     fetch(`https://63109ef2826b98071a462df0.mockapi.io/user/data`, {
    //         method: "post",
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(
    //             {
    //                 name: name,
    //                 email: email,
    //                 address: { street: address, city: address1 }
    //             }
    //         )
    //     })
    //         .then(res => res.json)
    //         .then(() =>

    //             window.location.reload(true)
    //         )
    // }



    const onSubmit = (value) => {
        //  value.preventDefault()
        // console.log('pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp')
        if (ip == "one") {

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

                    window.location.reload(true)
                )
        }

        else {

            fetch(`https://63109ef2826b98071a462df0.mockapi.io/user/data/${id}`, {
                method: "PUT",
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
            }).then(res => res.json)
                .then(() => {
                    window.location.reload(true)
                })

        }
    }




    // ------------------------------formic

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
            errors.email = 'please enter valid email'
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
    const formik = useFormik({

        initialValues: {

            name: "",
            email: '',
            city: '',
            street: ""

        },

        validate,
        onSubmit
        //    =>{
        // fetch(`https://63109ef2826b98071a462df0.mockapi.io/user/data`, {
        //     method: "post",
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify(
        //         {
        //             name: value.namee,
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

    const formik1 = useFormik({

        initialValues: {

            name: "",
            email: '',
            city: '',
            street: ""

        },

        validate,
        onSubmit

    })

    // ------------------------------formic

    return (
        <div className="bgcolor">
            <center><h1 style={{ color: "grey" }}>THE USER DATA FROM API</h1></center>
            {/* <button class="dropdown-item" onClick={() => this.edit()}>adduse</button> */}
            {/* <button type="button" class="btn btn-success" style={{ marginLeft: "90%" }} onClick={() => adduse()}> */}
            <button type="button" class="btn btn-primary" style={{ marginLeft: "90%" }} data-toggle="modal" data-target="#exampleModalCenter2">
                ADDUSER</button>
                {/* <Link to="Adduser"><button class="btn btn-primary" style={{ marginLeft: "90%" }}>adduser</button></Link> */}
            <div className="table" style={{ marginTop: "50px" }}>
                <table className="table table-hover">
                    <thead style={{ backgroundColor: "lightblue" }}>
                        <tr>
                            <th>Id</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ADDRESS(state,city)</th>
                            <th style={{ textAlign: "center" }}>EDIT/DELETE</th>
                        </tr>
                    </thead>
                    {table.map((e, i) => <tbody style={{ backgroundColor: "lightgrey" }}>
                        <tr key={i} >
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.address.street},{e.address.city}</td>
                            <td style={{ textAlign: "center" }}>
                                <div class="btn-group dropleft">
                                    <button type="button" class="btn btn-Light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        :
                                    </button>
                                    <div class="dropdown-menu">

                                        <button class="dropdown-item"  >
                                            {/* <button class="dropdown-item" onClick={() => this.edit(e.id)}> */}
                                            {/* <button> */}
                                            <button type="button" class="btn btn-primary" data-toggle="modal" onClick={() => edit(e.id)} data-target="#exampleModalCenter">
                                                UPDATE
                                            </button><br></br>

                                            {/* <button> */}
                                            {/* <button class="dropdown-item" onClick={() => this.delete(e.id)} > */}
                                            <button style={{ marginTop: "10px" }} type="button" class="btn btn-primary" onClick={() => deletechange(e.id, e.name)} data-toggle="modal" data-target="#exampleModalCenter1">
                                                DELETE
                                                {/* </button> */}
                                            </button>
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>)}
                </table>
            </div>
            {/* <Link to="Adduser"><button>adduser</button></Link> */}
            {/* -------------------------------------------- ------------------------------------------------------------------------------------------bootstrap edit --------------- */}
            <form onSubmit={formik1.handleSubmit}>

                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">CHANGE UPDATE</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div  >

                                    <div style={{ backgroundColor: "lightgreen" }} className="login-form">
                                        {/* <form onSubmit={formik.handleSubmit}> */}
                                        <table >
                                            <tr>
                                                <td><label>NAME</label></td>
                                                <td><input type="text" name="name" placeholder={name} onChange={formik1.handleChange} onBlur={formik1.handleBlur} />
                                                    {formik1.touched.name && formik1.errors.name ?
                                                        <div className='text-danger'>{formik1.errors.name}</div>
                                                        : null}
                                                </td>

                                            </tr>
                                            <tr>
                                                <td> <label>EMAIL</label></td>
                                                <td> <input type="email" name="email" placeholder={email} onChange={formik1.handleChange} onBlur={formik1.handleBlur} />
                                                    {formik1.touched.email && formik1.errors.email ?
                                                        <div className='text-danger'>{formik1.errors.email}</div> : null}
                                                </td>

                                            </tr>
                                            <tr>
                                                <td> <label>ADDRESS(city)</label></td>
                                                <td><input type="text" name="city" placeholder={address} onChange={formik1.handleChange} onBlur={formik1.handleBlur} />
                                                    {formik1.touched.city && formik1.errors.city ?
                                                        <div className='text-danger'>{formik1.errors.city}</div> : null}
                                                </td>

                                            </tr>
                                            <tr>
                                                <td> <label>ADDRESS(state)</label></td>
                                                <td><input type="text" name="street" placeholder={address1} onChange={formik1.handleChange} onBlur={formik1.handleBlur} />
                                                    {formik1.touched.street && formik1.errors.street ?
                                                        <div className='text-danger'>{formik1.errors.street}</div> : null}
                                                </td>

                                            </tr>
                                            <tr>
                                                <td></td>
                                                {/* <td><button type="submit" onClick={update}>UPDATE</button>
                                                                    <button type="submit" >{count}</button></td> */}



                                            </tr>
                                        </table>
                                        {/* </form> */}
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button> */}

                                {/* <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={update} >UPDATE</button> */}
                                {/* onClick={update} */}
                                {/* >UPDATE</button> */}
                                <input type="submit"/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            {/*-------------------------------------- -------------------------------------------------------------------------------------------bootstrap --------------- */}
            {/* -------------------------------------------- ------------------------------------------------------------------------------------------bootstrap  delete--------------- */}
            <div class="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">CHANGE UPDATE</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            do you delete <b>{dum}</b> data it
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>


                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={() => delete1(id)}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*-------------------------------------- -------------------------------------------------------------------------------------------bootstrap --------------- */}

            {/* -------------------------------------------- ------------------------------------------------------------------------------------------bootstrap  add--------------- */}
            <form onSubmit={formik.handleSubmit}>
                <div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle"> ADD USER</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div  >

                                    <div style={{ backgroundColor: "lightgreen" }} className="login-form">

                                        {/* <form onSubmit={formik.handleSubmit}> */}
                                        <table >
                                            <tr>
                                                <td>
                                                    <label>NAME</label>
                                                </td>
                                                <td>
                                                    <input type="text" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                    {formik.touched.name && formik.errors.name ?
                                                        <div className='text-danger'>{formik.errors.name}</div>
                                                        : null}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label>EMAIL</label>
                                                </td>
                                                <td> <input type="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                    {formik.touched.email && formik.errors.email ?
                                                        <div className='text-danger'>{formik.errors.email}</div> : null}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label>ADDRESS(city)</label>
                                                </td>
                                                <td>
                                                    <input type="text" name="city" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                    {formik.touched.city && formik.errors.city ?
                                                        <div className='text-danger'>{formik.errors.city}</div> : null}
                                                </td>


                                            </tr>
                                            <tr>
                                                <td>
                                                    <label>ADDRESS(street)</label>
                                                </td>
                                                <td>
                                                    <input type="text" name="street" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                    {formik.touched.street && formik.errors.street ?
                                                        <div className='text-danger'>{formik.errors.street}</div> : null}
                                                </td>
                                            </tr>
                                            {/* <tr>
                                    <td></td>
                                  
                                        <td>
                                            <button type="submit" onClick={aduser} >ADDUSER</button>
                                            <input type="submit" />
                                            </td>


                                </tr> */}

                                        </table>
                                        {/* </form> */}

                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>


                            <button type="button" class="btn btn-primary" data-dismiss="modal" >ADD</button> */}
                                <input type="submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {/*-------------------------------------- -------------------------------------------------------------------------------------------bootstrap --------------- */}



            {/* <div  >
         
                <div style={{ backgroundColor: "lightgreen" }} className="app">
                    <center className="login-form">
                        <form >
                            <table >
                                <tr>
                                    <td><label>NAME</label></td>
                                    <td><input type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} required /></td>

                                </tr>
                                <tr>
                                    <td> <label>EMAIL</label></td>
                                    <td> <input type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} required /></td>

                                </tr>
                                <tr>
                                    <td> <label>ADDRESS(city)</label></td>
                                    <td><input type="text" name="address" value={address} onChange={(e) => setaddress(e.target.value)} required /></td>

                                </tr>
                                <tr>
                                    <td> <label>ADDRESS(state)</label></td>
                                    <td><input type="text" name="address" value={address1} onChange={(e) => setaddress1(e.target.value)} required /></td>

                                </tr>
                                <tr>
                                    <td></td>
                                    {edite ? <td><button type="submit" onClick={update}>UPDATE</button>
                                        <button type="submit" >{count}</button></td> :
                                        <td><button type="submit" onClick={aduser}>ADDUSER</button></td>}


                                </tr>
                            </table>
                        </form>
                    </center>
                </div>
</div> */}

        </div>
    )
}

export default apicall;




// const deleteRow = (id) => {
//     // let del = value[id-1]
//     setid1(id)
//     setvalue(value => value.filter(value => value.id !== id ))
//     toast.success("Deleted Successfully",{
//         position: toast.POSITION.TOP_CENTER
//     });
//     window.location.reload();
// }