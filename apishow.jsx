import React, { useState, Component, useRef } from "react";
import { Routes, Route ,useParams} from "react-router-dom"
import Apiadd from "./apiadd";
import Apiedite from "./apiedite";
import Apidelete from "./apidelete";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Apiedite1 from "./apiedite1";

const apishow = () => {


    const [table, settable] = useState([])
    const [roll, setroll] = useState('lll')
    const [apis, setapis] = useState(true)
    const [roll1, setroll1] = useState('lll')
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [confirmpassword, setconfirmpassword] = useState()
    const [state, setstate] = useState()
    const [id, setid] = useState()
    const [apidelete1,setapidelete1]=useState("l")
    const {id1} = useParams();
// const ref =useRef()


    const navigate = useNavigate()


    useEffect(() => {

        fetch("https://63109ef2826b98071a462df0.mockapi.io/user/data")
            .then((res) => res.json())
            .then((json) => settable(json))

    }, [])

    const update = (id) => {
        // console.log(id)
        setapis(false)
        let item =table[id -1]
        setname(item.name)
        setemail(item.email)
        setroll(id)
        setpassword(item.password)
        setconfirmpassword(item.confirmpassword)
        setstate(item.state)
        setid(item.id)
        // console.log(setapidelete1)
        // console.log(name)

    }
    const delete1 = (id) => {
        // id.preventDefault()
        // navigate("apidelete")
        setapis(false)
    
        let item =table[id -1]
        setname(item.name)
      
        console.log(id)
        setroll(id)
        setapidelete1(`apidelete/${id}`) 
        console.log(roll,"roll")
        // ref(item.id)
        // id.preventDefault()

    }
   const  apiadd =() =>{
    setapis(false)
   }
//    const  apiadd =() =>{
//     setapis(false)
//    }
    return (
        <div>

{apis && <div>
            <center><h1 style={{ color: "grey" }}>THE USER DATA FROM API</h1></center>
            <p>{setapidelete1}</p>
            <Link to="apiadd"><button style={{ marginLeft: "1675px" }} type="button" onClick={apiadd} class="btn btn-success" >ADDUSER</button></Link>


            <div className="bgcolor">
                <div className="table" style={{ marginTop: "50px" }}>
                    <table className="table table-hover">
                        <thead style={{ backgroundColor: "lightblue" }}>
                            <tr>
                                <th>Id</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>PASSWORD</th>
                                <th>CONFIRM PASSWORD</th>
                                <th>STATE</th>
                                <th style={{ textAlign: "center" }}>EDIT/DELETE</th>
                            </tr>
                        </thead>
                        {table.map((e, i) => <tbody style={{ backgroundColor: "lightgrey" }}>
                            <tr key={i} >
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.password}</td>
                                <td>{e.confirmpassword}</td>
                                <td>{e.state}</td>
                                <td style={{ textAlign: "center" }}>
                                    <div class="btn-group dropleft">
                                        <button type="button" class="btn btn-Light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            :
                                        </button>
                                        <div class="dropdown-menu">

                                            <button class="dropdown-item"  >
                                                <Link to={"apiedite/" +e.id}>
                                                    <button type="button" class="btn btn-primary" data-toggle="modal" onClick={() =>update(e.id)} data-target="#exampleModalCenter">
                                                    UPDATE
                                                </button><br></br>
                                                </Link>


                                                <Link to={"apidelete/" +e.id} >
                                                <button style={{ marginTop: "10px" }} onClick={() => delete1(e.id)} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter1">
                                                    DELETE

                                                </button>
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>)}
                    </table>
                    {/* <button onClick={(e) =>delete1(e.target.value)} value="rajkumarr">add</button> */}

                </div>
            </div>
            </div>}
            <Routes>
                {/* <Route path="/" element={<Apishow />} /> */}
                <Route path="apiadd" element={<Apiadd />} />
                {/* <Route path={"apiedite/" +roll} element={<Apiedite i={id} n={name} e={email} p={password} c={confirmpassword} s={state} />} /> */}
                <Route path={"apiedite/" +roll} element={<Apiedite1 i={id} n={name} e={email} p={password} c={confirmpassword} s={state} />} />
                <Route path={"apidelete/"+roll} element={<Apidelete a={roll} n={name}/> } />
            </Routes>
           
        </div>
    )
}

export default apishow