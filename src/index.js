import header from './header.js';
import start from './start';
import menu from './menu';
import footer from './footer';

import style from './index.scss';

const main = document.createElement('main');

//* Set up the starting page. Should generally be `start`.
start.forEach((el) => {
  main.appendChild(el);
});

const body = document.body;
body.appendChild(header);
body.appendChild(main);
body.appendChild(footer);

const links = header.querySelectorAll('a');
links.forEach((link) => {
  if (link.id === 'home') link.classList.add('active');
  link.addEventListener('click', changePage);
});

function changePage(e) {
  let newMain;
  switch (this.id) {
    case 'home':
      newMain = start;
      break;
    case 'menu':
      newMain = menu;
      break;
    default:
      return;
  }

  // Add class `active` to the link that is active.
  links.forEach((link) => link.classList.remove('active'));
  this.classList.add('active');

  main.innerText = '';
  newMain.forEach((el) => {
    main.appendChild(el);
  });
}
