import styled from 'styled-components';

const Logo = (props) => {
  return (
    <Link href="/">
      <img src="/logo.png" alt="" />
      <Wrapper {...props}>Huda.</Wrapper>
    </Link>
  );
};
const Wrapper = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
`;

export default Logo;
