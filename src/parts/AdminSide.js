import { Link } from "react-router-dom";

const SideBar = () => {
  // const userTitle = sessionStorage.getItem("username");

  return (
    <div className="col-2 px-0 bg-dark">
      <div id="sidebar" className="collapse collapse-horizontal show border-end">
        <div id="sidebar-nav" className="list-group list-group-flush rounded-0 text-sm-start min-vh-100">
          <div className="list-group-item p-3 bg-primary d-inline-block text-truncate">
            <h5 className="m-0 fw-bold text-light text-center" style={{ fontFamily: "Josefin Sans" }}>AxiMart</h5>
          </div>
          <div className="list-group-item py-3 bg-dark text-light d-inline-block text-truncate">
            <h5 className="m-0 text-end">Admin</h5>
          </div>
          <Link to="/admin" className="list-group-item py-2 bg-dark text-light d-inline-block text-truncate"
            data-bs-parent="#sidebar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              className="bi m-2 bi-person-fill-gear" viewBox="0 0 16 18">
              <path
                d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>Users
          </Link>
          <Link to="/admin/products" className="list-group-item py-2 bg-dark text-light d-inline-block text-truncate"
            data-bs-parent="#sidebar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              className="bi m-2 bi-bag-fill" viewBox="0 0 16 18">
              <path
                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
            </svg>Products
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SideBar;