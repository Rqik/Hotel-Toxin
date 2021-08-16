import 'jquery-ui';

import '@/components/date-picker';
import '@/components/drop-down';
import '@/components/check-box-list';
import '@/components/range-slider';
import '@/components/card-slider';

import SearchRoom from './SearchRoom';
import './search-room.scss';

$(() => {
  const searchPanel = new SearchRoom();
  searchPanel.init();
});
