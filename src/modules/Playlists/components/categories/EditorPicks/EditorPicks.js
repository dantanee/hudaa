import Card from '../PlaylistCard/PlaylistCard';
import { editorPicksData } from '../../utils/data';
import {
  Wrapper,
  Heading,
  HeadWrapper,
  Expand,
  CardWrapper,
} from '../styles/Styles';
const EditorPickList = () => {
  return (
    <Wrapper>
      <HeadWrapper>
        <Heading>Editor's Picks</Heading>
        <Expand>See All</Expand>
      </HeadWrapper>
      <CardWrapper>
        {editorPicksData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

export default EditorPickList;
