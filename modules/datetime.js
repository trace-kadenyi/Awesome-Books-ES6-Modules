import { DateTime } from '../script/luxon.js';

const datetime = document.querySelector('.datetime');

const displayTime = () => {
  const today = DateTime.local();
  const presentTime = today.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  datetime.innerHTML = presentTime;
};

export default displayTime;