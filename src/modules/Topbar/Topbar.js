import styled from 'styled-components';
import UnstyledButton from '../common/components/Buttons/UnstyledButton';

const Topbar = (props) => {
  return (
    <Wrapper>
      <ButtonsWrapper>
        <ImageWrapper>
          <img src="/leftback.png" alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <img src="/rightback.png" alt="" />
        </ImageWrapper>
      </ButtonsWrapper>
      <LoginWrapper>
        <UnstyledButton>
          <SignUp>SIGN UP</SignUp>
        </UnstyledButton>
        <UnstyledButton>
          <SignIn>LOG IN</SignIn>
        </UnstyledButton>
      </LoginWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: rgba(0, 0, 0, 0.5);
  /* opacity: 0.4; */
  width: 100%;
  height: 64px;
  display: flex;
  /* position: fixed; */
  align-items: center;
  padding-left: 37px;
  padding-right: 28px;
`;
const ImageWrapper = styled.div`
  background-color: black;
  border-radius: 50%;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;
const LoginWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;
const SignIn = styled.a`
  background-color: white;
  display: block;
  padding: 8px;
  width: 125px;
  text-align: center;
  border-radius: 20px;
  font-weight: 700;
  font-size: 12px;
  color: #181818;
  letter-spacing: 1.76px;
  font-family: 'CircularStd', serif;
  font-weight: 700;
  opacity: 1;
`;
const SignUp = styled(SignIn)`
  background-color: transparent;
  color: white;
`;

export default Topbar;
