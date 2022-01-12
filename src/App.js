import Sidebar from './modules/Sidebar/Sidebar';
import styled from 'styled-components';
import Control from './control/Control';
import { Routes, Route } from 'react-router-dom';
import EditorPlaylist from './modules/Playlists/components/PlaylistUI/components/EditorPlaylist';
import TopicPlaylist from './modules/Playlists/components/PlaylistUI/components/TopicPlaylist';
import SeriesPlaylist from './modules/Playlists/components/PlaylistUI/components/SeriesPlaylist';
import Topbar from './modules/Topbar/Topbar';
import {
  editorPicksData,
  topicsData,
  seriesData,
} from './modules/Playlists/components/utils/data';
import Spacer from './modules/common/components/Spacer/Spacer';
import PlayList from './modules/Playlists/components/categories/PlaylistList/PlaylistList';

const Home = () => {
  return (
    <MainWrapper>
      <Topbar />
      <Spacer size={24} />
      <div style={{ height: '100%', background: '#181818' }}>
        <PlayList />
      </div>
    </MainWrapper>
  );
};

function App() {
  return (
    <Wrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      {/* <Control /> */}
      {/* <MainWrapper>
        <Routes>
          <Route path="/" element={<Control />} />
          <Route path="/editorPick1" element={<EditorPlaylist />} />
        </Routes>
      </MainWrapper> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/editorPicks/:id"
          element={<EditorPlaylist data={editorPicksData} />}
        />
        <Route
          path="/topics/:id"
          element={<TopicPlaylist data={topicsData} />}
        />
        <Route
          path="/series/:id"
          element={<SeriesPlaylist data={seriesData} />}
        />
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: black;
  display: grid;
  grid-template-columns: 255px 1fr;
  height: 100%;
`;
const SidebarWrapper = styled.aside``;
const MainWrapper = styled.section`
  background: #181818;
  height: 100%;
`;
export default App;
