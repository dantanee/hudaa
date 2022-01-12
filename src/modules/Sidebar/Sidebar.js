import styled from 'styled-components';
import Logo from '../common/components/Logo/Logo';
import { Home, Search, Music, PlusSquare, Heart } from 'react-feather';
const Sidebar = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <ul>
        <FirstSection>
          <ListWrapper>
            <img src="/home.png" alt="" />
            <NavLink>Home</NavLink>
          </ListWrapper>
          <ListWrapper>
            <img src="/search.png" alt="" />
            <NavLink>Search</NavLink>
          </ListWrapper>
          <ListWrapper>
            <img src="/library.png" alt="" />
            <NavLink>Your Library</NavLink>
          </ListWrapper>
        </FirstSection>
        <SecondSection>
          <ListWrapper>
            <PlusSquare color="#909090" size={24} />
            <NavLink>Create Playlist</NavLink>
          </ListWrapper>
          <SecondListWrapper>
            <Heart color="#909090" size={24} />
            <NavLink>Liked Songs</NavLink>
          </SecondListWrapper>
        </SecondSection>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  background-color: var(--black-color);
  position: fixed;

  height: 100%;
  padding: 25px 24px;
  width: 255px;

  /* width: 100%; */
`;
const ListWrapper = styled.li`
  list-style: none;
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 16px;
  & img {
    transition: filter 600ms;
    filter: brightness(60%);
  }
  & a {
    transition: color 600ms;
  }
  &:hover {
    a {
      transition: color 250ms;
      color: white;
    }
    img {
      transition: filter 250ms;
      filter: brightness(100%);
    }
  }
`;
const NavLink = styled.a`
  color: var(--link-color);
  font-family: 'CircularStd', serif;
  font-weight: 700;
  /* &:hover {
    color: white;
  } */
`;
const LogoWrapper = styled.div`
  margin-bottom: 28px;
  /* display: grid;
  place-content: center; */
`;
const FirstSection = styled.section``;
const SecondSection = styled.section`
  margin-top: 40px;
  border-bottom: 1px solid #282828;
  padding-bottom: 20px;
`;
const SecondListWrapper = styled(ListWrapper)`
  margin-top: 12px;
`;
const IconWrapper = styled.span`
  &:hover {
    color: white;
  }
`;
export default Sidebar;
