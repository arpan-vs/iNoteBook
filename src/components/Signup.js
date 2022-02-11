import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name:"",email: "", password: "",cpassword:"" });
    
    let nevigate = useNavigate();
    const host = "http://localhost:5000";
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name,email, password } = credentials;
        // fetch("http://localhost:5000/api/auth/login");
        const respose = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name,email, password}),
        });
        const json = await respose.json();
        console.log(json);
        if (json.success) {
            // save the auth-token and redirect
            localStorage.setItem("token", json.authtoken);
            nevigate("/");
            props.showAlert("Account Created Successfully!","success");
        } else {
            props.showAlert("Invald Credentials","danger");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        aria-describedby="emailHelp"
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        aria-describedby="emailHelp"
                        onChange={onChange}
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={onChange}
                        required
                        minLength={8}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="cpassword"
                        name="cpassword"
                        onChange={onChange}
                        required
                        minLength={8}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Signup;
