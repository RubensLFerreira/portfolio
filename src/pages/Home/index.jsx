import ButtonTop from '../../components/ButtonTop';

import './home.css';

const Home = () => {
  return (
    <div className="container" id="home">
      <div className="info">
        <p className="hello">Hi, my name is</p>
        <h1>Rubens Lima.</h1>
        <h2>I build things for the web.</h2>
        <p className="description">
          Hello! My name is Rubens Lima, I'm an Information System student at
          IFCE, I'm currently in my 6th semester of college. I have experience
          in some technologies such as NodeJS, Postgres, Prisma and Express,
          among others.
        </p>
      </div>
      <ButtonTop />
    </div>
  );
};

export default Home;
