import Card from '../PlaylistCard/PlaylistCard';
import { seriesData } from '../../utils/data';
import {
  Wrapper,
  Heading,
  HeadWrapper,
  Expand,
  CardWrapper,
} from '../styles/Styles';
const Series = () => {
  return (
    <Wrapper>
      <HeadWrapper>
        <Heading>Series</Heading>
        <Expand>See All</Expand>
      </HeadWrapper>
      <CardWrapper>
        {seriesData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};
export default Series;
