import { Link } from 'react-scroll';

import './ButtonTop.css';

const ButtonTop = () => {
  return (
    <div className="button-top">
      <Link to="home" spy={true} smooth={true} offset={-200} duration={500}>
        <button type="button" className="btn-topo">
          Topo
        </button>
      </Link>
    </div>
  );
};

export default ButtonTop;
