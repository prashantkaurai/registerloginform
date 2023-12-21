import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {console.log(result)
        Navigate('/login')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center p-5 align-item-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25 h-70">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text" placeholder="Enter Name" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setName(e.target.value)} />
                    </div>
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
                        Register
                    </button>
                </form>
                <p>Already have an Account</p>
                <Link to="/Login" className="btn btn-default border w-100 bg-light rounded-0">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Signup;