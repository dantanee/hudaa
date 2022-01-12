import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-left: 32px;
  padding-right: 28px;
  border-radius: 3px;
  height: 100%;
`;
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(187px, 1fr));
  gap: 24px;
  margin-top: 16px;
`;
export const HeadWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;
export const Heading = styled.a`
  font-size: 24px;
  font-weight: 700;
  font-family: 'CircularStd', serif;
  color: white;
  letter-spacing: -0.96px;

  &:hover {
    border-bottom: 2px solid white;
  }
`;
export const Expand = styled.span`
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
