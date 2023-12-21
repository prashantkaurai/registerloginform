import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/login", {email, password})
        .then(result => {console.log(result)
        navigate('/home')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center p-4 align-item-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25 h-50">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="email" placeholder="Enter Email Id" name="Email" className="form-control rounded-0" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Password">
                        <strong>Password</strong>
                    </label>
                    <input type="password" placeholder="Enter Password" name="Password" className="form-control rounded" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">
                    Login
                </button>
            </form>
            <p>Already have an Account</p>
            <Link to="/Register" className="btn btn-default border w-100 bg-light rounded-0">
                Register
            </Link>
        </div>
    </div>
    );
}

export default Login;