import { Link, useNavigate } from "react-router-dom";

const Topbar = () => {
  let navigate = useNavigate();
  
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light shadow p-0">
      <div className="container-sm ps-0 pe-2 pe-md-5">
        <div></div>
        <div className="nav">
          <div className="nav-item btn-group">
            <button type="button" className="btn dropdown-toggle p-3" data-bs-toggle="dropdown" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                className="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
             {
                sessionStorage.getItem('id')
                  ? (<li> <a href="#" onClick={() => { sessionStorage.clear(); navigate('/'); }} className="dropdown-item nav-link p-3">Logout</a> </li>)
                  : (<li> <Link to="/login" className="dropdown-item nav-link p-3">Login</Link> </li>)
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Topbar;