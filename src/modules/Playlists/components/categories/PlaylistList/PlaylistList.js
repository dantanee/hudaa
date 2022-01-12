import Spacer from '../../../../common/components/Spacer/Spacer';
import EditorPickList from '../EditorPicks/EditorPicks';
import Series from '../Series/Series';
import Topics from '../Topics/Topics';

const PlayList = () => {
  return (
    <div>
      <EditorPickList />
      <Spacer size={45} />
      <Topics />
      <Spacer size={45} />
      <Series />
    </div>
  );
};
export default PlayList;
