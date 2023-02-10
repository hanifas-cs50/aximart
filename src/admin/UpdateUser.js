import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserUpdate, UserData } from "../fetches/fetching";
import Footer from "../parts/Footer";


const EditUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const loadUserList = async () => {
      try {
        const userList = await UserData(id);
        setUserData(userList);
      } catch(error) {
        console.log(error.message)
      }
    }
    loadUserList();
  }, []);

  const [name, setName] = useState(`${userData.length > 0 && userData[0].name}`);
  const [username, setUsername] = useState(`${userData.length > 0 && userData[0].username}`);
  const [email, setEmail] = useState(`${userData.length > 0 && userData[0].email}`);
  const [phone, setPhone] = useState(`${userData.length > 0 && userData[0].number}`);
  const [address, setAddress] = useState(`${userData.length > 0 && userData[0].address}`);
  const [password, setPassword] = useState(`${userData.length > 0 && userData[0].password}`);

  const sendUser = async (e) => {
    e.preventDefault();
    
    UserUpdate(id, name, username, email, phone, address, password);

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
      <form onSubmit={sendUser} className="bg-light m-auto my-5 px-5 py-4 rounded-4 border border-dark-subtle" style={{ maxWidth: "500px" }}>
        <h3 className="mt-2 mb-4 fw-bold">Add User</h3>
        <div className="mb-4">
          <label for="name" className="form-label fw-bold">Name</label>
          <input required value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-100" id="name" />
        </div>
        <div className="mb-4">
          <label for="username" className="form-label fw-bold">Username</label>
          <input required value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="w-100" id="username" />
        </div>
        <div className="mb-4">
          <label for="email" className="form-label fw-bold">Email</label>
          <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-100" id="email" />
        </div>
        <div className="mb-4">
          <label for="number" className="form-label fw-bold">Phone Number</label>
          <input required value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="w-100" id="number" />
        </div>
        <div className="mb-4">
          <label for="address" className="form-label fw-bold">Address</label>
          <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="w-100" id="address" />
        </div>
        <div>
          <label for="password" className="form-label fw-bold">Password</label>
          <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="mb-4 w-100" id="password" />
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary float-left">Add User</button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default EditUser;