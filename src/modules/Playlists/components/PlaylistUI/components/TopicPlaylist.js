import { useState } from 'react';
import styled from 'styled-components';
import Topbar from '../../../../Topbar/Topbar';
import { Link, useParams } from 'react-router-dom';
import Spacer from '../../../../common/components/Spacer/Spacer';
import UnstyledButton from '../../../../common/components/Buttons/UnstyledButton';
import { sheikhData } from '../../utils/data';
import { getPlaylistId } from '../../utils/functions';
import {
  Wrapper,
  TopbarWrapper,
  HeroSection,
  Image,
  TextSection,
  Category,
  Heading,
  Caption,
  TrackSection,
  ButtonSection,
  Icon,
  Table,
  Tr,
  Td,
  Span,
} from '../styles/Styles';
const TopicPlaylist = ({ data }) => {
  const { id } = useParams();

  const [hover, setHover] = useState(false);
  const [indexOfItem, setIndexOfItem] = useState('');

  const item = getPlaylistId(data, parseInt(id));

  const handleOnhover = (index) => {
    setIndexOfItem(index);
    setHover(true);
  };
  const handleHoverOff = () => {
    setHover(false);
  };
  return (
    <Wrapper style={{ background: `linear-gradient(${item.background})` }}>
      <TopbarWrapper>
        <Topbar />
      </TopbarWrapper>
      <HeroSection>
        <Image src={item.playlistImage} alt="" />
        <TextSection>
          <Category>Playlist</Category>
          <Heading>{item.heading}</Heading>
          <Caption>{item.description}</Caption>
          <Spacer size={8} />
          <Caption>
            <a href="/">Huda</a>.6,193,456 likes . 50 songs, 7hr 14 mins
          </Caption>
        </TextSection>
      </HeroSection>
      <TrackSection>
        <ButtonSection>
          <UnstyledButton>
            <Icon src="/playFilled.png" alt="" />
          </UnstyledButton>
          <UnstyledButton>
            <Icon src="/heartBig.png" alt="" />
          </UnstyledButton>
          <UnstyledButton>
            <Icon src="/3dotswide.png" alt="" />
          </UnstyledButton>
        </ButtonSection>
        <Table>
          <tbody>
            {sheikhData.map((data, index) => {
              return (
                <Tr
                  onMouseEnter={() => handleOnhover(index)}
                  onMouseLeave={handleHoverOff}
                >
                  {hover && index === indexOfItem ? (
                    <img src="/play-small.png" alt="" />
                  ) : (
                    <Td>{data.id}</Td>
                  )}
                  <Td>
                    <div>{data.title}</div>
                    <a href="/">
                      <Span>{data.owner}</Span>
                    </a>
                  </Td>
                  <Td>
                    <a href="/">
                      <Span>{data.album}</Span>
                    </a>
                  </Td>
                  <Td>
                    <Span>{data.added}</Span>
                  </Td>
                  <Td>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        width: '100%',
                      }}
                    >
                      <img
                        style={
                          hover && index === indexOfItem
                            ? { display: 'revert' }
                            : { display: 'none' }
                        }
                        src="/like.png"
                        alt=""
                      />
                      <Span>{data.duration}</Span>
                      <img
                        style={
                          hover && index === indexOfItem
                            ? { display: 'revert' }
                            : { display: 'none' }
                        }
                        src="/others.png"
                        alt=""
                      />
                    </div>
                  </Td>
                </Tr>
              );
            })}
          </tbody>
        </Table>
      </TrackSection>
    </Wrapper>
  );
};

export default TopicPlaylist;
