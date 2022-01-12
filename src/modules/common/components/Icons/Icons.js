import React from 'react';
import styled from 'styled-components';
import { Search, Home, X } from 'react-feather-icons';

const icons = {
  search: Search,
  home: Home,
  close: X,
};

const Icon = ({ id, color, size, strokeWidth, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: ${(p) =>
      p.strokeWidth !== undefined ? p.strokeWidth + 'px' : undefined};
  }
`;

export default Icon;
