import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserData, UserDelete } from "../fetches/fetching";
import Footer from "../parts/Footer";
import Topbar from "../parts/AdminTop";

const Dashboard = () => {
  const [users, setUserList] = useState([]);
  // const [users, setUserList] = useState([{name: "My Real Name", username: "AUserName42", number: "089456920442", email: "mine@gmail.com", id: "PoImG6pihgigmLZBeHfN"},]);

  useEffect(() => {
    const loadUserList = async () => {
      try {
        const userList = await UserData();
        setUserList(userList);
      } catch (error) {
        console.log(error.message)
      }
    }

    loadUserList();
  }, []);

  const deleteUser = (id) => {
    UserDelete(id);
  }

  return (
    <div className="col-10 container-fluid p-0 d-flex flex-column align-content-between">
      <Topbar />

      <section className="container-sm table-responsive-xxl p-5 mt-5">
        <div className="d-flex justify-content-between mt-2">
          <h3 className="fw-bold">Users</h3>
          <Link className="btn btn-success align-content-center" to="/admin/addUser">Add User</Link>
        </div>

        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Real Name</th>
              <th scope="col">Username</th>
              <th scope="col">Number</th>
              <th scope="col">Email</th>
              <th colSpan={2} scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? users.filter((user) => user.role !== "0").map((user, index) => <UserRows key={user.id} prop={user} index={index + 1} delete={deleteUser}/>) : <h3>Loading...</h3>}
          </tbody>
        </table>
      </section>

      <Footer />
    </div>
  )
}

function UserRows(props) {
  const { name, username, number, email, id } = props.prop;
  const index = props.index;

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{name}</td>
      <td>{username}</td>
      <td>{number}</td>
      <td>{email}</td>
      <td><button className="btn btn-danger" onClick={() => props.delete(id)}>Delete</button></td>
      <td><Link to={`/admin/user/${ id }`} className="btn btn-success">Update</Link></td>
    </tr>
  )
}

export default Dashboard;