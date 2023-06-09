import createTitle from './title';

import hamburgerImg from './assets/images/hamburger.jpg';
import wineImg from './assets/images/wine.jpg';

const siblings = [];
siblings.push(createTitle('Menu'));

const mainDishes = createSection('Main dishes', [
  createItem(
    'Hamburger',
    'Classic hamburge with high quality cheese, onion, homemade dressing, thinly cut tomato and pickles',
    6,
    hamburgerImg,
    'Juciy hamburger'
  ),
  createItem(
    'Hamburger',
    'Classic hamburge with high quality cheese, onion, homemade dressing, thinly cut tomato and pickles',
    6,
    hamburgerImg,
    'Juciy hamburger'
  ),
]);

const beverages = createSection('Beverages', [
  createItem(
    'Wine',
    'A large selection of red and white wine from around the globe',
    '4-299',
    wineImg,
    'Two glasses and bottles of red respectivly white wine'
  ),
]);

siblings.push(mainDishes);
siblings.push(beverages);

function createSection(title, items) {
  const sec = document.createElement('section');
  sec.classList.add('menu-section');

  const h2 = document.createElement('h2');
  h2.innerText = title;

  sec.appendChild(h2);

  items.forEach((item) => {
    sec.appendChild(item);
  });

  return sec;
}

function createItem(title, desc, price, imgSrc, imgAlt = '') {
  const sec = document.createElement('section');
  sec.classList.add('menu-item');

  const h3 = document.createElement('h3');
  h3.innerText = title;

  const p = document.createElement('p');
  p.innerText = desc;

  const pr = document.createElement('p');
  pr.innerHTML = '<b>Price:</b> $' + price;

  const img = new Image();
  img.src = imgSrc;
  img.alt = imgAlt;

  sec.append(h3, p, pr, img);
  return sec;
}

export default siblings;
