import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PlaylistCard = ({ id, image, title, description, url }) => {
  return (
    <Link to={`/${url}/${id}`}>
      <Card>
        <Wrapper>
          <Image src={image} alt="" />
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Wrapper>
      </Card>
    </Link>
  );
};
const Card = styled.a``;
const Wrapper = styled.div`
  padding: 16px;
  border-radius: 4px;
  /* padding-bottom: 0; */
  /* box-shadow: var(--shadow-elevation-high); */
  background-color: #282828;
  height: 275px;
`;
const Image = styled.img`
  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
  border-radius: 3px;
  width: 100%;
  height: 165px;
  object-fit: cover;
  /* width: 165px; */
`;
const Title = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  font-family: 'CircularStd', serif;
  color: white;
  margin-top: 16px;
`;
const Description = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #b3b3b3;
  font-size: ${14 / 16}rem;
  font-weight: 400;
  font-family: 'CircularStd', serif;

  margin-top: 4px;
  line-height: 1em;
`;
export default PlaylistCard;
