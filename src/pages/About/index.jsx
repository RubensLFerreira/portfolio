import perfil from '../../../public/image/perfil.jpeg';

import './about.css';

const About = () => {
  return (
    <div className="section-about" id="about">
      <h2 className="title-about">
        <span className="span-about">01. </span>Sobre
      </h2>
      <div className="row">
        <div className="col">
          <p className="p-about">
            Olá! Meu nome é Rubens Lima e gosto de criar coisas para a WEB. Meu
            interesse pela Web surgiu quando fiz um curso técnico em Computação
            e tive meu primeiro contato com HTML e CSS através dos cursos do
            Gustavo Guanabara, onde pude criar minha primeira páginas web.
          </p>
          <p className="p-about">
            Não tenho experiência profissional na área, apenas em pequenos
            projetos de minha autoria. Atualmente estou no 7º semestre da
            faculdade em Sistemas de informação. Estou em busca da minha
            primeira oportunidade no área como júnior.
          </p>
          <p className="p-about">
            Atualmente estou estudando com foco em me tornar um desenvolvedor
            back-end com Nodejs, mas gosto de criar alguns projetos com React.
            Eu tenho já fez algumas APIs REST usando TypeScript, Prisma,
            Sequelize ou Knex, PostgreSQL, MySQL ou MongoDB, Jest e Yup.
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
