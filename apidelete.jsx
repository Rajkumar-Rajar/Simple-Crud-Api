import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import apishow from './apishow';

const apidelete = (props) => {
    const navigate = useNavigate()
    const [id, setid] = useState(props.a)


    const homepage = () => {
       navigate("/")
        window.location.reload(true)
    }
    const delete1 = (e) => {
        fetch(`https://63109ef2826b98071a462df0.mockapi.io/user/data/${id}`, { method: "DELETE" })
            .then((res) => res.json())
            .then((json) => {
                console.warn(json);

                    navigate("/")
                    window.location.reload(true)
            })
    }

    return (
        <div>
            <center >
                <div className="app">
                    <center><h1 style={{ color: "grey" }}>DELETE YOUR DATA FROM API</h1></center>
                    <div className="login-form">
                        <div>
                            {/* <h1>{props.a}</h1> */}
                            {/* <h1>{props.b}</h1> */}
                           {/* <p>{props.c}</p> */}
                            <h2>delete the <b>{props.n}</b> data in api</h2>
                        </div>
                        <div style={{ marginLeft: "150px", marginTop: "60px" }}>
                            <button type="button" class="btn btn-primary" onClick={homepage} style={{ marginRight: "10px" }}>CANCEL</button>
                            <button type="button" class="btn btn-primary" onClick={delete1} style={{ marginLeft: "10px" }}>DELETE</button>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )


}

export default apidelete