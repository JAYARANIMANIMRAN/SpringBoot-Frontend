import { useState } from "react";
import axios from "axios";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [roleName, setRoleName] = useState([]);

    const handleRoleChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setRoleName([...roleName, value]);
        } else {
            setRoleName(roleName.filter((role) => role !== value));
        }
    };

    async function addNewEmployee(event) {
        event.preventDefault();
        try {
            const req = await axios.post("https://springboot-deploy-aajx.onrender.com/api/auth/register", {
                name,
                email,
                password,
                userName,
                roleName // already an array
            });
            console.log(req);
            if (req.data) {
                alert(req.data);
            } else {
                alert("Error");
            }
        } catch (err) {
            alert("Registration failed");
            console.error(err);
        }
    }

    return (
        <div>
            <h1>SignUp</h1>
            <div>
                <form onSubmit={addNewEmployee}>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" onChange={(e) => setName(e.target.value)} />
                    <br /><br />

                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} />
                    <br /><br />

                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                    <br /><br />

                    <label htmlFor="userName">User Name</label>
                    <input id="userName" type="text" onChange={(e) => setUserName(e.target.value)} />
                    <br /><br />

                    <label>Role Name (Select one or more)</label><br />
                    <label>
                        <input
                            type="checkbox"
                            value="ROLE_USER"
                            checked={roleName.includes("ROLE_USER")}       
                            onChange={handleRoleChange}
                        /> ROLE_USER
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            value="ROLE_ADMIN"
                            checked={roleName.includes("ROLE_ADMIN")}
                            onChange={handleRoleChange}
                        /> ROLE_ADMIN
                    </label>
                    <br /><br />

                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
