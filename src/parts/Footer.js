import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="mt-auto p-3 bg-secondary bg-opacity-10 text-secondary small text-center">
      <div>Copyright &copy; 2022 - AxiMart</div>
      <div className="nav-item">
        <Link className="nav-link" to="/about">contact us</Link>
      </div>
    </footer>
  )
}

export default Footer;