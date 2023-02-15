import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./fetches/fetching";

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    UserAuth(username, password)
      .then((res) => {
        if (res[0].status === "admin") {
          sessionStorage.setItem('id', res[0].id);
          sessionStorage.setItem('username', res[0].usernm);
          navigate('/admin');
        }
        else if (res[0].status === "success") {
          sessionStorage.setItem('id', res[0].id);
          sessionStorage.setItem('username', res[0].usernm);
          navigate('/');
        } else {
          alert("wrong password")
        }
      });
  }

  return (
    <div className="vh-100 vw-100 d-flex flex-column align-items-center justify-content-center bg-primary">
      <h1 className="fw-bold text-light mb-4" style={{ fontSize: "5rem" }}>
        Axi<span className="pt-3 px-3 bg-light rounded-3 text-primary" style={{ fontFamily: "Josefin Sans" }}>Mart</span>
      </h1>
      <form onSubmit={handleSubmit} className="bg-light p-5 rounded-4 shadow" style={{ width: "350px" }}>
        <div className="mb-4">
          <label for="username" className="form-label fw-bold">Username</label>
          <input required value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="w-100 py-1 px-2" id="username" />
        </div>
        <div>
          <label for="password" className="form-label fw-bold">Password</label>
          <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="mb-4 w-100 py-1 px-2" id="password" />
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary float-left">Login</button>
          </div>
        </div>
      </form>
      <div className="form-text text-light fw-bold mt-3">Don't have an account? <Link className="text-light" to="/signup">Sign up here...</Link></div>
    </div>
  )
}

export default Login;