import React from 'react'
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./api.css"
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const apiedite1 = (props) => {

    const [able, setable] = useState(true)
    const [id, setid] = useState(props.i)
    const [show, setshow] = useState("text")
    const [show1, setshow1] = useState("text")
    const [name, setname] = useState(props.n)
    const [email, setemail] = useState(props.e)
    const [password, setpassword] = useState(props.p)
    const [confirmpassword, setconfirmpassword] = useState(props.c)
    const [state, setstate] = useState(props.s)



    const [one, setone] = useState(false)
    const [two, settwo] = useState(false)
    const [three, setthree] = useState(false)
    const [four, setfour] = useState(false)
    const [five, setfive] = useState(false)
    const[test ,settest]=useState("raj")

    const navigate = useNavigate()

    const homepage = () => {
        navigate("/")
        window.location.reload(true)
    }
    // const adding = () => {

    //     console.log("work")

    //     if (name) {
    //         setable(false)
    //         setable({a:false})
    //     } else {
    //         setable(true)
    //         setable({a:true})
    //     }



    // }

    // useEffect(()=>{
    //     if(name && email && password && confirmpassword && state){
    //         setable(false)

    //     }else{
    //         setable(three)
    //     }
    // })

    const input = (e) => {
       
        setname(e.target.value)
        if (!e.target.value) {
            setone(true)
            
            setable(true)
        }
        else {
            
            setone(false)
            setable(false)
        }
    }
    const input2 = (e) => {
        
        setemail(e.target.value)
        if (!e.target.value) {
            
            settwo(true)
            setable(true)
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)){
            settwo(true)
            setable(true)

        }
        else {
            
            settwo(false)
            setable(false)
        }
    }
    const input3 = (e) => {
      
        setpassword(e.target.value)
        if (!e.target.value) {
           
            setthree(true)
            setable(true)
        }
        
        else {
            
            setthree(false)
            setable(false)
        }
    }
    const input4 = (e) => {
        // adding()
        setconfirmpassword(e.target.value)
        if (!e.target.value) {
            
            setfour(true)
            setable(true)
            
        }
        else {
           
            setfour(false)
            setable(false)
        }
    }
    // const input5 = (e) => {
    //     // adding()
    //     setname(e.target.value)
    //     if (!e.target.value) {
    //         setone(true)
    //     }
    //     else {
    //         setone(false)
    //     }
    // }


    const submiting = (value) => {

        if(name && password && email && confirmpassword){
        console.log(value.state)

        fetch(`https://63109ef2826b98071a462df0.mockapi.io/user/data/${id}`, {
            method: "put",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    name: name,
                    email: email,
                    password: password,
                    confirmpassword: confirmpassword,
                    state: value.state
                }
            )
        })
            .then(res => res.json)
            .then(() =>
              
                window.location.reload(true),
                navigate("/")

            )
        // alert(
        //     JSON.stringify({
        //         "name": name,
        //         "email": email,
        //         "password": password,
        //         "confirmpassword": confirmpassword,
        //         "state": state
        //     }))
        // console.log("name:", value.name,
        //     "email:", value.email,
        //     "password:", value.password,
        //     "confirmpassword:", value.confirmpassword,
        //     "state:", value.state)
        }

    }

    const formik = useFormik({

        initialValues: {
            name1: name,
            email1: email,
            password1: password,
            confirmpassword1: confirmpassword,
            state1: state

        },

        // validate,
        // onSubmit,
    })

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
    const numone =() =>{
        console.log("numone function")
        if (name  && password && email && confirmpassword){
            setable(false)
        }else{
            setable(true)
        }
    }
   
    return (
        <div>

            <div className="app" onClick={numone}>
                <center><h1 style={{ color: "grey" }}>ADD YOUR EDITE FROM API</h1>
                    <h1>{props.n}</h1>
                </center>
                <form onSubmit={formik.handleSubmit}>


                    <div className="login-form">
                        <div class="input-icons">
                            <label className="one">NAME</label>
                            <div class="input-group mb-3">
                                <input class="form-control" type="text" value={name} name="name"  onChange={(e) => input(e)} onBlur={formik.handleBlur} />
                                <br></br>

                            </div>

                            {one && <div className='text-danger'><p>please enter valid name</p></div>}



                            <label>EMAIL</label>
                            <div class="input-group mb-3">
                                <input class="form-control" type="email" value={email} name="email"  onChange={(e) => input2(e)} onBlur={formik.handleBlur} />
                                <br></br>

                            </div>
                            {two && <div className='text-danger'><p>please enter valid email</p></div>}<br></br>


                            <label>PASSWORD</label>

                            <div class="input-group mb-3">
                                <input class="form-control" type={show} value={password} name="password"  onChange={(e) => input3(e)} onBlur={formik.handleBlur} />
                                <br></br>
                                <span class="input-group-text" style={{ height: "25px" }}>
                                    <i class="fa fa-eye" id="togglePassword"
                                        style={{ cursor: "pointer" }} onClick={ishow}></i>
                                </span>

                            </div>
                            {three && <div className='text-danger'><p>please enter the valid password</p></div>}<br></br>



                            <label  >CONFIRM PASSWORD</label>
                            <div class="input-group mb-3">
                                <input class="form-control" type={show1} value={confirmpassword}   name="confirmpassword" onChange={(e) => input4(e)} onBlur={formik.handleBlur} />
                                <br></br>
                                <span class="input-group-text" style={{ height: "25px" }}>
                                    <i class="fa fa-eye" id="togglePassword"
                                        style={{ cursor: "pointer" }} onClick={ishow1}></i>
                                </span>

                            </div>
                            {four && <div className='text-danger'><p>please enter the valide confirm password</p></div>}<br></br>

                            <label>STATE</label><br></br>
                            <select id="state" name="state"  >
                                <option value={state}>{state}</option>
                                <option value="tamil nadu">TAMIL NADU</option>
                                <option value="kerala">KERALA</option>
                                <option value="andhra">ANDHRA</option>
                                <option value="thelungana">THELUNGANA</option>
                            </select>
                            {five && <div className='text-danger'><p>please select the state</p></div>}<br></br>
                        </div>


                    </div>
                    <button type="button" style={{ marginRight: "10px" }} class="btn btn-primary" onClick={homepage} >CANCEL</button>

                  
                    <button type="submit" disabled={able} onClick={submiting} style={{ marginTop: "30px" }}>UPDATE</button>

                </form>
            </div>
            


        </div>
    )
}

