import { Link } from 'react-scroll';

import './ButtonTop.css';

const ButtonTop = () => {
  return (
    <div className="button-top">
      <Link to="home" spy={true} smooth={true} offset={-200} duration={500}>
        <h1>
          <i class="bi bi-arrow-up-circle-fill"></i>
        </h1>
      </Link>
    </div>
  );
};

export default ButtonTop;
