import { Link } from 'react-scroll';

import pdf from '../../../public/files/cv-rubens.pdf';

import './navbar.css';

const Navbar = () => {
  function openPDF() {
    window.open(`${pdf}`, '_blank');
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg background" data-bs-theme="dark">
        <div className="container-fluid">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="navbar-brand"
          >
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
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={300}
                  className="nav-link"
                >
                  <span>01.</span> Sobre
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={300}
                  className="nav-link"
                >
                  <span>02.</span> Experiências
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={300}
                  className="nav-link"
                >
                  <span>03.</span> Trabalhos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={300}
                  className="nav-link"
                >
                  <span>04.</span> Contatos
                </Link>
              </li>
              <li className="nav-item">
                <button onClick={openPDF} type="button" className="btn">
                  Currículo
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
