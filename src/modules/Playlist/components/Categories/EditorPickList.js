import styled from 'styled-components';
import Card from './EditorPick';
import { editorPicksCard } from '../../../Playlists/components/utils/data';

const EditorPickList = () => {
  return (
    <Wrapper>
      <HeadWrapper>
        <Heading>Editor's Picks</Heading>
        <Expand>See All</Expand>
      </HeadWrapper>
      <CardWrapper>
        {editorPicksCard.map((card, index) => (
          <Card key={card.id} {...card} />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-left: 32px;
  padding-right: 28px;
  border-radius: 3px;
  height: 100%;
`;
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  gap: 24px;
  margin-top: 16px;
`;
const HeadWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;
const Heading = styled.a`
  font-size: 24px;
  font-weight: 700;
  font-family: 'CircularStd', serif;
  color: white;
  letter-spacing: -0.96px;

  &:hover {
    border-bottom: 2px solid white;
  }
`;
const Expand = styled.span`
  font-size: ${12 / 16}rem;
  font-weight: 700;
  color: #b3b3b3;
  letter-spacing: 2px;
  font-family: 'CircularStd', serif;
  margin-left: auto;
  text-transform: uppercase;
  &:hover {
    border-bottom: 2px solid #b3b3b3;
  }
`;
export default EditorPickList;
