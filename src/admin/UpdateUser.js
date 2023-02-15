import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserUpdate, UserData } from "../fetches/fetching";
import Footer from "../parts/Footer";


const EditUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState(`Loading...`);
  const [username, setUsername] = useState(`Loading...`);
  const [email, setEmail] = useState(`Loading...`);
  const [phone, setPhone] = useState(`Loading...`);
  const [address, setAddress] = useState(`Loading...`);
  const [password, setPassword] = useState(`Loading...`);

  useEffect(() => {
    const loadUserList = async () => {
      try {
        const userList = await UserData(id);

        setName(`${userList[0].name}`);
        setUsername(`${userList[0].username}`);
        setEmail(`${userList[0].email}`);
        setPhone(`${userList[0].number}`);
        setAddress(`${userList[0].address}`);
        setPassword(`${userList[0].password}`);
      } catch(error) {
        console.log(error.message)
      }
    }
    loadUserList();
  }, []);

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