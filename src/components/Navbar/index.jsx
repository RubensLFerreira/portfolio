import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg background" data-bs-theme="dark">
        <div class="container-fluid">
          <Link to='/' class="navbar-brand">
            <h1><span className='first-name'>R</span><span className='second-name'>L</span></h1>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to='/about' class="nav-link">
                  <span>01.</span> About
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/experiece' class="nav-link">
                  <span>02.</span> Experience
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/work' class="nav-link">
                  <span>03.</span> Work
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/contact' class="nav-link">
                  <span>04.</span> Contact
                </Link>
              </li>     
              <li class="nav-item">
              <button type="button" class="btn">Resumo</button>
              </li>   
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
