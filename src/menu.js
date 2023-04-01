import createTitle from './title';

const siblings = [];
siblings.push(createTitle('Menu'));

function createItem(title, desc, price, imgSrc, imgAlt = '') {
  const sec = document.createElement('section');
  sec.classList.add('menu-item');

  const h3 = document.createElement('h3');
  h3.innerText = title;

  const p = document.createElement('p');
  p.innerText = desc;

  const pr = document.createElement('p');
  pr.innerText = '$' + price;

  const img = Image();
  img.src = imgSrc;
  img.alt = imgAlt;

  sec.append(h3, p, pr, img);
  return sec;
}

export default siblings;