export default apiedite1;












































// import React from 'react'
// import { useFormik } from "formik";
// import { useNavigate } from "react-router-dom";
// import "./api.css"
// import { useEffect } from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";


// const apiedite1 = (props) => {

//     const [able, setable] = useState(true)
//     const [id, setid] = useState(props.i)
//     const [show, setshow] = useState("text")
//     const [show1, setshow1] = useState("text")
//     const [name, setname] = useState(props.n)
//     const [email, setemail] = useState(props.e)
//     const [password, setpassword] = useState(props.p)
//     const [confirmpassword, setconfirmpassword] = useState(props.c)
//     const [state, setstate] = useState(props.s)



//     const [one, setone] = useState(false)
//     const [two, settwo] = useState(false)
//     const [three, setthree] = useState(false)
//     const [four, setfour] = useState(false)
//     const [five, setfive] = useState(false)
//     const[test ,settest]=useState("raj")

//     const navigate = useNavigate()

//     const homepage = () => {
//         navigate("/")
//         window.location.reload(true)
//     }
//     // const adding = () => {

//     //     console.log("work")

//     //     if (name) {
//     //         setable(false)
//     //         setable({a:false})
//     //     } else {
//     //         setable(true)
//     //         setable({a:true})
//     //     }



//     // }

//     // useEffect(()=>{
//     //     if(name && email && password && confirmpassword && state){
//     //         setable(false)

//     //     }else{
//     //         setable(three)
//     //     }
//     // })

//     const ppppp =() =>{
//         if (!name || !password || !email || !confirmpassword){
//             setable(false)
//         }
//     }

//     const input = (e) => {
       
//         setname(e.target.value)
//         if (!e.target.value) {
//             setone(true)
            
//             setable(true)
//         }
//         else {
            
//             setone(false)
//             ppppp()
//         }
//     }
//     const input2 = (e) => {
        
//         setemail(e.target.value)
//         if (!e.target.value) {
            
//             settwo(true)
//             setable(true)
//         }
//         else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)){
//             settwo(true)
//             setable(true)

//         }
//         else {
            
//             settwo(false)
//             ppppp()
//         }
//     }
//     const input3 = (e) => {
      
//         setpassword(e.target.value)
//         if (!e.target.value) {
           
//             setthree(true)
//             setable(true)
//         }
        
//         else {
            
//             setthree(false)
//             ppppp()
//         }
//     }
//     const input4 = (e) => {
//         // adding()
//         setconfirmpassword(e.target.value)
//         if (!e.target.value) {
            
//             setfour(true)
//             setable(true)
            
//         }
//         else {
           
//             setfour(false)
//             ppppp()
//         }
//     }
//     // const input5 = (e) => {
//     //     // adding()
//     //     setname(e.target.value)
//     //     if (!e.target.value) {
//     //         setone(true)
//     //     }
//     //     else {
//     //         setone(false)
//     //     }
//     // }


//     const submiting = (value) => {

//         if(name && password && email && confirmpassword){
//         console.log(value.state)

