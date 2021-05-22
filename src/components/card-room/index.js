import '@/components/date-picker';
import '@/components/drop-down';
import { CardRoom } from '@/components/card-room/CardRoom';

$(() => {
  const cardRoom = new CardRoom();
  cardRoom.init();
});
