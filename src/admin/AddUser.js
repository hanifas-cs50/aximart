import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAdd } from "../fetches/fetching";
import Topbar from "../parts/AdminTop";
import Footer from "../parts/Footer";


function AddUser() {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const sendUser = async (e) => {
    e.preventDefault();
    
    UserAdd(name, username, email, phone, address, password);

    setName('');
    setUsername('');
    setEmail('');
    setPhone('');
    setAddress('');
    setPassword('');
    navigate('/admin');
  }

  return (
    <div className="col-10 container-fluid p-0">
      <Topbar />
      <form onSubmit={sendUser} className="bg-light m-auto my-5 px-5 py-4 rounded-4 border border-dark-subtle" style={{ maxWidth: "500px" }}>
        <h3 className="mt-2 mb-4 fw-bold">Add User</h3>
        <div className="mb-4">
          <label for="name" className="form-label fw-bold">Name</label>
          <input required value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-100 py-1 px-2" id="name" />
        </div>
        <div className="mb-4">
          <label for="username" className="form-label fw-bold">Username</label>
          <input required value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="w-100 py-1 px-2" id="username" />
        </div>
        <div className="mb-4">
          <label for="email" className="form-label fw-bold">Email</label>
          <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-100 py-1 px-2" id="email" />
        </div>
        <div className="mb-4">
          <label for="number" className="form-label fw-bold">Phone Number</label>
          <input required value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="w-100 py-1 px-2" id="number" />
        </div>
        <div className="mb-4">
          <label for="address" className="form-label fw-bold">Address</label>
          <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="w-100 py-1 px-2" id="address" />
        </div>
        <div>
          <label for="password" className="form-label fw-bold">Password</label>
          <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="mb-4 w-100 py-1 px-2" id="password" />
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary float-left">Add User</button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default AddUser;