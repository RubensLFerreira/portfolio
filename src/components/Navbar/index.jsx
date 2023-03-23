import { Link } from 'react-scroll';

import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg background" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500} className="navbar-brand">
            <h1>
              <span className="first-name">R</span>
              <span className="second-name">L</span>
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="about" spy={true} smooth={true} offset={-40} duration={500} className="nav-link">
                  <span>01.</span> About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="experience" className="nav-link">
                  <span>02.</span> Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link to="work" className="nav-link">
                  <span>03.</span> Work
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <span>04.</span> Contact
                </Link>
              </li>
              <li className="nav-item">
                <button type="button" className="btn">
                  Resumo
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
