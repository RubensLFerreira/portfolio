import perfil from '../../../public/image/perfil.jpeg';

import './about.css';

const About = () => {
  return (
    <div className="section-about" id="about">
      <h2 className="title-about">
        <span className="span-about">01. </span>About me
      </h2>
      <div className="row">
        <div className="col">
          <p className="p-about">
            Hello! My name is Rubens Lima and I like to create things for the
            Web. My interest in the Web arose when I took a technical course in
            Computing and had my first contact with HTML and CSS through Gustavo
            Guanabara's courses, where I was able to create my first basic
            pages.
          </p>
          <p className="p-about">
            I do not have professional experience in the area, only in small
            projects of my own. I am currently in the 6th semester of college in
            Information Systems. I'm looking for my first opportunity in the
            area as a junior.
          </p>
          <p className="p-about">
            I'm currently studying with a focus on becoming a back-end developer
            with Nodejs, but I enjoy creating some projects with React. I've
            already made some REST APIs using TypeScript, Prisma, Sequelize or
            Knex, PostgreSQL or MySQL, Jest and Yup.
          </p>
        </div>
        <div className="col">
          <div className="image-perfil">
            <img src={perfil} className="img-thumbnail" alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <ul className="list-about">
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>TypeScript</li>
          <li>Sequelize</li>
          <li>PostgresSQL</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
