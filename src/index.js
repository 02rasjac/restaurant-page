import header from './header.js';
import start from './start';
import footer from './footer';

import style from './index.scss';

const body = document.body;
body.appendChild(header);
body.appendChild(start);
body.appendChild(footer);

const links = header.querySelectorAll('a');
links.forEach((link) => {
  link.addEventListener('click', changePage);
});

function changePage(e) {
  console.log(this.id);
}
