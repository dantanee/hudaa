import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;
export const TopbarWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
`;
export const HeroSection = styled.section`
  margin-top: 36px;
  padding-bottom: 32px;
  padding-left: 32px;
  display: flex;
  gap: 24px;
`;
export const Image = styled.img`
  height: 250px;
  object-fit: cover;
  aspect-ratio: 1/1;
  filter: drop-shadow(4px 12px 32px hsl(0deg 0% 0% / 0.4));
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const Category = styled.span`
  font-size: ${12 / 16}rem;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
`;
export const Heading = styled.h2`
  font-weight: 900;
  font-size: 72px;
  color: white;
  width: max-content;
  letter-spacing: -2.88px;
  filter: drop-shadow(4px 2px 32px hsl(0deg 0% 0% / 0.4));
`;
export const Caption = styled.p`
  color: white;
  opacity: 0.69;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.4px;
  filter: drop-shadow(4px 2px 32px hsl(0deg 0% 0% / 0.4));
  & a {
    font-size: 1rem;
    font-weight: 700;
    color: white;
    opacity: 1;
  }
`;

export const TrackSection = styled.div`
  width: 100%;
  padding-left: 32px;
  padding-top: 24px;
  background-color: rgba(0, 0, 0, 0.2);
  padding-left: 32px;
`;

export const ButtonSection = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;
export const Icon = styled.img`
  filter: brightness(100%);
  &:hover {
    filter: brightness(70%);
  }
`;
export const Table = styled.table`
  padding-top: 36px;
  gap: 16px;
  z-index: 5;
  width: 100%;
  height: 100%;
`;
export const Tr = styled.tr`
  display: grid;
  grid-template-columns: 10px 2fr repeat(3, 1fr);
  justify-items: start;
  align-items: center;
  gap: 10px;
  padding: 0 16px;
  &:hover {
    background: hsl(0, 0%, 13%);
    cursor: pointer;
    border-radius: 4px;
  }
`;
export const Thead = styled.thead``;
export const Th = styled.th`
  color: #b3b3b3;
  text-transform: uppercase;
  font-size: ${12 / 16}rem;
  letter-spacing: 2px;
`;
export const Td = styled.td`
  color: white;
  font-size: 1rem;
  font-weight: 400;
  padding-top: 8px;
  padding-bottom: 8px;
  &:hover {
    a {
      color: white;
    }
  }
`;
export const Span = styled.span`
  color: grey;
  font-size: ${14 / 16}rem;
  font-weight: 600;
`;
