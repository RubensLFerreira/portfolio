import './home.css';

const Home = () => {
  return (
    <div className="container">
      <div className="info">
        <p className='hello'>Hi, my name is</p>
        <h1>Rubens Lima.</h1>
        <h2>I build things for the web.</h2>
        <p className='description'>
          Olá! Me chamo Rubens Lima, sou estudante de Sistema de Informação no
          IFCE, estou atualmente no meu 6° semestre da faculdade. Possuo
          expriências em algumas tecnologias como NodeJS, Postgres, Prisma e
          Express, entre outras.
        </p>
      </div>
    </div>
  );
};

export default Home;