//         fetch(`https://63109ef2826b98071a462df0.mockapi.io/user/data/${id}`, {
//             method: "put",
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(
//                 {
//                     name: name,
//                     email: email,
//                     password: password,
//                     confirmpassword: confirmpassword,
//                     state: value.state
//                 }
//             )
//         })
//             .then(res => res.json)
//             .then(() =>
              
//                 window.location.reload(true),
//                 navigate("/")

//             )
//         // alert(
//         //     JSON.stringify({
//         //         "name": name,
//         //         "email": email,
//         //         "password": password,
//         //         "confirmpassword": confirmpassword,
//         //         "state": state
//         //     }))
//         // console.log("name:", value.name,
//         //     "email:", value.email,
//         //     "password:", value.password,
//         //     "confirmpassword:", value.confirmpassword,
//         //     "state:", value.state)
//         }

//     }

//     const formik = useFormik({

//         initialValues: {
//             name1: name,
//             email1: email,
//             password1: password,
//             confirmpassword1: confirmpassword,
//             state1: state

//         },

//         // validate,
//         // onSubmit,
//     })

//     const ishow = () => {
//         if (show == "text") {
//             setshow("password")
//         }
//         else {
//             setshow("text")
//         }
//     }
//     const ishow1 = () => {
//         if (show1 == "text") {
//             setshow1("password")
//         }
//         else {
//             setshow1("text")
//         }
//     }
//     const numone =() =>{
//         console.log("numone function")
//         if (name  && password && email && confirmpassword){
//             setable(false)
//         }else{
//             setable(true)
//         }
//     }
   
//     return (
//         <div>

//             <div className="app" onClick={numone}>
//                 <center><h1 style={{ color: "grey" }}>ADD YOUR EDITE FROM API</h1>
//                     <h1>{props.n}</h1>
//                 </center>
//                 <form onSubmit={formik.handleSubmit}>


//                     <div className="login-form">
//                         <div class="input-icons">
//                             <label className="one">NAME</label>
//                             <div class="input-group mb-3">
//                                 <input class="form-control" type="text" value={name} name="name"  onChange={(e) => input(e)} onBlur={formik.handleBlur} />
//                                 <br></br>

//                             </div>

//                             {one && <div className='text-danger'><p>please enter valid name</p></div>}



//                             <label>EMAIL</label>
//                             <div class="input-group mb-3">
//                                 <input class="form-control" type="email" value={email} name="email"  onChange={(e) => input2(e)} onBlur={formik.handleBlur} />
//                                 <br></br>

//                             </div>
//                             {two && <div className='text-danger'><p>please enter valid email</p></div>}<br></br>


//                             <label>PASSWORD</label>

//                             <div class="input-group mb-3">
//                                 <input class="form-control" type={show} value={password} name="password"  onChange={(e) => input3(e)} onBlur={formik.handleBlur} />
//                                 <br></br>
//                                 <span class="input-group-text" style={{ height: "25px" }}>
//                                     <i class="fa fa-eye" id="togglePassword"
//                                         style={{ cursor: "pointer" }} onClick={ishow}></i>
//                                 </span>

//                             </div>
//                             {three && <div className='text-danger'><p>please enter the valid password</p></div>}<br></br>



//                             <label  >CONFIRM PASSWORD</label>
//                             <div class="input-group mb-3">
//                                 <input class="form-control" type={show1} value={confirmpassword}   name="confirmpassword" onChange={(e) => input4(e)} onBlur={formik.handleBlur} />
//                                 <br></br>
//                                 <span class="input-group-text" style={{ height: "25px" }}>
//                                     <i class="fa fa-eye" id="togglePassword"
//                                         style={{ cursor: "pointer" }} onClick={ishow1}></i>
//                                 </span>

//                             </div>
//                             {four && <div className='text-danger'><p>please enter the valide confirm password</p></div>}<br></br>

//                             <label>STATE</label><br></br>
//                             <select id="state" name="state"  >
//                                 <option value={state}>{state}</option>
//                                 <option value="tamil nadu">TAMIL NADU</option>
//                                 <option value="kerala">KERALA</option>
//                                 <option value="andhra">ANDHRA</option>
//                                 <option value="thelungana">THELUNGANA</option>
//                             </select>
//                             {five && <div className='text-danger'><p>please select the state</p></div>}<br></br>
//                         </div>


//                     </div>
//                     <button type="button" style={{ marginRight: "10px" }} class="btn btn-primary" onClick={homepage} >CANCEL</button>

                  
//                     <button type="submit" disabled={able} onClick={submiting} style={{ marginTop: "30px" }}>UPDATE</button>

//                 </form>
//             </div>
            


//         </div>
//     )
// }

// export default apiedite1;