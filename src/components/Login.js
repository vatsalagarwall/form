import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function Login() {

    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5000/", {
                email, password
            })
                .then(res => {
                    if (res.data == "Exist") {
                        history("/home", { state: { id: email } })
                    }
                    else if (res.data == "Does Not Exists") {
                        alert("User has to sign in")
                    }
                })
                .catch(e => {
                    alert("Wrong Details")
                    console.log(e)
                })
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="login">
            <h1>Login Form</h1>
            <form input="POST">
                <p>Login</p>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                <p>Password</p>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />

                <input type="submit" onClick={submit} />
            </form>
            <br />
            <Link to='/signup'>Signup Pag</Link>
        </div>
    )
}

export default Login 