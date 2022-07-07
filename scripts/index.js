import AwesomeBooks from '../modules/class.js';
import checkLocal from '../modules/getLocalStorage.js';
import getData from '../modules/getData.js';
import remover from '../modules/remover.js';
import handlesubmit from '../modules/submitTask.js';
import handleSinglePageNavigation from '../modules/singlePageLayout.js';
import displayTime from '../modules/datetime.js';

const books = new AwesomeBooks();

handlesubmit(books);
getData(books);
checkLocal(books);
remover(books);
handleSinglePageNavigation(books);
displayTime();

export default books;