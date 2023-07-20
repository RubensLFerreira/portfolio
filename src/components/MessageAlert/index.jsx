import { Box, Title, Paragrafo, Link } from './Styled';

const index = () => {
  return (
    <Box>
      <Title>Aviso!</Title>
      <Paragrafo>
        Outro portfólio mais moderno está sendo construido para substituição
        deste
      </Paragrafo>
      <Paragrafo>
        Visite meu GitHub{' '}
        <Link href="https://github.com/RubensLFerreira">
          RubensLFerreira
        </Link>
      </Paragrafo>
    </Box>
  );
};

export default index;
