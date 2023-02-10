import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light shadow p-0">
      <div className="container-sm px-2 px-md-5">
        <Link to="/" className="btn navbar-brand fw-bold" style={{ fontFamily: "Josefin Sans" }}>
          AxiMart
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link p-3 navitem-hover">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link p-3 navitem-hover">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link p-3 navitem-hover">About</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/team" className="nav-link p-3 navitem-hover">Team</Link>
          </li> */}
        </ul>
        <div className="nav">
          {
            sessionStorage.getItem('id') ?
              <li className="nav-item">
                <Link to="/cart" className="nav-link p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </Link>
              </li>
              : undefined
          }
          <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
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

export default Navbar;