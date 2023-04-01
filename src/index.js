import header from './header.js';
import start from './start';
import footer from './footer';

import style from './index.scss';

const main = document.createElement('main');
start.forEach((el) => {
  main.appendChild(el);
});

const body = document.body;
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);

const links = header.querySelectorAll('a');
links.forEach((link) => {
  link.addEventListener('click', changePage);
});

function changePage(e) {
  let newMain;
  switch (this.id) {
    case 'home':
      newMain = start;
      break;
    case 'menu':
      newMain = [document.createElement('h1')];
      newMain[0].innerText = 'Menu';
      break;
    default:
      return;
  }
  main.innerText = '';
  newMain.forEach((el) => {
    main.appendChild(el);
  });
}
