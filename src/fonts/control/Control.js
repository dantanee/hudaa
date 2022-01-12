import styled from 'styled-components';
import Spacer from '../components/Spacer';
import EditorPickList from './EditorPickList/EditorPickList';
import Topbar from './Topbar';

const Control = () => {
  return (
    <Wrapper>
      <TopbarWrapper>
        <Topbar />
      </TopbarWrapper>
      <Spacer size={24} />
      <MainWrapper>
        <EditorPickList />
      </MainWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: #181818;
  height: 100%;
`;
const TopbarWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 5;
`;
const MainWrapper = styled.div`
  position: relative;
  top: 40px;
  height: 100%;
  width: 100%;
`;

export default Control;
