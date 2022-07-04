import AwesomeBooks from '../modules/awesomebooks.js';
import handleSinglePageNavigation from '../modules/singlepagelayout.js';
import displayTime from '../modules/datetime.js';

const books = new AwesomeBooks();
console.log(books);
handleSinglePageNavigation();
displayTime();