import { useState } from "react";
import axios from "axios";
const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    async function handleLogin(event) {
        event.preventDefault();
        try{
            const request = await axios.post("http://localhost:3004/api/auth/login", {
                userName,
                password    
            })
            const token = request.data;
            console.log(token);
            localStorage
            alert("Login Successful");
        }catch(e){
            console.log("Login Error", e);
        }
        console.log("From Submitted");
    }
    return (
        <div>
            <h1> Login </h1>
            <div>
                <form onSubmit={handleLogin}>
                    <label htmlFor="userName">User Name</label>
                    <input  id="userName" name="userName" type="text" onChange={(e) => setUserName(e.target.value)}/>
                    <br></br>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                    <br></br>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}; 
export default Login;