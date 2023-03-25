import { useState } from 'react';

import './Experience.css';

const Work = () => {
  const [buttonAtive, setButtonAtive] = useState('button1');

  const buttonClick = (buttonId) => {
    setButtonAtive(buttonId);
  };

  return (
    <div className="container" id="experience">
      <div className="row section-experience">
      <h2 className='title-about'>
        <span className='span-about'>02. </span>Experience
      </h2>
        <div className="col-3 left">
          <button className="btn-flex" onClick={() => buttonClick('button1')}>
            Upstatement
          </button>
          <button className="btn-flex" onClick={() => buttonClick('button2')}>
            Scout
          </button>
        </div>

        <div className="col right">
          {buttonAtive === 'button1' && (
            <div>
              <h2>Engineer @ Upstatement</h2>
              <p className='p-experience'>
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
              </p>
              <p className='p-experience'> 
                Work with a variety of different languages, platforms,
                frameworks, and content management systems such as JavaScript,
                TypeScript, Gatsby, React, Craft, WordPress, Prismic, and
                Netlify
              </p>
              <p className='p-experience'>
                Communicate with multi-disciplinary teams of engineers,
                designers, producers, and clients on a daily basis
              </p>
            </div>
          )}
          {buttonAtive === 'button2' && (
            <div>
              <h2>Studio Developer @ Scout</h2>
              <p className='p-experience'>
                Worked with a team of three designers to build a marketing
                website and e-commerce platform for blistabloc, an ambitious
                startup originating from Northeastern
              </p>
              <p className='p-experience'>
                Helped solidify a brand direction for blistabloc that spans both
                packaging and web
              </p>
              <p className='p-experience'>
                Interfaced with clients on a weekly basis, providing
                technological expertise
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
