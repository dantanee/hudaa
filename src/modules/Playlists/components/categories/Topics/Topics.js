import Card from '../PlaylistCard/PlaylistCard';
import { topicsData } from '../../utils/data';
import {
  Wrapper,
  Heading,
  HeadWrapper,
  Expand,
  CardWrapper,
} from '../styles/Styles';
const Topics = () => {
  return (
    <Wrapper>
      <HeadWrapper>
        <Heading>Topics</Heading>
        <Expand>See All</Expand>
      </HeadWrapper>
      <CardWrapper>
        {topicsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};
export default Topics;
